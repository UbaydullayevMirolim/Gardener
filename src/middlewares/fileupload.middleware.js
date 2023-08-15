const { v4: uuid } = require("uuid");
const Joi = require("joi");
const path = require("path");

const fileUpload = (req, res, next) => {
  const image = req.files?.image;
  const schema = Joi.object({
    image: Joi.required(),
  });

  const { error } = schema.validate({ image });
  if (error) {
    console.log(error.message);
    return res.status(403).json({error: error.message});
  }
  
  const extname = path.extname(image.name);
  const imageName = `${uuid()}${extname}`;
  image.mv(`${process.cwd()}/uploads/${imageName}`);
  req.imageName = imageName;
  next();
};

module.exports = {fileUpload};
