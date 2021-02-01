import { Router } from 'express';
import { verifySignUpRequest } from '../../../middlewares/auth/signUp.middleware';
import { signUp } from './../../../controllers/auth.controller';

const router = Router();

// router.get("/special", passport.authenticate('jwt', { session: false }), (req: Request, res: Response) => {
//     res.send("test")
// });
router.post("/signup", verifySignUpRequest, signUp)
// router.post("/signin", signIn)

export default router