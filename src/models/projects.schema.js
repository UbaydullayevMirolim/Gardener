const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    Title:{ 
        type: String,
        required: true,    
    },
    image: {
        type: String,
        required: true,
      },
    about:{
        type: String,
        required: true,
    },
    role:{
        type: String,
        required: true,
    }
   
  },
  {timestamps: true}
  );
  
module.exports = mongoose.model('project', projectSchema);

  
  
  
  
  