import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

const globalForPrisma = globalThis;

export const prisma =
    globalForPrisma.prisma ??
    new PrismaClient({
        log: ["error"],
    });

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}
