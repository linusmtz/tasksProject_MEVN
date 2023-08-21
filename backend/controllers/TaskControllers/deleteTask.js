const UserModel = require('../../models/User');

async function deleteTask(req, res) {
    try {
        const { username, taskid } = req.body;

        const user = await UserModel.findOne({ username });

        if (!user) {
            res.status(404).json({ msg: 'User not found', estatus: 0 });
            return;
        }

        user.tasks = user.tasks.filter(task => task._id.toString() !== taskid);
        
        await user.save(); 

        res.status(200).json({ msg: 'Task deleted successfully', estatus: 1 });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Internal server error', estatus: 0 });
    }
}

module.exports = {
    deleteTask
};
