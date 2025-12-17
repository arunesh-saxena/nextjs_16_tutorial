"use server";

import { addProduct, updateProduct, deleteProduct } from "@/prisma-db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";


export async function createProduct(prevState, formData) {
    const title = formData.get("title") ;
    const price = formData.get("price") ;
    const description = formData.get("description") ;

    const errors = {};

    if (!title) {
        errors.title = "Title is required";
    }

    if (!price) {
        errors.price = "Price is required";
    }

    if (!description) {
        errors.description = "Description is required";
    }

    if (Object.keys(errors).length > 0) {
        return { errors };
    }

    await addProduct(title, parseInt(price), description);
    redirect("/products-db");
}

export async function editProduct(
    id,
    prevState,
    formData
) {
    const title = formData.get("title");
    const price = formData.get("price");
    const description = formData.get("description");

    const errors = {};

    if (!title) {
        errors.title = "Title is required";
    }

    if (!price) {
        errors.price = "Price is required";
    }

    if (!description) {
        errors.description = "Description is required";
    }

    if (Object.keys(errors).length > 0) {
        return { errors };
    }

    await updateProduct(id, title, parseInt(price), description);
    redirect("/products-db");
}

export async function removeProduct(id) {
    await deleteProduct(id);
    revalidatePath("/products-db");
}