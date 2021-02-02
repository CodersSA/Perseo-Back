import { Router } from 'express';
import { verifySignUpRequest } from '../../../middlewares/auth/signUp.middleware';
import { signUp, signIn } from '../../../controllers/auth.controller';
import { verifySignInRequest } from '../../../middlewares/auth/signIn.middleware';

const router = Router();

router.post("/signup", verifySignUpRequest, signUp)
router.post("/signin", verifySignInRequest, signIn)

export default router