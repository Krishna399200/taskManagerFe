import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask } from '../api/taskApi';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import TaskItem from './TaskItems';
import AddTaskModal from './AddTaskModal';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await getTasks();
            setTasks(response.data);
        };
        fetchTasks();
    }, []);

    const handleDelete = async (id) => {
        await deleteTask(id);
        setTasks(tasks.filter(task => task._id !== id));
    };

    const updateTaskInList = (updatedTask) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task._id === updatedTask._id ? updatedTask : task
            )
        );
    };

    return (
        <div>
            <Button variant="contained" onClick={() => setOpenModal(true)}>Add Task</Button>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Deadline</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tasks.map((task) => (
                            <TaskItem key={task._id} task={task} onDelete={handleDelete} onUpdateTask={updateTaskInList} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <AddTaskModal open={openModal} onClose={() => setOpenModal(false)} />
        </div>
    );
};

export default TaskList;
