import { Request, Response } from "express";
import { RemoveCategoryService } from "../../services/category/RemoveCategoryService"; 

class RemoveCategoryController {
    async handle(request: Request, response: Response) {
        try {
            const category_id = request.query.category_id as string
            if(!category_id || category_id === undefined){
                throw new Error("Erro no parametro category_id")
            }
            const removeCategoryController = new RemoveCategoryService()
            const category = removeCategoryController.execute({category_id})
            return response.json({message: "Categoria removida"})
        } catch (error: any) {
            return response.json({ error: error.message });
        }

    }
}

export { RemoveCategoryController }