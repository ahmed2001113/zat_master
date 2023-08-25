import { GET_PAGES_ENDPOINT } from "@/src/EndPoints";
import axios from "axios";

export const getPage = async ( pageSlug = '' ) => {
	return await axios.get( `${ GET_PAGES_ENDPOINT }?slug=${ pageSlug }&_embed` )
		.then( res => {
			if ( 200 === res.status ) {
				return res.data;
			} else {
				return [];
			}
		} )
		.catch( err => {
			
			return [];
		} );
};