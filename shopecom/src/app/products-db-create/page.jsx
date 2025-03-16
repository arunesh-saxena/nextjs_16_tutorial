import { addProduct } from "@/prisma-db";
import { redirect } from "next/navigation";
import {Submit} from "@/app/_components/submit";


export default function AddProductPage() {

    async function createProduct(formData) {
        'use server';


        const title = formData.get('title');
        const price = formData.get('price');
        const description = formData.get('description');

        // console.log(title);
        await addProduct(title, parseInt(price), description);

        redirect('/products-db');
    }

    return (
        <form onSubmit={createProduct} className="p-4 space-y-4 max-w-96">
            <label className="">
                Title
                <input
                    type="text"
                    className="block w-full p-2 text-black border rounded"
                    name="title"
                />
            </label>
            <label className="">
                Price
                <input
                    type="number"
                    className="block w-full p-2 text-black border rounded"
                    name="price"
                />
            </label>
            <label className="">
                Description
                <textarea
                    className="block w-full p-2 text-black border rounded"
                    name="description"
                />
            </label>
            <Submit />
        </form>
    );
}

// export default AddProductPage;