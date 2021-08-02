import { Request, Response } from "express";

import { uploadSchema } from "./schemas/examSchema";
import * as examService from "../services/examService";

export async function Upload(req: Request, res: Response) {
    try {
        const validation = uploadSchema.validate(req.body);
        if (validation.error) return res.sendStatus(400);

        const body = req.body;
        const result = await examService.upload(body);
        const status = result ? 201 : 400;
        res.sendStatus(status);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}
