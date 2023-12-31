import fetch from 'node-fetch';
const https = require('https');

import { ApolloClient, ApolloLink, InMemoryCache, createHttpLink,ApolloProvider } from "@apollo/client";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; 


/**
 * Middleware operation
 * If we have a session token in localStorage, add it to the GraphQL request as a Session header.
 */
 export const middleware = new ApolloLink( ( operation, forward ) => {
	/**
	 * If session data exist in local storage, set value as session header.
	 */
	const session = ( process.browser ) ?  localStorage.getItem( "woo-session" ) : null;

	if ( session ) {
		operation.setContext( ( { headers = {} } ) => ( {
			headers: {
				"woocommerce-session": `Session ${ session }`
			}
		} ) );
	}

	return forward( operation );

} );

/**
 * Afterware operation.
 *
 * This catches the incoming session token and stores it in localStorage, for future GraphQL requests.
 */
export const afterware = new ApolloLink( ( operation, forward ) => {

	return forward( operation ).map( response => {

		if ( !process.browser ) {
			return response;
		}

		/**
		 * Check for session header and update session in local storage accordingly.
		 */
		const context = operation.getContext();
		const { response: { headers } }  = context;
		const session = headers.get( "woocommerce-session" );

		if ( session ) {

			// Remove session data if session destroyed.
			if ( "false" === session ) {

				localStorage.removeItem( "woo-session" );

				// Update session new data if changed.
			} else if ( localStorage.getItem( "woo-session" ) !== session ) {

				localStorage.setItem( "woo-session", headers.get( "woocommerce-session" ) );

			}
		}

		return response;

	} );
} );
// const agent = new https.Agent({
// 	rejectUnauthorized: false // This will disable certificate validation
	 
//   });

const defaultOptions = {
	watchQuery: {
		fetchPolicy: "no-cache",
		errorPolicy: "ignore",
	},
	query: {
		fetchPolicy: "no-cache",
		errorPolicy: "all",
	},
};

 
// Apollo GraphQL client.
const client = new ApolloClient({
	 uri:'http://zat98.com/graphql',
	  fetch,
	 credentials:'same-origin',
	  
	 defaultOptions,
	 connectToDevTools:true,
	 cache:new InMemoryCache()
	 
})
// const client = new ApolloClient({
// 	link: middleware.concat( afterware.concat(createHttpLink({
// 		uri: `https://zat98.com/graphql`,
// 		fetch: fetch,
// 		credentials:'same-origin',
// 		headers:{
// 			"Content-Type": "application/json"

// 		},
//  	}),
// 	 ) ),
// 	defaultOptions,
// 	connectToDevTools:true,
// 	cache: new InMemoryCache(),
	
// });

export default client;
