import Image from "next/image";
import PanelBackHeader from "../../PanelBackHeader";

interface Props {
    orderId: string;
    orderDate: string;
}

const OrderHeader: React.FC<Props> = ({ orderId, orderDate }) => (
    <>
        <PanelBackHeader
            textSizeClassName="text-3xl"
            BackButtonSizing={{ width: 25, height: 25 }}
        />
        <div className="flex justify-between my-6">
            <div className="bg-[var(--skyBlueShade)] px-4 text-sm rounded-full">
                <span className="font-semibold">Order ID:</span> ${orderId}
            </div>
            <div>{orderDate}</div>
        </div>
    </>
);

export default OrderHeader;
