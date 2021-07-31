import {MigrationInterface, QueryRunner} from "typeorm";

export class migrations1627768853274 implements MigrationInterface {
    name = 'migrations1627768853274'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "semesters" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_25c393e2e76b3e32e87a79b1dc2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "professors" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "courseId" integer, CONSTRAINT "PK_6b249c6363a154820c909c45e27" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "courses" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_3f70a487cc718ad8eda4e6d58c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "subjects" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "semesterId" integer, "courseId" integer, CONSTRAINT "PK_1a023685ac2b051b4e557b0b280" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "exams" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "file" character varying NOT NULL, "categoryId" integer, "subjectId" integer, "courseId" integer, "professorId" integer, CONSTRAINT "PK_b43159ee3efa440952794b4f53e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cateogries" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_8cd73f25b0e103d129ba630d7ac" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "subjects_professors_professors" ("subjectsId" integer NOT NULL, "professorsId" integer NOT NULL, CONSTRAINT "PK_f1e47bc92aa2417b9cb92deba7a" PRIMARY KEY ("subjectsId", "professorsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e34e39105e2fb3d152831bd174" ON "subjects_professors_professors" ("subjectsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a951cc9c4c6c77d1c7de8ae883" ON "subjects_professors_professors" ("professorsId") `);
        await queryRunner.query(`ALTER TABLE "professors" ADD CONSTRAINT "FK_4568e698ea775682308733a847b" FOREIGN KEY ("courseId") REFERENCES "courses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "subjects" ADD CONSTRAINT "FK_b40f2ecc6d3f61e93a945091931" FOREIGN KEY ("semesterId") REFERENCES "semesters"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "subjects" ADD CONSTRAINT "FK_be7152766987a7bcdcac0401510" FOREIGN KEY ("courseId") REFERENCES "courses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "FK_a4b572eed2e7293985b93a55eb3" FOREIGN KEY ("categoryId") REFERENCES "cateogries"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "FK_1dc4dcc3e975e1378e9d235cd1c" FOREIGN KEY ("subjectId") REFERENCES "subjects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "FK_3dcd9199b8cd801383e623c3d11" FOREIGN KEY ("courseId") REFERENCES "courses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "FK_bcfdfcbfb5fe82b98eb79ac5818" FOREIGN KEY ("professorId") REFERENCES "professors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "subjects_professors_professors" ADD CONSTRAINT "FK_e34e39105e2fb3d152831bd1742" FOREIGN KEY ("subjectsId") REFERENCES "subjects"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "subjects_professors_professors" ADD CONSTRAINT "FK_a951cc9c4c6c77d1c7de8ae8836" FOREIGN KEY ("professorsId") REFERENCES "professors"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subjects_professors_professors" DROP CONSTRAINT "FK_a951cc9c4c6c77d1c7de8ae8836"`);
        await queryRunner.query(`ALTER TABLE "subjects_professors_professors" DROP CONSTRAINT "FK_e34e39105e2fb3d152831bd1742"`);
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "FK_bcfdfcbfb5fe82b98eb79ac5818"`);
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "FK_3dcd9199b8cd801383e623c3d11"`);
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "FK_1dc4dcc3e975e1378e9d235cd1c"`);
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "FK_a4b572eed2e7293985b93a55eb3"`);
        await queryRunner.query(`ALTER TABLE "subjects" DROP CONSTRAINT "FK_be7152766987a7bcdcac0401510"`);
        await queryRunner.query(`ALTER TABLE "subjects" DROP CONSTRAINT "FK_b40f2ecc6d3f61e93a945091931"`);
        await queryRunner.query(`ALTER TABLE "professors" DROP CONSTRAINT "FK_4568e698ea775682308733a847b"`);
        await queryRunner.query(`DROP INDEX "IDX_a951cc9c4c6c77d1c7de8ae883"`);
        await queryRunner.query(`DROP INDEX "IDX_e34e39105e2fb3d152831bd174"`);
        await queryRunner.query(`DROP TABLE "subjects_professors_professors"`);
        await queryRunner.query(`DROP TABLE "cateogries"`);
        await queryRunner.query(`DROP TABLE "exams"`);
        await queryRunner.query(`DROP TABLE "subjects"`);
        await queryRunner.query(`DROP TABLE "courses"`);
        await queryRunner.query(`DROP TABLE "professors"`);
        await queryRunner.query(`DROP TABLE "semesters"`);
    }

}
