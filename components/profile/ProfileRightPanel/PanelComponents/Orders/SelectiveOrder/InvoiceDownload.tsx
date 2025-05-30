import Button from "@/components/common/UI/Button";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";

const InvoiceDownload = () => (
  <div className="get-invoice flex justify-between items-center border-box-ui">
    <div>Get Invoice</div>
    <Button
      className="common-button max-w-[250px]"
      content="Download Invoice"
      rightIcon={<DocumentArrowDownIcon className="size-5 text-white" />}
    />
  </div>
);

export default InvoiceDownload;
