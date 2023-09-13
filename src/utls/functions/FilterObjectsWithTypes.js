import { isArray, isObject } from "lodash";

// Define a function that takes an object as a parameter
export default function filterObjectValues(obj,callback) {
    const keys = Object.keys(obj);
    // Filter out the keys that have values that are empty array, empty string, or zero
    const filteredKeys = keys.filter(
      (key) =>
        !(
          (Array.isArray(obj[key]) && obj[key].length === 0) ||
          obj[key] === "" ||
          obj[key] === 0  ||key ==="orderby" 
        ) 
    ) 
    // Reduce the filtered keys to a new object with the same values
    const filteredObject = filteredKeys.reduce((acc, key) => {
      // Check if the value is an object
      
        // Otherwise, assign the value as it is

        if(isArray(obj[key])){
           acc[key]  = obj[key].filter(a=>!isObject(a))

        }
        acc[key] = obj[key];
    
      return acc;
    }, {});

     // Return the filtered object
     return callback(filteredObject);
  }
  
  // Test the function with an example object
//   const myObject = { arr: [], str: "", number: 42, bool: true };
//   ); // {number: 42, bool: true}
  