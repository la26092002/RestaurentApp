const express = require("express");
const router = express.Router();

const { check, validationResult } = require("express-validator");
const Country = require("../../models/Country");
const Willaya = require("../../models/Willaya");
const City = require("../../models/City");

//@route    POST /api/data
//@desc     Add Country
//@access   Public
router.post(
    "/country",
    [
        check("name", "Name is required").not().isEmpty(), //To be there and not empty
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name } = req.body;
        try {
            let country = await Country.findOne({ name });

            if (country) {
                return res
                    .status(400)
                    .json({ errors: [{ msg: "Pay Exixt D'eja already exists" }] });
            }
            country = new Country({
                name,
            });
            country.save();
            res.status(200).json(`${name} Ajouter`);
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Server error");
        }

    }
);


//@route    POST /api/data
//@desc     Add Willaya
//@access   Public
router.post(
    "/willaya",
    [
        check("name", "Name is required").not().isEmpty(), //To be there and not empty
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name,countryId } = req.body;
        try {
            let willaya = await Willaya.findOne({ name });

            if (willaya) {
                return res
                    .status(400)
                    .json({ errors: [{ msg: "Willaya Exixt D'eja " }] });
            }
            willaya = new Willaya({
                countryId,
                name,
            });
            willaya.save();
            res.status(200).json(`${name} Ajouter`);
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Server error");
        }

    }
);


//@route    POST /api/data
//@desc     Add city
//@access   Public
router.post(
    "/city",
    [
        check("name", "Name is required").not().isEmpty(), //To be there and not empty
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name,willayaId } = req.body;
        try {
            let city = await City.findOne({ name });

            if (city) {
                return res
                    .status(400)
                    .json({ errors: [{ msg: "city Exixt D'eja " }] });
            }
            city = new City({
                willayaId,
                name,
            });
            city.save();
            res.status(200).json(`${name} Ajouter`);
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Server error");
        }

    }
);

module.exports = router;
