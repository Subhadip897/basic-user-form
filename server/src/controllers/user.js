const User = require("../models/userModel");

const saveUserInfo = async (req, res) => {
    try {
        const userData =  req.body;

        const isExists = await User.findOne({$or: [{email: userData.email}, {phone: userData.phone}]});

        if(isExists){
            return res.status(409).json({
                user: {
                    data: {},
                    message: "User already exists.",
                }
            });
        }

        const user = await User.create(userData);

        if(user){
            return res.status(200).json({
                user: {
                    data: user,
                    message: "User's record saved successfully."
                }
            })
        }
    } catch (error) {
        console.error("save user info error: ", error);
    }
}

module.exports = {saveUserInfo};