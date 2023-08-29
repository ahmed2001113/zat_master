const WooCommerceRestApi = require( '@woocommerce/woocommerce-rest-api' ).default;
 
const api = new WooCommerceRestApi( {
	url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
	consumerKey: process.env.WC_CONSUMER_KEY,
	consumerSecret: process.env.WC_CONSUMER_SECRET,
	version: "wc/v3"
} );


export default async function handler( req, res ) {
	const responseData = {
 		orderId: '',
		total: '',
  		status:''
	};
	const {id} = req.query;
	 
	try {
		const { data } = await api.get(`orders/${id}`);
		
 		responseData.orderId = data.id;
		responseData.total = data.total;
		responseData.status = data.status;

 		res.json( responseData );
		
	} catch ( error ) {
		 ;
		/**
		 * Request usually fails if the data in req.body is not sent in the format required.
		 *
		 * @see Data shape expected: https://stackoverflow.com/questions/49349396/create-an-order-with-coupon-lines-in-woocomerce-rest-api
		 */
		responseData.error = error.message;
		res.status( 500 ).json( responseData );
	}

}