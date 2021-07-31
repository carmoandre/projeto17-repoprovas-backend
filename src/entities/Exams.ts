import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Categories from "./Categories";
import Subjects from "./Subjects";
import Courses from "./Courses";
import Professors from "./Professors";

@Entity("exams")
export default class Exams {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Categories, (category) => category.exams)
    category: Categories;

    @ManyToOne(() => Subjects, (subject) => subject.exams)
    subject: Subjects;

    @ManyToOne(() => Courses, (course) => course.exams)
    course: Courses;

    @ManyToOne(() => Professors, (professor) => professor.exams)
    professor: Professors;

    @Column()
    file: string;
}
