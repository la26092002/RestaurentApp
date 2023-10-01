const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
const Resto = require("../../models/Resto");
const auth = require("../../middleware/auth");

//@route    POST api/resto/register
//@desc     Register Resto
//@access   Public
router.post(
    "/register",
    [
        check("name", "Name is required").not().isEmpty(), //To be there and not empty
        check("email", "Please include a valid email").isEmail(),
        check("password", "Please enter a password with 6 or more char").isLength({
            min: 6,
        }),check("cityId", "city is required").not().isEmpty(),
        
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, password, cityId } = req.body;
        try {
            let resto = await Resto.findOne({ email });

            if (resto) {
                return res
                    .status(400)
                    .json({ errors: [{ msg: "Resto already exists" }] });
            }

            resto = new Resto({
                name,
                email,
                password,
                cityId,
            });

            const salt = await bcrypt.genSalt(10);

            resto.password = await bcrypt.hash(password, salt);

            resto.save();

            const payload = {
                resto: {
                    id: resto.id,
                },
            };

            jwt.sign(
                payload,
                config.get("jwtSecret"),
                { expiresIn: 360000 },//it indicates a time period of 360000 milliseconds, which is equivalent to 360 seconds or 6 minutes.
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                }
            );
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Server error");
        }

    }
);

//@route    POST /api/resto/login
//@desc     login with auth
//@access   Public
router.post(
    "/login",
    [
        check("email", "Please include a valid email").isEmail(),
        check("password", "Password is required").exists()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(401).json({ errors: errors.array() });
        }

        const { email, password } = req.body;
        try {
            let resto = await Resto.findOne({ email });

            if (!resto) {
                return res
                    .status(402)
                    .json({ errors: [{ msg: "Invalid Credentials 1" }] });
            }

           const isMatch = await bcrypt.compare(password,resto.password)
           if(!isMatch){
            return res.status(403).json({errors: [{msg: 'Invalid Credentials 2'}]})
           }

           const payload = {
            resto: {
                id: resto.id,
                cityId: resto.cityId
            },
        };

            jwt.sign(
                payload,
                config.get("jwtSecret"),
                { expiresIn: '1d' },//it indicates a time period of 360000 milliseconds, which is equivalent to 360 seconds or 6 minutes.
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                }
            );
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Server error");
        }

    }
);




//@route    Get /api/resto/
//@desc     Test route
//@access   Public
router.get('/', auth, async (req, res) =>{
    try {
        const resto = await Resto.findById(req.user.id).select('-password');
        res.json(resto)
    }catch(err){
        console.error(err.message)
        res.status(500).send('Server Error')
    }
});





module.exports = router;