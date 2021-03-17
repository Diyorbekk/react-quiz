import React from 'react'
import classes from './FinishedQuiz.module.css'

function FinishedQuiz(props) {
    return(
        <div className={classes.FinishedQuiz}>
            <ul>
                {
                    props.quiz.map((quizItem, index) => {
                        const cls = [
                            'fa',
                            props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                            classes[props.results[quizItem.id]]
                        ]

                        return(
                            <li
                               key={index}
                            >
                                <strong>{index + 1}</strong>.&nbsp;
                                {quizItem.question}
                                <i className={cls.join(' ')}/>
                            </li>
                        )
                    } )
                }
                {/*<li>*/}
                {/*    <strong>1. </strong>*/}
                {/*    GGG*/}
                {/*    <i className={'fa fa-times ' + classes.error} />*/}
                {/*</li>*/}

                {/*<li>*/}
                {/*    <strong>2. </strong>*/}
                {/*    GGG*/}
                {/*    <i className={'fa fa-check ' + classes.success} />*/}
                {/*</li>*/}
            </ul>

            <p>
                To'g'ri javob 10 dan 4 tasi
            </p>
            <div>
                <button>Takrorlash</button>
            </div>
        </div>
    )
}

export default FinishedQuiz