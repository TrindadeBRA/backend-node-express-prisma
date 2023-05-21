import { Request, Response } from "express";
import { EditCategoryService } from "../../services/category/EditCategoryService";

class EditCategoryController {
    async handle(request: Request, response: Response) {
        try {

            const {name} = request.body
            const category_id = request.query.category_id as string

            if(!category_id || category_id === undefined){
                throw new Error("Erro no parametro category_id")
            }

            const editCategoryService = new EditCategoryService
            const categoryEdited = editCategoryService.execute({name, category_id})
            return response.json(categoryEdited) 

        } catch (error: any) {
            return response.json({ error: error.message });
        }
    }
}

export { EditCategoryController }