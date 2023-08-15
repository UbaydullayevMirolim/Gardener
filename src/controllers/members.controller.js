const Joi = require('joi');
const Members = require("../models/members.schema")

//  ADD MEMBER

const member = async (req, res) => {
    const { username, job } = req.body;
    const { imageName: image } = req;
  
    const schema = Joi.object({
      username: Joi.string().required(),
      job: Joi.string().required(),
    });
  
    const { error } = schema.validate({
      username, job,
    });
    if (error) {
      console.log(error.message);
      return res.status(401).json({error: error.message});
    }
  
    Members.create({
      username,job,
      image,
    });
    res.status(201).json({message: "Members created successfully"})
};

//   GET MEMBERS

  const gMember = async (req, res) => {
    const membe = await Members.find();
    
    res.status(200).json({ members: membe})
};

module.exports ={
    member,
    gMember
}
