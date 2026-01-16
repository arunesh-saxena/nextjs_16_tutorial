// export const dynamic = 'force-dynamic'; // Ensure the page is always rendered dynamically
import { useServiceUrl } from '../utils/serviceUrl';
import ProductDetail from './product-details';

const ProductsDBPage = async () => {
    // const products = await getProducts();
    const res = await fetch(useServiceUrl().getProducts(),{
        cache: 'no-store',  // Disable caching for this request
    });
    const products = await res.json();
    console.log('ProductsDBPage', 'products');
    return (
        <div>
            <h1>Product Detail Page</h1>
            <ProductDetail products={products} />
        </div>
    );
};

export default ProductsDBPage;