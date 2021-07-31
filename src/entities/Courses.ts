import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Exams from "./Exams";
import Professors from "./Professors";
import Subjects from "./Subjects";

@Entity("courses")
export default class Courses {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Exams, (exams) => exams.course)
    exams: Exams[];

    @OneToMany(() => Subjects, (subjects) => subjects.course)
    subjects: Subjects[];

    @OneToMany(() => Professors, (professors) => professors.course)
    professors: Professors[];
}
