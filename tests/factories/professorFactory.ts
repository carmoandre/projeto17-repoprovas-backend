import { getRepository } from "typeorm";
import faker from "faker";

import Professors from "../../src/entities/Professors";
import { insertCourse } from "./courseFactory";

export async function professorBody() {
    const name = faker.random.word();
    const courseId = (await insertCourse()).id;
    const professorBody = {
        name,
        courseId,
    };

    return professorBody;
}

export async function insertProfessor() {
    const body = await professorBody();
    const professorId = await getRepository(Professors).insert(body);
    return { ...body, id: professorId.identifiers[0].id };
}
