import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserService";

class DetailuserController {
    async handle(request: Request, response: Response){
        try {
            const user_id = request?.user_id
            const detailUserService = new DetailUserService()
            const user = await detailUserService.execute(user_id)
    
            return response.json(user)
        } catch (error: any) {
            return response.json({ error: error.message });
        }
    }
}

export { DetailuserController }