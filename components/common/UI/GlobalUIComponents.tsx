import GlobalLoader from "./GlobalLoader/page";
import ToastModal from "./ToastModal/page";
import BackToTop from "../BackToTop";

export function GlobalUIComponents() {
  return (
    <>
      <BackToTop />
      <GlobalLoader />
      <ToastModal />
    </>
  );
}
