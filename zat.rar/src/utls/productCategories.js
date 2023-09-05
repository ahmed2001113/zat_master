// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
/**
 * Get Products.
 *
 * @return {Promise<void>}
 */

import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";


export const api = new WooCommerceRestApi( {
	url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
	consumerSecret: process.env.WC_CONSUMER_SECRET,
	consumerKey: process.env.WC_CONSUMER_KEY,
	version: 'wc/v3',
} );

export const getProductsData = async ( perPage = 50 ) => {
	return await api.get(
		'products',
		{
			per_page: perPage || 50,
		},
	);
};
export const getProductBySlug = async ( productSlug = '' ) => {
	return await api.get(
		'products',
		{
			slug: productSlug,
		},
	);
};
 
// export const getCategorieBySlug = async ( categorySlug = '' ) => {
// 	return await api.get(
// 		'products/categories',
// 		{
// 			slug: categorySlug.trim(),
// 		},
// 	);
// };
// export const getCategoryById = async(id='')=>{
//     api.get(`products/categories/${id}`)
//     .then((response) => {
//         ;
//       })
//       .catch((error) => {
//         ;
//       });
// }
 


