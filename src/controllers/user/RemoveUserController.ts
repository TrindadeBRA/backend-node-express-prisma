import { Request, Response } from "express";
import { RemoveUserService } from "../../services/user/RemoveUserService";

class RemoveUserController {
    async handle(request: Request, response: Response) {
        try {
            const user_id = request?.query.user_id as string; //nome do pair query user_id
            const removeUserService = new RemoveUserService()
            const removeUser = removeUserService.execute({ user_id })
    
            return response.json(removeUser)
        } catch (error: any) {
            return response.json({ error: error.message });
        }
    }
}

export { RemoveUserController }