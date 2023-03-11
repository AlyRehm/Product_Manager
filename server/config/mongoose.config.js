const mongoose = require('mongoose');

const dbName = "products_2";

mongoose.connect(`mongodb://127.0.0.1:27017/products_2`, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
    .then(() => console.log(`Established a connection to ${dbName} database`))
    .catch(err => console.log("Something went wrong when connecting to the database", err));

    