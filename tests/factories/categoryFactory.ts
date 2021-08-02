import { getRepository } from "typeorm";
import faker from "faker";

import Categories from "../../src/entities/Categories";

export function categoryBody() {
    const name = faker.random.word();
    let categoryBody = {
        name,
    };

    return categoryBody;
}

export async function insertCategory() {
    const body = categoryBody();
    const categoryId = await getRepository(Categories).insert(body);
    return { ...body, id: categoryId.identifiers[0].id };
}
