import SuccessIcon from "@/public/assets/images/alerticons/successicon.png";
import ErrorIcon from "@/public/assets/images/alerticons/erroricon.svg";
import WarningIcon from "@/public/assets/images/alerticons/warningicon.svg";
import InfoIcon from "@/public/assets/images/alerticons/infoicon.png";
import { StaticImageData } from "next/image";
import { ModalType } from "@/types/ReduxSliceType/toast";

export type ValidModalType = Exclude<ModalType, "">;

export const iconMap: Record<ValidModalType, StaticImageData> = {
  success: SuccessIcon,
  error: ErrorIcon,
  info: InfoIcon,
  warning: WarningIcon,
};
