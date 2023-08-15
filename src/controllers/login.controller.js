const Joi = require('joi');
const bcrypt = require('bcrypt');
const jwt = require("../utils/jwt")
const User = require("../models/admin.schema")

//  ---  LOGIN   ----
const login = async(req, res) => {
    const {username, password} = req.body;

    const schema = Joi.object({
        username: Joi.string().email().required(),
        password: Joi.string().required(),
    })
    const {error} = schema.validate({username, password});
    if (error){
        return res.status(403).json({error: error.message})
    }

    const admin = await User.findOne({username})
    if (!admin){
        return res.status(403).json({error: "Incorrect username or password!"})
    };

    const comparePassword = await bcrypt.compare(password, admin.password)
    if (!comparePassword){
        return res.status(403).json({error: "Incorrect username or password!"})
    }
    const token = jwt.sign({password: admin.id})
  res.status(201).json({succes:true, token})
}



//   ROLE
const putRole =  (req, res) => {
  
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'У вас нет прав для выполнения этого действия.' });
    }
  
  
    const { userId } = req.body;   
    User.findByIdAndUpdate(
      userId,
      { role: 'admin' },
      { new: true },
      (err, user) => {
        if (err) {
          return res.status(500).json({ message: 'Произошла ошибка при обновлении роли пользователя.' });
        }
  
        if (!user) {
          return res.status(404).json({ message: 'Пользователь не найден.' });
        }
  
        return res.status(200).json({ message: 'Роль пользователя успешно изменена.', user: user });
      }
    );
  };
  


module.exports ={
    login,
    putRole

}

