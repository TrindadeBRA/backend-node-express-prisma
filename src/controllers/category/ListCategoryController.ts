import { Request, Response } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService";

class ListCategoryController {
    async handle(request: Request, response: Response) {

        try {
            const listCategoryService = new ListCategoryService()
            const categories = await listCategoryService.execute()
            return response.json(categories)

        } catch (error: any) {
            return response.json({ error: error.message });
        }

    }
}

export { ListCategoryController }