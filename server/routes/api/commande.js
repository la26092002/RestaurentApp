const express = require("express");
const router = express.Router();

const { check, validationResult } = require("express-validator");
const Command = require("../../models/Command");

//@route    POST /api/data
//@desc     Add Country
//@access   Public
router.post(
    "/",
    [
        check("data", "data is required").not().isEmpty(), //To be there and not empty 
        check("user", "user is required").not().isEmpty(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { data, user } = req.body;
        try {
            
            commande = new Command({
                user,
                data,
            });
            commande.save();
            res.status(200).json(`La commande Est Ajouter`);
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Server error");
        }

    }
);



module.exports = router;
