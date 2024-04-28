import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { FcPlus } from "react-icons/fc";
import axios from 'axios';

const ModelCreateUser = (props) => {
    const {show,setShow}=props;
    
    // const [show, setShow] = useState(false);
    const handleClose = () =>{
      setShow(false)
      setEmail("");
      setPassword("")
      setUsername("");
      SetRole("User");
      setPreviewImage("");
      setImage("");
    };
    const handleShow = () => setShow(true);
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [username,setUsername]=useState("");
    const [role,SetRole]=useState("User");
    const [image,setImage]=useState("");
    const [previewImage,setPreviewImage]=useState("");
    const handleUploadImage=(event)=>{
      if(event.target && event.target.files && event.target.files[0]){
        setPreviewImage(URL.createObjectURL(event.target.files[0]));
        setImage(event.target.files[0]);
      }
      else{

      }
      
      
    }
    const handSubmitCreateUser= async ()=>{
      // const data={
      //   email:email,
      //   password:password,
      //   username:username,
      //   role:role,
      //   userImage:image
      // }
      const data=new FormData();
      data.append('email',email);
      data.append('password',password);
      data.append('username',password);
      data.append('role',role);
      data.append('userImage',image);
      let res=await axios.post('http://localhost:8081/api/v1/participant',data);
      console.log(">>> check res:",res);
    }
  
    return (
      <>
        {/* <Button variant="primary" onClick={handleShow}  >
          Launch demo modal
        </Button> */}
  
        <Modal show={show} onHide={handleClose} size="xl" backdrop="static" className="model-add-user">
          <Modal.Header closeButton>
            <Modal.Title> Add new user</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
      <Row className="mb-3">
        <Form.Group as={Col} >
          <Form.Label>Email</Form.Label>
          <Form.Control type="email"
           placeholder="Enter email"
           onChange={(event)=>setEmail(event.target.value)}
           value={email}
            />
        </Form.Group>

        <Form.Group as={Col} >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"
           placeholder="Password"
           value={password}
           onChange={(event)=>{setPassword(event.target.value)}}
            />
        </Form.Group>
      </Row>

     

      <Row className="mb-3">
        <Form.Group as={Col} >
          <Form.Label>Username</Form.Label>
          <Form.Control type="text"
           placeholder="Username"
           value={username}
           onChange={(event)=>setUsername(event.target.value)}
            />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Role</Form.Label>
          <Form.Select  
          onChange={(event)=>{SetRole(event.target.value)}}
          value={role}
          >
            <option value="USER">USER</option>
            <option value="ADMIN">ADMIN</option>
          </Form.Select>
        </Form.Group>
        </Row>

        <Row className="mb-3">
        <Form.Group as={Col} >
          <Form.Label className='label-upload' htmlFor="lableUpload"><FcPlus />Upload file image</Form.Label>
          <Form.Control type="file"
           id="lableUpload"
           onChange={(event)=>{handleUploadImage(event)}}
            hidden/>
        </Form.Group>
       
      </Row>
      <Row className="mb-1">
      <Form.Group as={Col}  className='img-preview'>
        {previewImage ? <img src={previewImage}></img> : <span>Preview image</span> }
           
        </Form.Group>
      </Row>

    </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{handSubmitCreateUser()}}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
};

export default ModelCreateUser;