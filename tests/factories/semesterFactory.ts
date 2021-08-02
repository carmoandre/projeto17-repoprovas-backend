import { getRepository, getConnection } from "typeorm";
import faker from "faker";

import Semesters from "../../src/entities/Semesters";

export function semesterBody() {
    const name = faker.random.word();
    const semesterBody = {
        name,
    };

    return semesterBody;
}

export async function insertSemester() {
    const body = semesterBody();
    const semesterId = await getRepository(Semesters).insert(body);
    return { ...body, id: semesterId.identifiers[0].id };
}
