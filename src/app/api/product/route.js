import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/product?query=abc
export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const query = searchParams.get("query");

        const products = await prisma.product.findMany({
            where: query
                ? {
                      OR: [
                          { title: { contains: query, mode: "insensitive" } },
                          { description: { contains: query, mode: "insensitive" } },
                      ],
                  }
                : undefined,
        });

        return NextResponse.json(products);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Failed to fetch products" },
            { status: 500 }
        );
    }
}

// POST /api/product
export async function POST(req) {
    try {
        const body = await req.json();
        const { title, price, description } = body;

        const product = await prisma.product.create({
            data: { title, price, description },
        });

        return NextResponse.json(product, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Failed to create product" },
            { status: 500 }
        );
    }
}
