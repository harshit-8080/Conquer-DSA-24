// Creating an empty Map
const myMap = new Map();

// Setting Key-Value Pairs:
// To add key-value pairs to a Map.
// We can use the set method:
myMap.set("name", "John");
myMap.set("age", 30);
myMap.set("city", "New York");

// Getting Values by Key:
// To retrieve the value associated with a specific key.
// you can use the get method:
const name = myMap.get("name"); // 'John'
const age = myMap.get("age"); // 30

// Checking if a Key Exists:
// You can check if a key exists in the Map.
// using the has method:
const hasCountry = myMap.has("country"); // false
const hasCity = myMap.has("city"); // true

// Deleting Key-Value Pairs:
// To remove a key-value pair from the Map.
// use the delete method:
myMap.delete("age"); // Removes the 'age' key and its associated value

// Getting the Number of Key-Value Pairs:
// You can find out how many key-value pairs are in the Map using the size property:
const mapSize = myMap.size; // 2 (after deleting 'age')

// Iterating Through Key-Value Pairs:
// You can iterate through all the key-value pairs in a Map using a for...of loop:
for (const [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}

console.log("-----");

for (const X of myMap) {
  console.log(myMap.get(X[0]));
}

// Clearing All Key-Value Pairs:
// To remove all key-value pairs from a Map, you can use the clear method:

myMap.clear(); // Removes all key-value pairs
