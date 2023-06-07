import React from 'react';
import '../components/Resume.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import resume2 from './assets/Resume2.png';


function Resume() {
    return (
        <>
         <Card style={{ width: '80%', 
        paddingBottom: '10px',
        margin: '80px',
         }}>
      <Card.Body>
        <Card.Title style={{fontSize: '40px', textAlign: 'center', fontFamily: 'Times New Roman'}}>Resume</Card.Title>
        <Card.Text style={{textAlign: 'center', fontFamily: 'Times New Roman'}}>
            <a href={resume2} download="Melanie's Resume">
                <button>Click Here to Download My Resume</button>
            </a>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush" style={{fontSize: '20px', fontFamily: 'Times New Roman'}}>
        <ListGroup.Item style={{fontSize: '30px'}}>Front-end Proficiencies</ListGroup.Item>
        <ListGroup.Item>HTML</ListGroup.Item>
        <ListGroup.Item>CSS</ListGroup.Item>
        <ListGroup.Item>JavaScript</ListGroup.Item>
        <ListGroup.Item>Responsive Design</ListGroup.Item>
        <ListGroup.Item>React</ListGroup.Item>
        <ListGroup.Item>Bootstrap</ListGroup.Item>
      </ListGroup>
      <ListGroup className="list-group-flush" style={{fontSize: '20px', fontFamily: 'Times New Roman'}}>
        <ListGroup.Item style={{fontSize: '30px'}}>Back-end Proficiencies</ListGroup.Item>
        <ListGroup.Item>APIs</ListGroup.Item>
        <ListGroup.Item>Node</ListGroup.Item>
        <ListGroup.Item>Express</ListGroup.Item>
        <ListGroup.Item>MySQL, Sequelize</ListGroup.Item>
        <ListGroup.Item>MongoDB, Mongoose</ListGroup.Item>
        <ListGroup.Item>REST</ListGroup.Item>
        <ListGroup.Item>GraphQL</ListGroup.Item>
      </ListGroup>
    </Card>
        </>
      );
}

export default Resume;