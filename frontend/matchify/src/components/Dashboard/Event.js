import React from 'react';
import { Card, Button, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import eventImage from './event.jpg';
import styles from "./DashboardStyles";

const Event = ({ eventDetails, isSlider }) => {
    const navigate = useNavigate();
    
    // Default values if eventDetails is undefined
    const name = eventDetails?.createdBy 
        ? `${eventDetails.createdBy.firstName} ${eventDetails.createdBy.lastName}` 
        : 'Unknown';
    const image = eventDetails?.imageURL || eventImage;
    const eventName = eventDetails?.eventName || 'Event Name';
    const eventDate = eventDetails?.eventDate || 'Event Date';
    const startTime = eventDetails?.startTime || 'Start Time';
    const city = eventDetails?.city || 'Location';

    const goToEventDetails = () => {
        navigate('/view-event', { state: { eventDetails } });
    };

    return (
        <Card style={{ ...styles.eventCard, ...(!isSlider && styles.cardWidth) }}>
            <Card.Img variant="top" src={image} style={styles.cardImage} />
            <Card.Body style={styles.cardBody}>
                <Card.Title style={styles.cardTitle}>{eventName}</Card.Title>
                <ListGroup variant="flush" style={styles.listGroup}>
                    <ListGroup.Item style={styles.cardList}>Host Name: {name}</ListGroup.Item>
                    <ListGroup.Item style={styles.cardList}>Date: {eventDate}</ListGroup.Item>
                    <ListGroup.Item style={styles.cardList}>Time: {startTime}</ListGroup.Item>
                    <ListGroup.Item style={styles.cardList}>Location: {city}</ListGroup.Item>
                </ListGroup>
                <Button variant="secondary" style={styles.cardButton} onClick={goToEventDetails}>
                    <span style={styles.cardButtonText}>More Info</span>
                </Button>
            </Card.Body>
        </Card>
    );
};

export default Event;
