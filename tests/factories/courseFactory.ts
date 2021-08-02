import { getRepository } from "typeorm";
import faker from "faker";

import Courses from "../../src/entities/Courses";

export function courseBody() {
    const name = faker.random.word();
    const courseBody = {
        name,
    };

    return courseBody;
}

export async function insertCourse() {
    const body = courseBody();
    const courseId = await getRepository(Courses).insert(body);
    return { ...body, id: courseId.identifiers[0].id };
}
