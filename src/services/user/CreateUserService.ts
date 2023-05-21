import { hash } from "bcryptjs"
import { UserRequest } from "../../models/interfaces/user/UserRequest";
import prismaClient from "../../prisma";

class CreateUserService {

    async execute({ name, email, password }: UserRequest) {

        
        //Caso nao venha email
        if (!email) {
            throw new Error("Email incorrect");
        }
        
        //Procurando primeiro registro com o email
        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })
        
        
        //Caso encontre algum email no db
        if (userAlreadyExists) {
            throw new Error("Email already exists");
        }

        // Encriptando a senha
        const passwordHash = await hash(password, 8)

        // Criando Usuario
        const user = prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash,
            },
            select: {
                id: true,
                name: true,
                email: true,
            }
        })

        return user;

    }

}

export { CreateUserService }