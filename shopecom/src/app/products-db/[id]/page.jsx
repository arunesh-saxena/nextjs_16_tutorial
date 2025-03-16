import { getProduct } from "@/prisma-db";
import ProductEditForm from "./product-edit-form";

import { notFound } from "next/navigation";

export default async function EditProductPage({
  params,
}) {
  const { id } = await params;
  const product = await getProduct(parseInt(id));

  if (!product) {
    notFound();
  }

  return <ProductEditForm product={product} />;
}