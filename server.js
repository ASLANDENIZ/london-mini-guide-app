const express = require("express");
const cors = require("cors");
const { response } = require("express");
const lodash = require("lodash");
const app = express();
const stratford = require("./Data/Stratford.json")
const heathrow = require("./Data/Heathrow.json")
const harrow = require("./Data/Harrow.json")
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 4000;


app.get("/", (req, res) => {
    res.send("routes")
})



app.get("/:city/:category", (req, res) => {
    const category = req.params.category
    const city = req.params.city
    if (category === "pharmacies" || category === "doctors" || category === "colleges" || category === "hospitals") {
        if (city === "stratford") {
            res.json(stratford[category])
        } else if (city === "heathrow") {
            res.json(heathrow[category])
        } else if (city === "harrow") {
            res.json(harrow[category])
        } else {
            res.status(400).json({ msg: `city ${city} not found!` })
        }
    } else {
        res.status(400).json({ msg: `category ${category} not found!` })
    }
})

// Server Level 999
// You have the full control over this level

// Some suggestions:

// Add new cities.
// Add routes to add entries to our data.
// Make sure that you are saving the entered values to the json file.
// route	result
//     /: city / pharmacies	returns pharmacies list for : city
//         /: city / colleges	returns colleges list for : city
//             /: city / doctors	returns doctors list for : city
//                 /: city / hospitals	returns hospitals list for : city




// /: city / pharmacies	returns pharmacies list for : city
// app.get("/:city/pharmacies", (req, res) => {
//     if (req.params.city === "stratford") {
//         res.json(stratford["pharmacies"])
//     } else if (req.params.city === "heathrow") {
//         res.json(heathrow["pharmacies"])
//     } else if (req.params.city === "harrow") {
//         res.json(harrow["pharmacies"])
//     } else {
//         res.status(400).json({ msg: `city ${req.params.city} not found!` })
//     }
// })
// colleges	returns colleges list for stratford
// app.get("/:city/colleges", (req, res) => {
//     if (req.params.city === "stratford") {
//         res.json(stratford["colleges"])
//     } else if (req.params.city === "heathrow") {
//         res.json(heathrow["colleges"])
//     } else if (req.params.city === "harrow") {
//         res.json(harrow["colleges"])
//     } else {
//         res.status(400).json({ msg: `city ${req.params.city} not found!` })
//     }
// })

// doctors returns doctors list for stratford
// app.get("/:city/doctors", (req, res) => {
//     if (req.params.city === "stratford") {
//         res.json(stratford["doctors"])
//     } else if (req.params.city === "heathrow") {
//         res.json(heathrow["doctors"])
//     } else if (req.params.city === "harrow") {
//         res.json(harrow["doctors"])
//     } else {
//         res.status(400).json({ msg: `city ${req.params.city} not found!` })
//     }
// })

// hospital returns hospitals list for stratford

// app.get("/:city/hospitals", (req, res) => {
//     if (req.params.city === "stratford") {
//         res.json(stratford["hospitals"])
//     } else if (req.params.city === "heathrow") {
//         res.json(heathrow["hospitals"])
//     } else if (req.params.city === "harrow") {
//         res.json(harrow["hospitals"])
//     } else {
//         res.status(400).json({ msg: `city ${req.params.city} not found!` })
//     }
// })

// Server Level 500
// Make all of that in one single route as:

// route	result
//     /: city /: category	returns: category list for : city








app.listen(PORT, () => console.log(`Server started on port ${PORT}`));