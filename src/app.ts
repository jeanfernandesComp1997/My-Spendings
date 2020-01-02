import jwt from 'jsonwebtoken';
import express from "express";
import path from "path";
import bodyParser from "body-parser";
const cors = require('cors')
require('dotenv').config();

import * as homeController from "./application/controllers/homeController";
import * as userController from "./application/controllers/userController";
import * as spendingController from "./application/controllers/spendingController";

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);

/**
 * Primary app routes.
 */
app.post("/index", verifyJWT, homeController.index);
app.post("/createuser", userController.createUser);
app.get("/finduser", userController.findUser);
app.post("/login", userController.login);
app.post("/createspending", verifyJWT, spendingController.createSpending);
app.get("/listspendings", verifyJWT, spendingController.listSpendings);
app.delete("/deletespending", verifyJWT, spendingController.deleteSpending);
app.put("/updatespending", verifyJWT, spendingController.updateSpending);

export default app;

//#region private functions

function verifyJWT(req, res, next) {
    let token = req.headers['x-access-token'];

    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, process.env.SECRET, function (err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

        req.userId = decoded.id;
        next();
    });
}