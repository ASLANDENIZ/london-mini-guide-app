const express = require("express");
const cors = require("cors");
const { response } = require("express");
const lodash = require("lodash");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
