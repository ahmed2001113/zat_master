import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
	url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
	consumerKey: process.env.WC_CONSUMER_KEY,
	consumerSecret: process.env.WC_CONSUMER_SECRET,
	version: "wc/v3"
});
export default async function handler(req, res) {

    const { product_id } = req.query;
        console.warn(id)
	const responseData = {
		success: false,
		products: {}
	}
try {
    const {data} = await api.get(`products/reviews/product_id?=${product_id}`)
	responseData.success = true;
		responseData.products = data;
	return	res.json( responseData );


} catch (error) {
    responseData.error = error.message;
	return	res.status( 500 ).json( responseData  );
}
}