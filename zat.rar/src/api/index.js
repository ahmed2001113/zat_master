import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export const api = new WooCommerceRestApi( {
	url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
	consumerSecret: process.env.WC_CONSUMER_SECRET,
	consumerKey: process.env.WC_CONSUMER_KEY,
    query_string_auth: true,
 	version: 'wc/v3',
} );
