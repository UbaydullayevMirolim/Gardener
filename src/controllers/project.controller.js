const Joi = require('joi');
const Projects = require("../models/projects.schema")


//   ----  POST PROJECTS  ----

const projectAdd = async (req, res) => {
    const { Title, about, role } = req.body;
    const { imageName: image } = req;
  
    const schema = Joi.object({
      title: Joi.string().required(),
    });
  
    const { error } = schema.validate({
      Title, about, role
    });
    if (error) {
      console.log(error.message);
      return res.status(401).json({error: error.message});
    }
  
    Projects.create({
      title,about, role,
      image,
    });
    res.status(201).json({message: "Title created successfully"})
};

//   ----- GET ALL PROJECTS -----

const gProject = async (req, res) => {
    const projects = await Projects.find();
    
    res.status(200).json({ projects: projects})
};

//  GET
  
const  getP = async (req, res) => {
  const { role } = req.params;
    Projects.find({ role: { $in: role } }, (err, projects) => {
      if (err) {
        return res.status(500).json({ message: 'Произошла ошибка при получении пользователей.' });
      }
    
      return res.status(200).json({ projects: projects });
    }
)}
      




module.exports = {
    projectAdd,
    gProject,
    getP
}