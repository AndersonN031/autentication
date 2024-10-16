import { Request, Response } from "express";
import { prismaClient } from "..";


export const findAllUsers = async (req: Request, res: Response) => {
    const { name, email } = req.params;
    let user = await prismaClient.user.findMany({
        where: { email },
        select: {
            name: true,
            email: true
        }
    })
    res.json(user)
}
