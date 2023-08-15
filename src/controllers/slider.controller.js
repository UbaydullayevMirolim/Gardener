const Joi = require('joi');
const Slider = require("../models/home.slider.schema")

// --- POST TITLES --------------------------------

const Title = async (req, res) => {
    const { title, about } = req.body;
    const { imageName: image } = req;
  
    const schema = Joi.object({
      title: Joi.string().required(),
    });
  
    const { error } = schema.validate({
      title, about
    });
    if (error) {
      console.log(error.message);
      return res.status(401).json({error: error.message});
    }
  
    Slider.create({
      title, about,
      image,
    });
    res.status(201).json({message: "Title created successfully"})
};

//  ----- GET SLIDERS

const gSlider = async (req, res) => {
    const slider = await Slider.find();
    
    res.status(200).json({ slider: slider})
};


module.exports = {
    Title,
    gSlider
}