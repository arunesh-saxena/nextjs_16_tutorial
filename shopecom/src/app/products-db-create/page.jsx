"use client";

import { useActionState } from "react";
import { createProduct } from "@/app/actions/products";
import { Submit } from "@/app/_components/submit";

export default function AddProductPage() {
    const initialState = {
        errors: {},
    };

    const [state, formAction] = useActionState(createProduct, initialState);

    return (
        <form action={formAction} className="p-4 space-y-4 max-w-96">
            <div>
                <label className="">
                    Title
                    <input
                        type="text"
                        className="block w-full p-2 text-black border rounded"
                        name="title"
                    />
                </label>
                {state.errors.title && (
                    <p className="text-red-500">{state.errors.title}</p>
                )}
            </div>
            <div>
                <label className="">
                    Price
                    <input
                        type="number"
                        className="block w-full p-2 text-black border rounded"
                        name="price"
                    />
                </label>
                {state.errors.price && (
                    <p className="text-red-500">{state.errors.price}</p>
                )}
            </div>
            <div>
                <label className="">
                    Description
                    <textarea
                        className="block w-full p-2 text-black border rounded"
                        name="description"
                    />
                </label>
                {state.errors.description && (
                    <p className="text-red-500">{state.errors.description}</p>
                )}
            </div>
            {/* <button
        type="submit"
        className="block w-full p-2  bg-blue-500 rounded disabled:bg-gray-500"
        disabled={isPending}
      >
        Submit
      </button> */}
            <Submit />
        </form>
    );
}