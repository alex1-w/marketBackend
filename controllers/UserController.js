const { User } = require('../models/index')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookie = require("js-cookie");

const UserController = {

    async registration(req, res) {
        const { password, login } = req.body

        try {
            const hashedPassword = await bcrypt.hash(password, 2);
            const user = await User.create({ login, password: hashedPassword });

            return res.status(200).json({ login: user.login });
        } catch (err) {
            console.log(err)
        }
    },
    async authentication(req, res) {

        const user = await User.findOne({
            where: { login: req.body.login },
        });
        // console.log(req.body);
        if (!user) { return res.status(400).json({ message: "пользователь не найден" }) }
        try {
            const isPasswordRight = await bcrypt.compare(
                req.body.password,
                user.password
            );

            if (!isPasswordRight) { return res.status(400).json({ message: "пароль неверный" }) }

            // const userToken = jwt.sign(
            //     { id: user.id },
            //     "fqugwqgfuiewfgefugieho",
            //     { expiresIn: "55m", }
            // );
            // cookie.set('userToken', userToken, { expires: 1 })

            // return res.status(200).json({ id: user.id, token: userToken });
            return res.status(200).json(req.body);
        }
        catch (error) {
            console.log(error);
        }
    },
    async getUserInfo(req, res) {
        const user = await User.findAll()
        res.status(200).json(user)
    }
}

module.exports = UserController