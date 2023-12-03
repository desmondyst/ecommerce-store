import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import { revalidatePath } from "next/cache";

const HomePage = async () => {
    // to not cache
    revalidatePath("/");

    // NOTE: getProducts takes in a query
    const products = await getProducts({
        isFeatured: true,
    });

    // #NOTE: HARDCODED BILBOARD FOR HOME PAGE --> BUG POINT
    const billboard = await getBillboard(
        "268e7765-d9db-46f6-9a8e-4443c4ea300d"
    );

    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} />

                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Featured Products" items={products} />
                </div>
            </div>
        </Container>
    );
};

export default HomePage;
