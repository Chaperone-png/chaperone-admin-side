"use client";

import { useEffect, useMemo } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { hideToast } from "@/store/slices/toastSlice";
import { RootState } from "@/store/store";
import "./page.scss";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { iconMap, ValidModalType } from "@/helpers/GlobalComponents/Loader";

const ToastNotification = () => {
  const dispatch = useDispatch();
  const { show, type, message, position, duration } = useSelector(
    (state: RootState) => state.toast
  );

  const toastIcon = useMemo(
    () => iconMap[type as ValidModalType] || iconMap["info"],
    [type]
  );

  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(() => dispatch(hideToast()), duration || 5000);
    return () => clearTimeout(timer);
  }, [show, duration, dispatch]);

  if (!show) return null;

  return (
    <div className={`toast-modal ${type} ${position}`}>
      <div className="inner-toast-modal">
        <button className="close-toast" onClick={() => dispatch(hideToast())}>
          <XCircleIcon />
        </button>
        <div className={`toast-icon ${type}-icon`}>
          <Image
            alt={`${type}-icon` || "Toast Message Icon"}
            src={toastIcon}
            height={40}
            width={40}
          />
        </div>
        <div>
          <h3>{type === "success" ? "Success" : "Notification"}</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default ToastNotification;
