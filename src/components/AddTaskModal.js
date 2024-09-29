import React, { useState } from 'react';
import { Modal, Button, TextField } from '@mui/material';
import { createTask } from '../api/taskApi';

const AddTaskModal = ({ open, onClose }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('deadline', deadline);
        if (file) formData.append('linkedFile', file);

        await createTask(formData);
        onClose();
    };

    return (
        <Modal open={open} onClose={onClose}>
            <form onSubmit={handleSubmit}>
                <TextField label="Title" required onChange={(e) => setTitle(e.target.value)} />
                <TextField label="Description" required onChange={(e) => setDescription(e.target.value)} />
                <TextField type="date" required onChange={(e) => setDeadline(e.target.value)} />
                <input type="file" accept="application/pdf" onChange={(e) => setFile(e.target.files[0])} />
                <Button type="submit">Add Task</Button>
            </form>
        </Modal>
    );
};

export default AddTaskModal;
