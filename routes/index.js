import { Router } from "express";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const router = Router();

// router.get("/", (req, res) => {
//   res.send("<h1>En camara lenta</h1>");
// });

router.get("/", (req, res) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const buildPath = path.join(__dirname, "../views/index.html");
  res.sendFile(buildPath)
});

export default router;
