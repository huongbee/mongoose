const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose1', { useMongoClient: true });
mongoose.Promise = global.Promise;

const catSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    age: { type: Number }
});

const Cat = mongoose.model('Cat', catSchema);

// const kitty = new Cat({ name: 'Kitty', age: 2 });
// kitty.save()
// .then(x => console.log(x))
// .catch(err => console.log(err));

Cat.insertMany([
    { name: 'K3', age: 1 },
    { name: 'K4', age: 2 },
    { name: 'K6', age: 1 },
    { name: 'K5', age: 3 },
])
.then(x => console.log(x))
.catch(err => console.log(err));

/*
    find()
    findById()
    findOne()
*/

// Cat.find()
// .then(cats => console.log(cats))
// .catch(err => console.log(err));

// Cat.findById('5a5ca805a987486912ca476d')
// .then(cat => console.log(cat))
// .catch(err => console.log(err));

Cat.findOne({ name: 'K2' })
.then(cat => console.log(cat))
.catch(err => console.log(err));
