import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/product/:id
export async function GET(_, context) {
    const { id } = await context.params;
    const productId = Number(id);

    try {
        const product = await prisma.product.findUnique({
            where: { id: productId },
        });

        if (!product) {
            return NextResponse.json(
                { message: "Product not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(product);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: `Failed to fetch product dddd ${id}` },
            { status: 500 }
        );
    }
}

// PUT /api/product/:id
export async function PUT(req, context) {
    const { id } = await context.params;
    const productId = Number(id);

    try {
        const body = await req.json();
        const { title, price, description } = body;

        const product = await prisma.product.update({
            where: { id: productId },
            data: { title, price, description },
        });

        return NextResponse.json(product);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Failed to update product" },
            { status: 500 }
        );
    }
}

// DELETE /api/product/:id
export async function DELETE(_, context) {
    const { id } = await context.params;
    const productId = Number(id);

    try {
        await prisma.product.delete({
            where: { id: productId },
        });

        return NextResponse.json({ message: "Product deleted" });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Failed to delete product" },
            { status: 500 }
        );
    }
}
