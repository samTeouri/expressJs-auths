import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';

const prisma = new PrismaClient({ errorFormat: 'pretty' });

dotenv.config();

const main = async () => {
    const defaultUser = await prisma.user.findUniqueOrThrow({
        where: {
          email: process.env.DEFAULT_USER_EMAIL,
        },
    });

    const adminRole = await prisma.role.findUniqueOrThrow({
        where: {
            name: "admin"
        }
    });

    await prisma.userRole.create({
        data: {
            roleId: adminRole.id,
            userId: defaultUser.id,
        }
    });
}

main()
    .then(() => {
        console.log("Data inserted successfully.")
    })
    .catch((reason) => {
        console.log(`Error while inserting data: ${reason}`);
        process.exit(1);
    });