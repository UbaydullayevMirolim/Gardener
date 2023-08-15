const mongoose = require('mongoose');

const sliderSchema = new mongoose.Schema({
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
   
  },
  {timestamps: true}
  );
  
module.exports = mongoose.model('Slider', sliderSchema);

  
  
  
  
  