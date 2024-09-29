import React from 'react';
import { TableCell, TableRow, Button } from '@mui/material';
import axios from 'axios';

const TaskItem = ({ task, onDelete ,onUpdateTask}) => {
    const handleMarkDone = async () => {
        // Implement mark as done logic here
        try {
            // Send a PUT request to update the task's status to DONE
            const response = await axios.put(`/api/tasks/${task._id}`, {
                ...task,
                status: 'DONE' // Updating the status
            });

            // Call the onUpdateTask callback to refresh the task list in parent component
            onUpdateTask(response.data);
        } catch (error) {
            console.error('Error marking task as done:', error);
        }
    };

    return (
        <TableRow>
            <TableCell>{task.title}</TableCell>
            <TableCell>{task.description}</TableCell>
            <TableCell>{task.deadline}</TableCell>
            <TableCell>{task.status === 'DONE' ? 'Achieved' : 'In Progress'}</TableCell>
            <TableCell>
                <Button onClick={handleMarkDone}>Mark as Done</Button>
                <Button onClick={() => onDelete(task._id)}>Delete</Button>
            </TableCell>
        </TableRow>
    );
};

export default TaskItem;
