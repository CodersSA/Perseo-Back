import { Router } from 'express';
import { addEducationToUser } from '../../../controllers/education.controller';
import { verifyAddEducation } from './../../../middlewares/education/addEducation.middleware';

const router = Router();

router.get("/education", verifyAddEducation, addEducationToUser)

export default router