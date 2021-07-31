import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Subjects from "./Subjects";

@Entity("semesters")
export default class Semesters {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Subjects, (subject) => subject.semester)
    subjects: Subjects[];
}
