import {Router, Request, Response} from "express";
import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from "./controllers/user/AuthUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { DetailuserController } from "./controllers/user/DetailUserController";
import { RemoveUserController } from "./controllers/user/RemoveUserController";

const router = Router();

router.get("/test", (request: Request, response: Response) => {
    return response.json({ok: true})
})

// User routes
router.post('/user', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me', isAuthenticated, new DetailuserController().handle) //middleware add

router.delete('/user/remove', new RemoveUserController().handle)

export {router}