import { GET_PAGES_ENDPOINT } from "../EndPoints";

export const isCustomPageUri = ( uri ) => {
	const pagesToExclude = [
		'/',
		'/shop/',
		'/checkout/',
	    '/auth/',
        '/cart/',
        '/blog/',
        '/thank-you/',
        '/shop-2/'
	];
	
	return pagesToExclude.includes( uri );
};

//_embed To insure we get feature Image
/*
* @param {String} url URL.
*
* @return {String} URL pathname.
*/


export const getPathNameFromUrl = ( url = '' ) => {
   if ( ! url ) {
       return '';
   }
   const theURL = new URL( url );
   return theURL.pathname;
}

export const getPages = async () => {
	return await axios.get( `${ GET_PAGES_ENDPOINT }?_embed` )
		.then( res => {
			if ( 200 === res.status ) {
				return res.data;
			} else {
				return [];
			}
		} )
		.catch( err => {
			console.log( err.response.data.message )
			return [];
		} );
};


