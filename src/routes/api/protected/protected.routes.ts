import { Router } from 'express';
import { addEducationToUser, updateEducation } from '../../../controllers/education.controller';
import { addWorkToUser, updateWorkToUser } from '../../../controllers/work.controller';
import { verifyAddEducation, verifyUpdateEducation } from './../../../middlewares/education/addEducation.middleware';
import { verifyAddWork, verifyUpdateWork } from './../../../middlewares/work/addWork.middleware';

const router = Router();

router.post("/education", verifyAddEducation, addEducationToUser)
router.patch("/education", verifyUpdateEducation, updateEducation)
router.post("/work", verifyAddWork, addWorkToUser)
router.patch("/work", verifyUpdateWork, updateWorkToUser)

export default router