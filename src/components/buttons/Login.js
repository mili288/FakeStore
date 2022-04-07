
import React, {useState} from 'react'
import {Modal, Button, Form} from 'react-bootstrap';

function Login() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button  className="btn btn-outline-light ms-auto" 
        type="button" variant="outline-light"
        onClick={handleShow}>
         <span className="fa fa-sign-in me-1"></span> Login
        </Button >
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Log in</Modal.Title>
          </Modal.Header>
          <Button className="btn w-100 mb-2" variant="dark">
            <span className="fa fa-google me-2"></span> Sign in With Google
          </Button>
          <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label htmlFor="exampleInputEmail1" className="form-label">Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className="form-label">Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <div style={{paddingLeft: '200px', paddingBottom: '15px'}}>
  <Button type="submit" variant="dark">
    Login
  </Button>
  </div>
</Form>
        </Modal>
      </>
    );
  }
  

export default Login
