import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Navbar, Nav, Dropdown, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/images/CodeBloggsgraphic.png';


export default function Header() {
  
  const [showModal, setShowModal] = useState(false);
  const [postTitle, setPostTitle] = useState('');
  const [postText, setPostText] = useState('');

  const handlePostSubmit = () => {
    // Implement post submission logic here
    console.log(`Title: ${postTitle}`);
    console.log(`Text: ${postText}`);
    setShowModal(false);
  };

  return (
    <>
      <Navbar bg="light" expand="lg" style={{ borderBottom: '2px solid #FFAE9E' }} fixed="top">
        <Navbar.Brand href="#home" className="mx-auto">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
          Codebloggs
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav className="mx-auto">
            <Button style={{backgroundColor: "#8d88ea" }}variant="outline-light" className="mr-2" onClick={() => setShowModal(true)}>
              Post
            </Button>
            <Dropdown>
              <Dropdown.Toggle style={{backgroundColor: "#8d88ea" }} variant="outline-light" id="user-dropdown">
                User
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#account-settings">Account Settings</Dropdown.Item>
                <Dropdown.Item href="#logout">Log Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
          <Nav className="ml-auto"></Nav>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Post a new Blogss!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="postTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter title" value={postTitle} onChange={(e) => setPostTitle(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="postText">
              <Form.Label>Text</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter text" value={postText} onChange={(e) => setPostText(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button style={{backgroundColor: "#8d88ea" }}variant="outline-light" onClick={handlePostSubmit}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
