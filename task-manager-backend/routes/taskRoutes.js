import express from 'express';
import Task from '../models/Task.js';


const router = express.Router();

//Create task
router.post('/',async(req,res) => {
    try {
        const task = new Task(req.body);
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json( { error : error.message });
        
    }
});

//Get all tasks
router.get('/', async(req,res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        
    }
});

//update task 
router.put('/:id', async (req, res) => {
    try {
      const updatedTask = await Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(updatedTask);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  
  // Delete Task
  router.delete('/:id', async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted' });
  });


  export default router;