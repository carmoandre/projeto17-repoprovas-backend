import { getRepository } from "typeorm";
import faker from "faker";

import Subjects from "../../src/entities/Subjects";
import { insertSemester } from "./semesterFactory";
import { insertCourse } from "./courseFactory";

export async function subjectBody() {
    const name = faker.random.word();
    const semesterId = (await insertSemester()).id;
    const courseId = (await insertCourse()).id;
    const subjectBody = {
        name,
        semesterId,
        courseId,
    };

    return subjectBody;
}

export async function insertSubject() {
    const body = await subjectBody();
    const subjectId = await getRepository(Subjects).insert(body);
    return { ...body, id: subjectId.identifiers[0].id };
}
