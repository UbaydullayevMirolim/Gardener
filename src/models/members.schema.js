const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    job: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
 
  },
  {timestamps: true}
  );
  
module.exports = mongoose.model('Member', memberSchema);

  
  
  
  
  