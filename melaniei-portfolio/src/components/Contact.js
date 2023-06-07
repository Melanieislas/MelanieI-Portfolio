import React from 'react';
import '../components/AboutMe.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contact () {
    return (
        <>
            <div style={{ display: 'block', 
                  width: '80%', 
                  padding: 30,
                  paddingBottom: '200px',
                  }}>
            <h4>Contact</h4>
            <Form>
                <Form.Group>
                    <Form.Label>Enter your name:</Form.Label>
                    <Form.Control type="text" 
                                    placeholder="Enter your full name" />
                    </Form.Group>
                    <Form.Group>
                    <Form.Label>Enter your email address:</Form.Label>
                    <Form.Control type="email" 
                                    placeholder="Enter your your email address" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message:</Form.Label>
                        <Form.Control as="textarea" rows={7} />
                    </Form.Group>
                    <Button variant="warning" type="submit">
                    Click here to submit form
                    </Button>
                </Form>
            </div>
        </>
      );
}

export default Contact;