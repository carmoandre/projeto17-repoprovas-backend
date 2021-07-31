import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
} from "typeorm";
import Courses from "./Courses";
import Exams from "./Exams";

@Entity("professors")
export default class Professors {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Professors, (professors) => professors.exams)
    exams: Exams[];

    @ManyToOne(() => Courses, (course) => course.professors)
    course: Courses;
}
