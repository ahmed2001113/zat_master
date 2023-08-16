import { api } from ".";

export const getProductsData = async ( perPage = 50 ) => {
	return await api.get(
		'products',
		{
			per_page: perPage || 50,
		},
	);
};