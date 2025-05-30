"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "@/hooks/useForm";
import InputField from "@/components/common/UI/InputField";
import SelectField from "@/components/common/UI/SelectField";
import DateOfBirthPicker from "./DateOfBirthPicker";
import EmailVerification from "./EmailVerification";
import SaveButton from "./SaveButton";
import { RootState } from "@/store/store";
import { showToast } from "@/store/slices/toastSlice";
import { updateUserProfile } from "@/services/apis/admin/userAPIs";
import { updateUserFields } from "@/store/slices/userSlice";
import { executeApiCall } from "@/utils/APIResponseHandling";
import {
  initialProfileData,
  validateProfile,
} from "@/utils/FormValidations/UserProfile";

import {
  EnvelopeIcon,
  KeyIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

type ProfileFormData = {
  firstName: string;
  lastName: string;
  password: string;
  phone: string;
  email: string;
  gender: string;
  dateOfBirth: string;
  socialProvider: string;
  providerId: string;
  referralCode: string;
  referredBy: string;
};

const ProfileInformation = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state: RootState) => state.user);
  const [emailVerified, setEmailVerified] = useState(false);

  const { formData, errors, setFieldValue, handleChange, validateForm } =
    useForm<ProfileFormData>(initialProfileData, validateProfile);

  useEffect(() => {
    const populateUserData = () => {
      const [firstName = "", lastName = ""] = userInfo?.name?.split(" ") ?? [];

      const mappedData: ProfileFormData = {
        firstName,
        lastName,
        email: userInfo.email ?? "",
        phone: userInfo.phone ?? "",
        gender: userInfo.gender ?? "",
        dateOfBirth: userInfo.date_of_birth ?? "",
        socialProvider: userInfo.social_provider ?? "",
        providerId: userInfo.social_id ?? "",
        referralCode: userInfo.referral_code ?? "",
        referredBy: userInfo.referred_by ?? "",
        password: "",
      };

      Object.entries(mappedData).forEach(([key, value]) =>
        setFieldValue(key as keyof ProfileFormData, value)
      );

      setEmailVerified(false);
    };

    populateUserData();
  }, [userInfo]);

  const handleEmailVerify = () => {
    setTimeout(() => setEmailVerified(true), 500);
  };

  const saveDateOfBirth = (value: string) => {
    setFieldValue("dateOfBirth", value ?? "");
  };

  const buildProfilePayload = (payload: ProfileFormData) => ({
    name: `${payload.firstName} ${payload.lastName}`.trim(),
    email: payload.email,
    phone: payload.phone,
    gender: payload.gender,
    date_of_birth: payload.dateOfBirth,
    social_provider: payload.socialProvider,
    social_id: payload.providerId,
    referral_code: payload.referralCode,
    referred_by: payload.referredBy,
  });

  const handleSave = async () => {
    if (!validateForm()) {
      dispatch(
        showToast({ type: "error", message: "Please fix validation errors" })
      );
      return;
    }

    const finalPayload = buildProfilePayload(formData);

    try {
      await executeApiCall(
        dispatch,
        () =>
          updateUserProfile({
            token: userInfo.token,
            updatePayload: finalPayload,
          }),
        () => {
          dispatch(updateUserFields(finalPayload));
        },
        "Successfully updated the profile"
      );
    } catch {
      dispatch(
        showToast({ type: "error", message: "Failed to update profile" })
      );
    }
  };

  return (
    <div className="bg-white rounded-3xl p-5 min-h-[640px] profile-info-wrapper">
      <h2 className="text-3xl font-semibold">Profile Information</h2>

      <form
        className="grid grid-cols-2 gap-6 mt-8"
        onSubmit={(e) => {
          e.preventDefault();
          handleSave();
        }}
      >
        <InputField
          label="First Name"
          name="firstName"
          Icon={UserIcon}
          type="text"
          value={formData.firstName}
          onChange={handleChange}
          error={errors.firstName}
        />
        <InputField
          label="Last Name"
          name="lastName"
          Icon={UserIcon}
          type="text"
          value={formData.lastName}
          onChange={handleChange}
          error={errors.lastName}
        />
        <DateOfBirthPicker
          dob={formData.dateOfBirth}
          setDob={saveDateOfBirth}
        />
        <SelectField
          label="Gender"
          name="gender"
          value={formData.gender}
          error={errors.gender}
          options={["Male", "Female", "Don't want to disclose"]}
          onChange={handleChange}
        />
        <EmailVerification
          email={formData.email}
          onChange={handleChange}
          emailVerified={emailVerified}
          handleEmailVerify={handleEmailVerify}
          error={errors.email}
        />
        <InputField
          label="Phone"
          name="phone"
          Icon={PhoneIcon}
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
        />
        <SelectField
          label="Social Provider"
          name="socialProvider"
          value={formData.socialProvider}
          error={errors.socialProvider}
          options={["Google", "Twitter", "Instagram", "Facebook", "LinkedIn"]}
          onChange={handleChange}
        />
        <InputField
          label="Provider ID"
          name="providerId"
          Icon={EnvelopeIcon}
          type="text"
          value={formData.providerId}
          onChange={handleChange}
          error=""
        />
        <InputField
          label="Your Referral Code"
          name="referralCode"
          Icon={KeyIcon}
          type="text"
          value={formData.referralCode}
          onChange={handleChange}
          error=""
        />
        <InputField
          label="Referred By Code"
          name="referredBy"
          Icon={KeyIcon}
          type="text"
          value={formData.referredBy}
          onChange={handleChange}
          error=""
        />
        <SaveButton />
      </form>
    </div>
  );
};

export default ProfileInformation;
