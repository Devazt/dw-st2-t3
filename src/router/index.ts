import { Router } from "express";
import CPenduduk from "../controllers/CPenduduk";

const router = Router();

router.get("/api/v1", CPenduduk.find);
router.get("/api/v1/:id", CPenduduk.findOne);
router.post("/api/v1/", CPenduduk.create);
router.patch("/api/v1/:id", CPenduduk.update);
router.delete("/api/v1/:id", CPenduduk.delete);

export default router;