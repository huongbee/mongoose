const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mean1812', { useMongoClient: true });
mongoose.Promise = global.Promise;

const catSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    age: { type: Number }
});

const Cat = mongoose.model('Cat', catSchema);

// Cat.findByIdAndRemove('5a5ca805a987486912ca476d')
// .then(x => console.log(x))
// .catch(err => console.log(err));

// Cat.findOneAndRemove({ name: 'K2' })
// .then(cat => console.log(cat))
// .catch(err => console.log(err));

Cat.remove()
.then(cat => console.log(cat))
.catch(err => console.log(err));
/*
    remove();
    findOneAndRemove();
    findByIdAndRemove();
*/
