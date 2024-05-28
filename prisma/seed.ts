import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';
import * as bcrypt from 'bcrypt';

dotenv.config();

const prisma = new PrismaClient({ errorFormat: 'pretty' });

const seedUsers = async () => {
    const defaultUser = await prisma.user.create({
        data: {
            firstName: process.env.DEFAULT_USER_FIRSTNAME as string,
            lastName: process.env.DEFAULT_USER_LASTNAME as string,
            email: process.env.DEFAULT_USER_EMAIL as string,
            phone: process.env.DEFAULT_USER_PHONE as unknown as bigint,
            password: await bcrypt.hash(process.env.DEFAULT_USER_PASSWORD as string, 15),
        },
    });
};

const seedRoles = async () => {
    const adminRole = await prisma.role.create({
        data: {
            name: "admin"
        },
    });
};

const main = async () => {
    await seedUsers();

    await seedRoles();
};

main()
    .then(() => {
        console.log("Data seeded successfully.")
    })
    .catch((reason) => {
        console.log(`Error while seeding data: ${reason}`);
        process.exit(1);
    });