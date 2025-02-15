import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import { revalidatePath } from "next/cache";
import toast from "react-hot-toast";
import Loading from "./loading";

interface ProductPageProps {
    params: {
        productId: string;
    };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
    // to not cache
    revalidatePath("/product");

    const product = await getProduct(params.productId);

    const suggestedProducts = await getProducts({
        categoryId: product?.category?.id,
    });

    // filter away the current product
    const filteredSuggestedProducts = suggestedProducts.filter(
        (p) => p.id !== product.id
    );

    return (
        // <Loading />
        <div className="bg-white">
            <Container>
                <div className="px-4 py-10 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        {/* Gallery */}
                        <Gallery images={product.images} />
                        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                            <Info data={product} />
                        </div>
                    </div>
                    <hr className="my-10" />
                    <ProductList
                        title="Related Items"
                        items={filteredSuggestedProducts}
                    />
                </div>
            </Container>
        </div>
    );
};

export default ProductPage;
