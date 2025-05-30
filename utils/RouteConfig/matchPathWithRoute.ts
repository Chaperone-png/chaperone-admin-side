export const isExactOrDynamicMatch = (path: string, route: string) => {
  if (path === route) return true;

  const pathSegments = path.split("/").filter(Boolean);
  const routeSegments = route.split("/").filter(Boolean);

  if (pathSegments.length !== routeSegments.length) return false;

  return routeSegments.every((seg, i) => {
    return seg === pathSegments[i] || seg.startsWith("[");
  });
};
