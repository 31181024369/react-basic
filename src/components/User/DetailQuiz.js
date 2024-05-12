import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getDataQuiz } from '../../services/apiService';
import _ from 'lodash';
import './DetailQuiz.scss';
import Question from './Question';
const DetailQuiz = () => {

    const params=useParams();

    const location=useLocation();
    console.log(location);
    const quizId=params.id;
    const [dataQuiz,setDataQuiz] = useState([]);
    const [index,setIndex] = useState(0);
    useEffect(()=>{
        fetchQuestions();
    },[quizId]);
    const fetchQuestions=async ()=>{
        let res= await getDataQuiz(quizId);
        if(res && res.EC===0){
            let raw=res.DT;
            let data=_.chain(raw)
            .groupBy("id")
            .map((value, key)=>{
                let answers=[];
                let questionDescription,image=null;

                value.forEach((item,index)=>{
                    if(index===0){
                        questionDescription=item.description;
                        image=item.image;
                    }
                    item.answers.isSelected=false;
                    answers.push(item.answers);
                })
                return { questionId:key, answers, questionDescription, image}
            }).value();
            console.log(data);
            setDataQuiz(data);
        }
        console.log('>>> check question:',res);
    }
    const handlePrev=()=>{
        if(index-1<0) return;
        setIndex(index-1);

    }
    const handleNext=()=>{
        if(dataQuiz && dataQuiz.length>index+1){
            setIndex(index+1);
        }

    }
    const handleCheckbox=(answerId,questionId)=>{
        let dataQuizClone=_.cloneDeep(dataQuiz);
        let question=dataQuizClone.find(item=>+item.questionId===+questionId);
        if(question && question.answers){
            let b=question.answers.map(item=>{
                if(+item.id===+answerId){
                    
                    item.isSelected=!item.isSelected;
                }
                return item;
            })
            question.answers=b;
        }
        let index=dataQuizClone.findIndex(item=> +item.questionId===+questionId);
        if(index>-1){
            dataQuizClone[index]=question;
            setDataQuiz(dataQuizClone);
        }

    }
    return (
        <div className="detail-quiz-container">
            <div className='left-content'>
                <div className='title'>
                    Quiz {quizId} : {location?.state?.quizTitle}
                </div>
                <hr />
                <div className='q-body'>

                </div>
                <div className='q-content'>
                    <Question 
                    index={index}
                    handleCheckbox={handleCheckbox}
                    data={ 
                        dataQuiz && dataQuiz.length>0
                        ?
                         dataQuiz[index]
                         :[]}></Question>
                </div>
                <div className='footed'>
                    <button 
                    className='btn btn-primary ml-3'
                    onClick={()=>{handlePrev()}}
                    >Prev</button>
                    <button 
                    className=' btn btn-secondary'
                    onClick={()=>{handleNext()}}
                    >Next</button>
                </div>
            </div>
            <div className='right-content'>
                count down
            </div>
        </div>
    );
};

export default DetailQuiz;