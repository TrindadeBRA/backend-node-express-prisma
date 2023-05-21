import prismaClient from "../../prisma"
import { EditCategoryRequest } from "../../models/interfaces/category/EditCategoryRequest"


class EditCategoryService {
    async execute({name, category_id}: EditCategoryRequest) {
        
        if(!name || !category_id || category_id == undefined || name == undefined){
            throw new Error("Invalid args to edit category!")
        }

        const productEdited = await prismaClient.category.update({
            where: {
                id: category_id
            },
            data: {
                name: name
            }
        })

        return productEdited
    }
}

export { EditCategoryService }