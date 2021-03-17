import React from 'react'
import classes from './ActiveQuiz.module.css'
import AnswersList from "./AnswersList/AnswersList";

function ActiveQuiz(props) {
    return(
    <div className={classes.ActiveQuiz}>
        <p>
            <span>
                <strong>{props.answerNumber}.</strong>&nbsp;
                {props.question}
            </span>

            <small>{ props.quizLength} dan {props.answerNumber} tasi </small>
        </p>

       <AnswersList
            state={props.state}
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
       />
    </div>
    )
}

export default ActiveQuiz