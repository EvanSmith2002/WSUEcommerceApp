import React from 'react';
import { Button } from 'react-bootstrap';

const DeleteItem = ({ onDelete }) => {
    const handleClick = () => {
        if (onDelete) {
            onDelete();
        }
    };

    return (
        <Button variant="secondary" onClick={handleClick}>
            Delete
        </Button>
    );
};

export default DeleteItem;