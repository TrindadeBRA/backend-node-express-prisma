import prismaClient from "../../prisma";
import { CategoryRequest } from "../../models/interfaces/category/CategoryRequest";


class CreateCategoryService {

    async execute({ name }: CategoryRequest) {

        if(!name) {
            throw new Error("Invalid Name")
        }

        const alreadyExistsName = await [prismaClient.category.findFirst({
            where: {
                name: name
            }
        })]

        if(alreadyExistsName) {
            throw new Error("Esta categoria já existe")
        }

        const category = await prismaClient.category.create({
            data: {
                name: name
            },
            select: {
                id: true,
                name: true
            }
        })
        return category

    }

}

export { CreateCategoryService }