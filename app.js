import express from 'express'
import cors from 'cors'
import HelloController
  from "./controllers/hello-controller.js"
import TuitsController from './controllers/tuits/tuits-controller.js';
import UserController from './controllers/users/users-controller.js'
import mongoose from "mongoose";
mongoose.connect('mongodb+srv://akshatgandhi1202:YtQygg4nuuPE3zBA@cluster0.mgfwiwo.mongodb.net/tuiter?retryWrites=true&w=majority');


const app = express()
app.use(cors())
app.use(express.json());    // parse JSON from HTTP request body
HelloController(app)
UserController(app)
TuitsController(app)
app.listen(process.env.PORT || 4000)