import joi from "joi";

const uploadSchema = joi.object({
    name: joi.string().required(),
    categoryId: joi.number().required(),
    courseId: joi.number().required(),
    subjectId: joi.number().required(),
    professorId: joi.number().required(),
    link: joi.string().required(),
});

export { uploadSchema };
