import BadgeLevel from "@/components/common/UI/BadgeLevel/page";
import { UserInfoProps } from "@/types/profile";

const UserInfo: React.FC<UserInfoProps> = ({ name, badgeLevel }) => {
  return (
    <div className="text-center mt-5">
      <h3 className="font-semibold text-[var(--textColor)] text-[18px]">
        {name}
      </h3>
      <div className="tagline mt-2 mb-4">
        <BadgeLevel level={badgeLevel} />
      </div>
    </div>
  );
};

export default UserInfo;
