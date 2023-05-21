import prismaClient from "../../prisma"

class ListCategoryService {
    async execute() {
        //buscar todas categorias

        const allCategories = await prismaClient.category.findMany({ //todos os dados
            select: {
                id: true,
                name: true
            },
        })

        return allCategories

    }
}

export { ListCategoryService }