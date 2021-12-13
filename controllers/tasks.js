const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json({ tasks });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
    res.send("all items from the file");
};

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

const getTask = async (req, res) => {
    try {
        const task = await Task.findOne({ _id: req.params.id });
        res.status(200).json({ task });
    } catch (error) {
        res.status(404).json({
            error: "Task Doesnt Exist!!",
        });
    }
};

const updateTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

const deleteTask = async (req, res) => {
    try {
        await Task.deleteOne({ _id: req.params.id });
        res.status(200).json({ task });
    } catch {
        res.status(404).json({
            error: "Task Doesnt Exist !!",
        });
    }
};

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
};
