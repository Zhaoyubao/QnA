let User = require('../models/user');

module.exports = {
    login(req, res) {
        User.findOne({name: req.body.name}, (err, user) => {
            if(err)  console.log(`Error getting user: ${err}`);
            else {
                if(user)  res.json(user);
                else {
                    User.create(req.body, (err, user) => {
                        if(err)  console.log(`Error adding user: ${err}`);
                        else  res.json(user);
                    })
                }
            }
        })
    },

}
