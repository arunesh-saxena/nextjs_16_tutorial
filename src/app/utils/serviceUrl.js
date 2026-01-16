export const useServiceUrl = () => {
    const baseUrl = 'http://localhost:3000/api';

    const getProducts = () => `${baseUrl}/product`;
    const getProductById = (id) => `${baseUrl}/product/${id}`;
    const createProduct = () => `${baseUrl}/product`;
    const updateProduct = (id) => `${baseUrl}/product/${id}`;
    const deleteProduct = (id) => `${baseUrl}/product/${id}`;

    return {
        getProducts,
        getProductById,
        createProduct,
        updateProduct,
        deleteProduct,
    };
};
