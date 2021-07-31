import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Exams from "./Exams";

@Entity("cateogries")
export default class Categories {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Exams, (exam) => exam.category)
    exams: Exams[];
}
