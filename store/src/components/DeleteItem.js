import React from 'react';
import { Button } from 'react-bootstrap';

const DeleteItem = ({ onDelete }) => {
    const handleClick = () => {
        if (onDelete) {
            onDelete();
        }
    };

    return (
        <Button variant="danger" onClick={handleClick}>
            Delete
        </Button>
    );
};

export default DeleteItem;