import { Request, Response } from "express";
import SPenduduk from "../services/SPenduduk";

export default new class CPenduduk {
    find(req: Request, res: Response) {
        SPenduduk.find(req, res);
    }
    findOne(req: Request, res: Response) {
        SPenduduk.findOne(req, res);
    }
    create(req: Request, res: Response) {
        SPenduduk.create(req, res);
    }
    update(req: Request, res: Response) {
        SPenduduk.update(req, res);
    }
    delete(req: Request, res: Response) {
        SPenduduk.delete(req, res);
    }
}