import { getAppRoutes } from "@/utils/RouteConfig/getRoutes";

let cachedRoutes: Set<string> | null = null;

export const fetchAppRoutes = async (): Promise<Set<string>> => {
  if (!cachedRoutes) {
    const routes = await getAppRoutes();
    cachedRoutes = new Set(routes);
  }
  return cachedRoutes;
};
