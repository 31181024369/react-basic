import React, { useState } from 'react';
import './MangageQuiz.scss';
import Select from 'react-select';
import {postCreateNewQuiz} from '../../../../services/apiService';
const options = [
    { value: 'EASY', label: 'EASY' },
    { value: 'MEDIUM', label: 'MEDIUM' },
    { value: 'HARD', label: 'HARD' },
  ];
const MangageQuiz = () => {
    const [name,setName]=useState('');
    const [description,setDescription]=useState('');
    const [type,setType]=useState('EASY');
    const [image,setImage]=useState(null);
    const handleChangeFile=(event)=>{
        if(event.target && event.target.files && event.target.files[0]){
            setImage(event.target.files[0]);
          }
    }
    const handleSubmit= async()=>{
        let res= await postCreateNewQuiz(description,name,type?.value,image);
        console.log('res:',res);
    }
    return (
        <div className='quiz-container'>
            <div className='title'>
                Manage Quizzes
            </div>
            <hr></hr>
            <div className='add-new'>
                <fieldset className='border rounded-3 p-3'>
                    <legend className='float-none w-auto px-3' >Add new Quiz</legend>
                    <div className="form-floating mb-3">
                        <input type="text"
                         class="form-control"
                          placeholder="your quiz name"
                          value={name}
                          onChange={(event)=>{setName(event.target.value)}}
                           />
                        <label >Name</label>
                    </div>
                    <div className="form-floating">
                        <input type="text"
                         class="form-control"
                          placeholder="description"
                          value={description}
                          onChange={(event)=>setDescription(event.target.value)}
                           />
                        <label >Description</label>
                    </div>
                    <div className='my-3'>
                    <Select
                        defaultValue={type}
                        onChange={setType}
                        options={options}
                        placeholder={"Quiz type..."}
      />
                    </div>
                    <div className='more-actions form-group'>
                        <label className='mb-1'>Upload Image</label>
                        <input type='file'
                         className='form-control'
                         onChange={(event)=>{ handleChangeFile(event)}}
                          />
                    </div>
                    <div className='mt-3'>
                        <button
                        onClick={()=>handleSubmit()}
                        className='btn btn-warning'>Save</button>
                    </div>
                </fieldset>
            </div>
        </div>
    );
};

export default MangageQuiz;