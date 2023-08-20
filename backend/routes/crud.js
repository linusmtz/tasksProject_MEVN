var express = require('express');
var router = express.Router();
const {validToken} = require('../middleware/generateToken');
const {getAllUserTasks,getUserByTitle} = require('../controllers/TaskControllers/searchingControllers');
const { createTask } = require('../controllers/TaskControllers/createTaskController');
const { editTask } = require('../controllers/TaskControllers/updateController');



router.get('/',validToken,(req,res)=>{
    res.status(200).send({ok:true});
});

router.get('/tasks',validToken,getAllUserTasks);
router.get('/tasks/name',validToken,getUserByTitle) // edit this route

router.post('/task',validToken,createTask);

router.post('/task/edit',validToken,editTask);

/*



router.put('/tasks');
router.delete('/tasks');

*/

module.exports = router;

