import { checkServerHealth } from "@/actions/public/checkServerHealth";
import BadGatewayModal from "./GatewayModal";

const getServerStatus = async (): Promise<boolean> => {
  try {
    const response = await checkServerHealth();
    return !response;
  } catch {
    return true;
  }
};

const ServerStatus = async () => {
  const initialDown = await getServerStatus();
  return <BadGatewayModal initialDown={false} />;
};

export default ServerStatus;
