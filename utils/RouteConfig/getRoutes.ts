"use server";
import fs from "fs/promises";
import path from "path";

let cachedRoutes: Set<string> | null = null;

export const getAppRoutes = async (): Promise<Set<string>> => {
  if (cachedRoutes) return cachedRoutes;

  const appDir = path.join(process.cwd(), "app");
  const routes = new Set<string>();

  const readDirRecursive = async (dir: string, basePath = "") => {
    const files = await fs.readdir(dir, { withFileTypes: true });

    await Promise.all(
      files.map(async (file) => {
        const fullPath = path.join(dir, file.name);
        let relativePath = path.join(basePath, file.name).replace(/\\/g, "/");

        if (file.isDirectory() && !file.name.startsWith("(")) {
          await readDirRecursive(fullPath, relativePath);
        } else if (file.name === "page.tsx" || file.name === "page.ts") {
          relativePath = relativePath.replace(/\/?page\.(tsx|ts)$/, "");

          routes.add(relativePath === "" ? "/" : `/${relativePath}`);
        }
      })
    );
  };

  await readDirRecursive(appDir);
  cachedRoutes = routes;
  return routes;
};
