const mongoose = require('mongoose');

const QuotaSchema = new mongoose.Schema({
    yourName:{ 
        type: String,
        required: true,    
    },
    youremail: {
        type: String,
        required: true,
        unique: true
      },
    yourMobile:{
        type: String,
        required: true,
    },
    serviceType: {
        type: String,
        required: true,
    },
    Message: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['accept', 'ignore', 'wait'],
        default: 'wait',
      },
  },
  {timestamps: true}
  );
  
module.exports = mongoose.model('Quota', QuotaSchema);

  
  
  
  
  