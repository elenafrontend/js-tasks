
// Create an instance of a db object for us to store the open database in
let db;

window.onload = () => {
  // Open our database; it is created if it doesn't already exist
  // (see the upgradeneeded handler below)
  const request = window.indexedDB.open("notes", 1);

  // error handler signifies that the database didn't open successfully
  request.onerror = function () {
    console.log("Database failed to open");
  };

  // success handler signifies that the database open successfully
  request.onsuccess = function () {
    console.log("Database opened successfully");

    // Store the opened database object in the db variable
    db = request.result;
  };

  // Set up the database tables if this has not already been done
  request.onupgradeneeded = function (e) {
    // Grab a reference to the opened database
    db = e.target.result;

    // Create an objectStore in our database to store notes and an auto-incrementing key
    // An objectStore is similar to a 'table' in a relational database
    const objectStore = db.createObjectStore("notes", {
      keyPath: "id",
      autoIncrement: true,
    });

    // Define what data items the objectStore will contain
    objectStore.createIndex("title", "title", { unique: false });
    objectStore.createIndex("body", "body", { unique: false });

    console.log("Database setup complete");
  };
}
