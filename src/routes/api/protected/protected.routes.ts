import { Router } from 'express';
import { addEducationToUser, updateEducation } from '../../../controllers/education.controller';
import { addWorkToUser, updateWorkToUser } from '../../../controllers/work.controller';
import { verifyAddEducation, verifyUpdateEducation } from './../../../middlewares/education/addEducation.middleware';
import { verifyAddWork, verifyUpdateWork } from './../../../middlewares/work/addWork.middleware';
import { getProfile } from './../../../controllers/user.controller';
import passport from 'passport';

const router = Router();

router.post("/education", verifyAddEducation, addEducationToUser)
router.patch("/education", verifyUpdateEducation, updateEducation)
router.post("/work", verifyAddWork, addWorkToUser)
router.patch("/work", verifyUpdateWork, updateWorkToUser)
router.get("/profile", passport.authenticate('jwt', { session: false }), getProfile)

export default router