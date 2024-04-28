import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { FcPlus } from "react-icons/fc";

import { toast } from 'react-toastify';
import { putUpdateUser } from '../../../services/apiService';
import _ from 'lodash';

const ModelUpdateUser = (props) => {
    const {show,setShow, fetchListUsers,dataUpdate,resetUpdateData}=props;
    const handleClose = () =>{
      setShow(false)
      setEmail("");
      setPassword("")
      setUsername("");
      setRole("User");
      setPreviewImage("");
      setImage("");
    //   resetUpdateData();

    };
    const handleShow = () => setShow(true);
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [username,setUsername]=useState("");
    const [role,setRole]=useState("User");
    const [image,setImage]=useState("");
    const [previewImage,setPreviewImage]=useState("");

    useEffect(()=>{
        if(!_.isEmpty(dataUpdate)){
            setUsername(dataUpdate.username);
            setEmail(dataUpdate.email);
            setRole(dataUpdate.role);
            setImage("");
            if(dataUpdate.image){
                setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`);
            }
        }
        
    },[dataUpdate]);
    const handleUploadImage=(event)=>{
      if(event.target && event.target.files && event.target.files[0]){
        setPreviewImage(URL.createObjectURL(event.target.files[0]));
        setImage(event.target.files[0]);
      }
      else{

      }
      
      
    }
    const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };


    const handSubmitUpdateUser= async ()=>{
     
      const isValidEmail=validateEmail(email);
      if(!isValidEmail){
        toast.error('invalid email');
        return ;
      }

     

      let data=await putUpdateUser(dataUpdate.id,username,role,image);
      if(data && data.EC===0){
        toast.success(data.EM);
        handleClose();
        await fetchListUsers();
      }
      if(data && data.EC!==0){
        toast.error(data.EM);
       
      }
    }
  
    return (
      <>
        <Modal show={show} onHide={handleClose} size="xl" backdrop="static" className="model-add-user">
          <Modal.Header closeButton>
            <Modal.Title> Update a user</Modal.Title>
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
           disabled
            />
        </Form.Group>

        <Form.Group as={Col} >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"
           placeholder="Password"
           value={password}
           onChange={(event)=>{setPassword(event.target.value)}}
           disabled
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
          onChange={(event)=>{setRole(event.target.value)}}
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
            <Button variant="primary" onClick={()=>{handSubmitUpdateUser()}}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
};

export default ModelUpdateUser;