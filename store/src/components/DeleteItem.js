import React from 'react';
import { Button } from 'react-bootstrap';

const DeleteItem = ({ onDelete }) => {
    const handleClick = () => {
        if (onDelete) {
            onDelete();
        }
    };

    return (
        <Button variant="secondary" onClick={handleClick} style={{ padding: '8px 16px', marginRight: '8px', marginTop: "4px"}}>
            Delete
        </Button>
    );
};

export default DeleteItem;