import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    JoinTable,
    ManyToOne,
    OneToMany,
} from "typeorm";
import Semesters from "./Semesters";
import Courses from "./Courses";
import Professors from "./Professors";
import Exams from "./Exams";

@Entity("subjects")
export default class Subjects {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Semesters, (semester) => semester.subjects)
    semester: number;

    @ManyToOne(() => Courses, (course) => course.subjects)
    course: number;

    @OneToMany(() => Exams, (exam) => exam.subject)
    exams: Exams[];

    @ManyToMany(() => Professors)
    @JoinTable()
    professors: Professors[];
}
