const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
const Resto = require("../../models/Resto");
const Employer = require("../../models/Employer");
const auth = require("../../middleware/auth");

//@route    POST /api/resto/employer
//@desc     Create a employer
//@access   Private
router.post('/', [
    auth, [
        check("name", "text is required").not().isEmpty(),
        check("phone", "Please include a valid email").not().isEmpty(),
        check("typeEmployer", "Password is required").not().isEmpty()
    ]
], async (req, res) => {
    const errors = validationResult(req);//if there is error for checking it will store errors
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }


    try {
        const resto = await Resto.findById(req.user.id).select('-password');

        const newEmployer = new Employer({
            name: req.body.name,
            phone: req.body.phone,
            typeEmployer: req.body.typeEmployer,
            restoId: req.user.id,
            cityId: resto.cityId
        })
        const employer = await newEmployer.save();
        res.json(employer);
    } catch (err) {
        console.error(err.message)
        res.status(500).send('server Error');
    }

});


//@route    GET /api/resto/employer
//@desc     Get all employes
//@access   Private
router.get('/', auth, async (req, res) => {
    try {
        const restoId = req.user.id
        console.log(restoId)
        const employer = await Employer.find({restoId}).sort({ date: -1 });
        res.status(200).json(employer);
    } catch (err) {
        console.error(err.message)
        res.status(500).send('server Error');
    }
});



//@route    DELETE /api/resto/employer/:id
//@desc     Delete a employe
//@access   Private
router.delete('/:id', auth, async (req, res) => {
    try {
        const employer = await Employer.findById(req.params.id);

        if (!employer) {
            return res.status(404).json({ msg: 'employer not found' });
        }

        //Check user
        if (employer.restoId.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        await Employer.findByIdAndDelete(req.params.id);

        res.json({ msg: 'Employer Supprimer' });
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Employer not found' });
        }
        res.status(500).send('server Error');
    }
});




module.exports = router;