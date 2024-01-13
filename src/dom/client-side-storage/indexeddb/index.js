
const titleInput = document.querySelector('#title');
const bodyInput = document.querySelector('#body');
const form = document.querySelector('form');

// Create an instance of a db object for us to store the open database in
let db;

const requestDB = () => {
  const request = window.indexedDB.open("notes", 1);

  // error handler signifies that the database didn't open successfully
  request.addEventListener('error', () => {
    console.log("Database failed to open");
  });

  // success handler signifies that the database open successfully
  request.addEventListener('success', () => {
    console.log("Database opened successfully");

    // Store the opened database object in the db variable
    db = request.result;
  });

  // Set up the database tables if this has not already been done
  request.addEventListener('upgradeneeded', (e) => {
    // Grab a reference to the opened database
    db = e.target.result;

    // Create an objectStore in our database to store notes and an auto-incrementing key
    // An objectStore is similar to a 'table' in a relational database
    const objectStore = db.createObjectStore("notes", {
      keyPath: "id",
      autoIncrement: true,
    });

    // Define what data items the objectStore will contain
    objectStore.createIndex("title", "title", {unique: false});
    objectStore.createIndex("body", "body", {unique: false});

    console.log("Database setup complete");
  })
}

const addData = (e) => {
  e.preventDefault();

  const newItem = { title: titleInput.value, body: bodyInput.value };

  // open a read/write db transaction, ready for adding the data
  const transaction = db.transaction(['notes'], 'readwrite');

  // call an object store that's already been added to the database
  const objectStore = transaction.objectStore('notes');

  // Make a request to add our newItem object to the object store
  const addRequest = objectStore.add(newItem);

  addRequest.addEventListener('success', () => {
    // Clear the form, ready for adding the next entry
    titleInput.value = '';
    bodyInput.value = '';
  });

  // Report on the success of the transaction completing, when everything is done
  transaction.addEventListener('complete', () => {
    console.log('Transaction completed: database modification finished.');

  });

  transaction.addEventListener('error', () => console.log('Transaction not opened due to error'));
}

window.addEventListener('load', () => {
  // Open our database; it is created if it doesn't already exist
  requestDB();
  form.addEventListener("submit", addData);
})

