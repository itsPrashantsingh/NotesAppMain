const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://ps114100052:shaktimaan@cluster0.j6yiu.mongodb.net/NotesApp");
const userSchema = new mongoose.Schema({
    username:String,
    name: String,
    email:String,
    password:String,
    date: {
        type:Date,
        default:Date.now
    }
})

mongoose.model('user', userSchema);
module.exports = mongoose.model('user');