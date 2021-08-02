import { getRepository } from "typeorm";

import Exams from "../entities/Exams";

interface ExamBody {
    name: string;
    categoryId: number;
    courseId: number;
    subjectId: number;
    professorId: number;
    link: string;
}

export async function upload(body: ExamBody) {
    const exam = await getRepository(Exams).insert(body);
    if (exam.identifiers.length) return true;
    return false;
}
