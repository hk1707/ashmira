import Layout from "../../src/components/Layout";
import client from "../../src/components/ApolloClient";
import Product from "../../src/components/Product";
import {PRODUCT_BY_CATEGORY_SLUG, PRODUCT_CATEGORIES_SLUGS} from "../../src/queries/product-by-multiplecat";
import {isEmpty} from "lodash";
import {useRouter} from "next/router";

export default function CategorySingle( props ) {

    const router = useRouter()

    // If the page is not yet generated, this will be displayed
    // initially until getStaticProps() finishes running
    if (router.isFallback) {
        return <div>Loading...</div>
    }

    const { categoryName, products ,productsnew } = props;

    console.log(productsnew)

    return (
        <Layout>
            <div className="product-categories-container container mx-auto my-32 px-4 xl:px-0">
                { categoryName ? <h3 className="text-2xl mb-5 uppercase">{ categoryName }</h3> : '' }
                <div className="product-categories grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                    { undefined !== products && products?.length ? (
                        products.map( product => <Product key={ product?.id } product={ product } /> )
                    ) : ''}
                </div>
            </div>
        </Layout>
    )
};

export async function getStaticProps(context) {

    const { params:{ child } } = context

    const {data} = await client.query(({
        query: PRODUCT_BY_CATEGORY_SLUG,
        variables: { "slug":child }
    }));


    const products =  data?.productCategories?.nodes &&  data?.productCategories?.nodes.map((product) => product.products.nodes   )

    console.log(products);

  
    return {
        props: {
            categoryName: data?.productCategories?.nodes?.name ?? '',
            products: data?.productCategories?.nodes ?? '',
            productsnew: products ?? []
        },
        revalidate: 1
    }

}

export async function getStaticPaths () {
    const { data } = await client.query({
        query: PRODUCT_CATEGORIES_SLUGS
    })

    
    const paths = [];

    data?.productCategories?.nodes && data?.productCategories?.nodes.map((productCategory) => {
        if (!isEmpty(productCategory?.slug)) {
            if(productCategory?.children?.nodes?.length > 0){  
                 const paths = productCategory?.children?.nodes && productCategory?.children?.nodes.map(CatChild => ({
                    params: {slug: CatChild?.slug }
                  }))
            }
        }
    })   

    return {
        paths: paths ,
        fallback: true
    }
}
