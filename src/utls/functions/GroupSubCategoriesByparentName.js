import { isEmpty } from "lodash";

export default function groupObjects(data) {
  const groups = [];
  console.log(data)
  for (const obj of data) {
    const parent = obj.parent.node.name;
    const groupIndex = groups.findIndex((group) => group.id === parent); 
     if (groupIndex === -1) {
      // creating  parent links 

      groups.push({ id: parent,name:parent, subcategories: [{ name: obj.name, 
        featureProducts: obj.products.edges }] });
     } else {

      //non parent links
      groups[groupIndex].subcategories.push({ name: obj.name, 
        featureProducts: obj.products.edges });
 
    }
  }
  return groups;
}

 export const FormattingProductsArray = (products)=>{
if(isEmpty(products)){
  return null
}
 return products.map(product=>{
  const {averageRating,
    description,
    galleryImages,
    image,
    manageStock,
    name,
    onSale,price,
    regularPrice,
    slug,
    status,
    stockQuantity,
    stockStatus,
    title,id
  }=product.node;
  return{
    description,
    images:galleryImages?.nodes.concat(image),
    manageStock,
    name,
    onSale,
    price,
    regularPrice,
    slug,
    status,
    stockQuantity,
    stockStatus,
    title,
    rating:averageRating,
    id
  }


 })

}


 