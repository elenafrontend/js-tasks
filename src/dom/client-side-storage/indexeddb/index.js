
const titleInput = document.querySelector('#title');
const bodyInput = document.querySelector('#body');
const form = document.querySelector('form');

class IndexedDB {

  constructor(name) {
    this.name = name
    // Create an instance of a db object for us to store the open database in
    this.db = null
  }

  openDB() {
    const request = window.indexedDB.open(this.name, 1);

    // error handler signifies that the database didn't open successfully
    request.addEventListener('error', () => {
      console.log("Database failed to open");
    });

    // success handler signifies that the database open successfully
    request.addEventListener('success', () => {
      console.log("Database opened successfully");

      // Store the opened database object in the db variable
      this.db = request.result;
    });

    // Set up the database tables if this has not already been done
    request.addEventListener('upgradeneeded', (e) => {
      // Grab a reference to the opened database
      this.db = e.target.result;

      // Create an objectStore in our database to store notes and an auto-incrementing key
      // An objectStore is similar to a 'table' in a relational database
      const objectStore = this.db.createObjectStore("notes_store", {
        keyPath: "id",
        autoIncrement: true,
      });

      // Define what data items the objectStore will contain
      objectStore.createIndex("title", "title", {unique: false});
      objectStore.createIndex("body", "body", {unique: false});

      console.log("Database setup complete");
    })
  }

  deleteDB () {
    const deleteRequest = window.indexedDB.deleteDatabase(this.name);

    deleteRequest.addEventListener('error', () => {
      console.error("Error deleting database.");
    })

    deleteRequest.addEventListener('success', (e) => {
      console.log("Database deleted successfully");
      console.log(e.result); // should be undefined
    })
  }

  addData (e) {
    e.preventDefault();

    const newItem = { title: titleInput.value, body: bodyInput.value };

    // open a read/write db transaction, ready for adding the data
    const transaction = this.db.transaction(['notes_store'], 'readwrite');

    // call an object store that's already been added to the database
    const objectStore = transaction.objectStore('notes_store');

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
}

window.addEventListener('load', () => {

  const notesDb = new IndexedDB('notes_db');
  notesDb.openDB()
  form.addEventListener("submit", (e) => notesDb.addData(e));
})

