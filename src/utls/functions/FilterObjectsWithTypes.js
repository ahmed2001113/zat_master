// Define a function that takes an object as a parameter
export default function filterObjectValues(obj,callback) {
    const keys = Object.keys(obj);
    // Filter out the keys that have values that are empty array, empty string, or zero
    const filteredKeys = keys.filter(
      (key) =>
        !(
          (Array.isArray(obj[key]) && obj[key].length === 0) ||
          obj[key] === "" ||
          obj[key] === 0
        )
    );
    // Reduce the filtered keys to a new object with the same values
    const filteredObject = filteredKeys.reduce((acc, key) => {
      // Check if the value is an object
      if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
        // Destructure the nested property and assign it to a new variable with the same name as the outer property

        const { [key]: { [key]: value } } = obj;
        
        // Assign the value to the accumulator with the same key
        acc[key] = value;
      } else {
        // Otherwise, assign the value as it is
        acc[key] = obj[key];
      }
      return acc;
    }, {});
    // Return the filtered object
     return callback(filteredObject);
  }
  
  // Test the function with an example object
//   const myObject = { arr: [], str: "", number: 42, bool: true };
//   ); // {number: 42, bool: true}
  