// Define a HashMap class
class HashMap {
    // Constructor method to initialize the map object
    constructor() {
      this.map = {}; // Initialize an empty object to store key-value pairs
    }
  
    // Method to add a key-value pair to the map
    put(key, value) {
      this.map[key] = value; // Assign the value to the key in the map object
    }
  
    // Method to retrieve the value associated with a key
    get(key) {
      return this.map[key]; // Return the value associated with the key in the map object
    }
  
    // Method to remove a key-value pair from the map
    remove(key) {
      delete this.map[key]; // Delete the key-value pair from the map object
    }
  }
  
  // Create an instance of the HashMap class
  const map = new HashMap();
  
  // Add a key-value pair to the map
  map.put('name', 'John');
  
  // Retrieve and log the value associated with the key 'name'
  console.log(map.get('name')); 
  
  // Remove the key-value pair with the key 'name' from the map
  map.remove('name');
  
  // Attempt to retrieve and log the value associated with the key 'name' after removal
  console.log(map.get('name')); 
  