const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://ps114100052:shaktimaan@cluster0.j6yiu.mongodb.net/NotesApp");
const notesSchema = new mongoose.Schema({
    title: String,
    description: String,
    content:String,
    isImportant:Boolean,
    uploadedBy: String,
    date: {
        type:Date,
        default:Date.now
    }
})

mongoose.model('notes',notesSchema );
module.exports = mongoose.model('notes');