var express = require('express');
var router = express.Router();
var User = require("../models/userModel");
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
let secret = "secret";

var notes = require("../models/notesModel");
const notesModel = require('../models/notesModel');




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/signup",async (req, res)=>{
  let {username, name, email, password} = req.body;
  let emailcon = await User.findOne({email});
  if(emailcon){
    res.status(400).json({success:false,
      message:"Email already exists"});
  }
  else{
    bcrypt.hash(password, 10, async function(err, hash) {
     
      let user = await User.create({username, name, email, password:hash});

      var token = jwt.sign({ userID: user._id, email:user.email }, secret);

      res.json({
        success: true,
        message:"User created successfully",
        token:token,
        userID:user._id
      })
  });
  }

})

router.post("/login", async (req, res)=>{
  let {email, password} = req.body;
  let user = await User.findOne({email});
  if(!user){
    res.status(400).json({success: false,
      message:"Email not found"});
  }
  else{
    let isMatch = await bcrypt.compare(password, user.password);
    if(isMatch){
      var token = jwt.sign({ userID: user._id, email:user.email }, secret);
      res.json({
        success: true,
        message:"User logged in successfully",
        token:token,
        userID:user._id

      })
    }
    else{
      res.status(400).json({success: false,
        message:"Invalid password",
        
      });
    }
  }
})

router.post("/getnotes", async (req, res)=>{
  let notes = await notesModel.find({uploadedBy: req.body.userID});
  if(notes.length>0){
    res.json({success: true,
      message:"Notes found",
      notes:notes
    });
  }
  else{
    res.status(400).json({message:"No notes found",
      success:false
    });
  }

})

router.post("/addnotes", async(req, res)=>{
  let{title, description, content, isImportant, uploadedBy} = req.body;
  let note = await notesModel.create({title, description, content, isImportant, uploadedBy});
  
  res.json({
    success: true,
    noteId: note._id,
    userId: uploadedBy

  });



})

router.post("/deletenotes", async(req, res)=>{
  let {noteId} = req.body;
  let note = await notesModel.findByIdAndDelete(noteId);
  if(note){
    res.json({message:"Note deleted successfully",
      success:true
    });
  }
  else{
    res.status(400).json({message:"Note not found",
      success:false
    });
  }
})

router.post("/updatenote", async(req, res)=>{
  let {noteId, title, description, content, isImportant} = req.body;
  let note = await notesModel.findByIdAndUpdate(noteId, {title, description, content, isImportant});
  
  if(note){
    res.json({message:"Note updated successfully",
      success:true
    });
    }
  else{
    res.status(400).json({message:"Note not found",
      success:false
    });
  }
})


module.exports = router;
