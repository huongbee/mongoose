const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mean1812', { useMongoClient: true });
mongoose.Promise = global.Promise;

const catSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    age: { type: Number }
});

const Cat = mongoose.model('Cat', catSchema);

// Cat.findByIdAndUpdate('5a5cb2da2e0e076cd1f3d6a3', { name: '321 K6' }, { new: true })
// .then(cat => console.log(cat))
// .catch(err => console.log(err));

// Cat.findOneAndUpdate({ name: 'K3' }, { age: 15 }, { new: true })
// .then(cat => console.log(cat))
// .catch(err => console.log(err));

// Cat.update({ age: 30 }, { age: 2 }, { multi: true })
// .then(cats => console.log(cats))
// .catch(err => console.log(err));

Cat.find({ age: { $gt: 10 } })
.then(cats => console.log(cats))
.catch(err => console.log(err));
/*
    findByIdAndUpdate
    findOneAndUpdate
    update
*/
