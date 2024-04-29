import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {deleteUser} from '../../../services/apiService';
import { toast } from 'react-toastify';
function ModelDeleteUser(props) {
  const {show, setShow, dataDelete, fetchListUsers} = props;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleSubmitDeleteUser= async()=>{
    let data= await deleteUser(dataDelete.id);
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
     

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete the User?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete this user.email=<b>{dataDelete && dataDelete.email? dataDelete.email : ""}</b></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleSubmitDeleteUser()}}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModelDeleteUser;