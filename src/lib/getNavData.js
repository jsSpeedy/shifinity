import { promises as fs } from "fs";
import path from "path";

export async function getNavData() {
  const filePath = path.join(process.cwd(), "src/data/navigation.json");
  const fileContent = await fs.readFile(filePath, "utf-8");
  return JSON.parse(fileContent);
}
