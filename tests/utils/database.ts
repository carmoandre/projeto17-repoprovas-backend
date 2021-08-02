import { getRepository } from "typeorm";

import Categories from "../../src/entities/Categories";
import Courses from "../../src/entities/Courses";
import Exams from "../../src/entities/Exams";
import Professors from "../../src/entities/Professors";
import Semesters from "../../src/entities/Semesters";
import Subjects from "../../src/entities/Subjects";

export async function clearDatabase() {
    await getRepository(Exams).delete({});
    await getRepository(Categories).delete({});
    await getRepository(Subjects).delete({});
    await getRepository(Professors).delete({});
    await getRepository(Semesters).delete({});
    await getRepository(Courses).delete({});
}
