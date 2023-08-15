const Joi = require('joi');
const Quotas = require("../models/quota.schema")

//  ---- POST QUOTAS -----

const quota = async (req, res) => {
    const { yourName, yourEmail, yourMobile, serviceType, Message } = req.body;
  
    const schema = Joi.object({
      yourName: Joi.string().required(),
      yourEmail: Joi.string().required(),
      yourMobile: Joi.string().required(),
      yourMobile: Joi.string().required(),
      Message: Joi.string().required(),
    });
  
    const { error } = schema.validate({
      yourName, yourEmail, yourMobile, serviceType, Message,
    });
    if (error) {
      console.log(error.message);
      return res.status(401).json({error: error.message});
    }
  
    Quotas.create({
        yourName, yourEmail, yourMobile, serviceType, Message,
    });
    res.status(201).json({message: "Title created successfully"})
};

//  ---- GET QUOTAS --------------

  const gQuota = async (req, res) => {
    const kvota = await Quotas.find();
    
    res.status(200).json({ kvota: kvota})
};

//  ----  UPDATE QUOTAS -------------

  const putQuota =  (req, res) => {
    const { userId } = req.params;   
    Quotas.findByIdAndUpdate(
      userId,
      { role: 'accept' },
      { new: true },
      (err, wait) => {
        if (err) {
          return res.status(500).json({ message: 'Произошла ошибка при обновлении роли пользователя.' });
        }
  
        if (!wait) {
          return res.status(404).json({ message: 'Пользователь не найден.' });
        }
  
        return res.status(200).json({ message: 'Роль пользователя успешно изменена.', wait: wait });
      }
    );
};


module.exports = {
    quota,
    gQuota,
    putQuota
}