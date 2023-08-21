var express = require('express');
var router = express.Router();
const {validToken} = require('../middleware/generateToken');

const { createTask } = require('../controllers/TaskControllers/createTaskController');

const {getAllUserTasks,getUserByTitle,getSortedTasks,getTasksByStatus} = require('../controllers/TaskControllers/searchingControllers');

const { editTask } = require('../controllers/TaskControllers/updateController');

const {deleteTask} = require('../controllers/TaskControllers/deleteTask')


router.get('/',validToken,(req,res)=>{
    res.status(200).send({ok:true});
});


router.post('/task',validToken,createTask);



router.get('/tasks',validToken,getAllUserTasks);
router.get('/tasks/name',validToken,getUserByTitle) // edit this route
router.get('/tasks/sorted',validToken,getSortedTasks);
router.get('/tasks/status',validToken,getTasksByStatus);

router.post('/task/edit',validToken,editTask);

router.delete('/task/delete',validToken,deleteTask)


/*



router.put('/tasks');
router.delete('/tasks');

*/

module.exports = router;

