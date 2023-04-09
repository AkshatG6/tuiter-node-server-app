// import posts from "./tuits.js";
// let tuits = posts;
import * as tuitsDao from './tuits-dao.js';

const createTuit = async (req, res) => {
    const newTuit = req.body;
    // newTuit._id = (new Date()).getTime()+'';
    // Here is the default tuit setup
    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit.dislikes = 1;
    newTuit.image = "spacex.jpeg";
    newTuit.handle = "@spacex";
    newTuit.time = "2h";
    newTuit.retuits = 0;
    newTuit.replies = 0;
    newTuit.username = "SpaceX"
    newTuit.topic = "Space"
    // tuits.push(newTuit);
    console.log("eAftwereee", newTuit)
    const insertedTuit = await tuitsDao
                             .createTuit(newTuit);
    res.json(newTuit);
  }
  
const findTuits = async (req, res) => {
  const tuits = await tuitsDao.findTuits()
  res.json(tuits);
}
   
   
const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    // const tuitIndex = tuits.findIndex(
    //     (t) => t._id === tuitdIdToUpdate)
    // tuits[tuitIndex] = 
    //     {...tuits[tuitIndex], ...updates};
    // res.sendStatus(200);
    const status = await tuitsDao
                       .updateTuit(tuitdIdToUpdate,
                                   updates);
    res.json(status);
}
  
  
const deleteTuit = async (req, res) => {
    // const tuitdIdToDelete = req.params.tid;
    // tuits = tuits.filter((t) =>
    //   t._id !== tuitdIdToDelete);
    const tuitdIdToDelete = req.params['tid'];
    // console.log("HEREHRHERHE", req.param)
    // console.log("HEREHRHERHE", req.params['tid'])
    const status = await tuitsDao
                       .deleteTuit(tuitdIdToDelete);
                       console.log(status)
    res.json(status);
  }
  

export default (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}
