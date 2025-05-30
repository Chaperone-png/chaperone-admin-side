import { ProfileSectionList } from "@/configs/constants/profile/ProfileLeftPanel";
import { openCartDrawer } from "@/store/slices/cartSlice";
import { NavigationListProps } from "@/types/profile";
import { useDispatch } from "react-redux";

const NavigationList: React.FC<NavigationListProps> = ({
  currentSection,
  onSectionClick,
}) => {
  const dispatch = useDispatch();

  const navigateProfileSections = (value: string) => {
    let activeSectionValue = value;
    if (value.toLowerCase().includes("cart")) {
      dispatch(openCartDrawer(true));
      activeSectionValue = "profile";
    }
    onSectionClick(activeSectionValue);
  };

  return (
    <div className="profileNav mt-4">
      <ul className="flex flex-col gap-2">
        {ProfileSectionList.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => navigateProfileSections(section.activeValue)}
              className={currentSection === section.activeValue ? "active" : ""}
            >
              {section.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationList;
