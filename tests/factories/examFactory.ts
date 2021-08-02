import { getRepository } from "typeorm";
import faker from "faker";

import Exams from "../../src/entities/Exams";
import { insertCategory } from "./categoryFactory";
import { insertCourse } from "./courseFactory";
import { insertSubject } from "./subjectFactory";
import { insertProfessor } from "./professorFactory";

export async function examBody() {
    const categoryId = (await insertCategory()).id;
    const courseId = (await insertCourse()).id;
    const subjectId = (await insertSubject()).id;
    const professorId = (await insertProfessor()).id;
    const link = faker.internet.url();

    // linkar professor e subject na tabela relacional

    const exam = {
        name: "2021.2",
        categoryId,
        courseId,
        subjectId,
        professorId,
        link,
    };

    return exam;
}

export async function insertExam() {
    const body = await examBody();
    const examId = await getRepository(Exams).insert(body);
    return { ...body, id: examId.identifiers[0].id };
}
