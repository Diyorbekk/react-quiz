import classes from './Quiz.module.css'
import React, {Component} from "react";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";


class Quiz extends Component {
    state = {
        results: {}, // { [id]: 'success' : 'error' }
        isFinished: false,
        activeQuestion: 0,
        answerState: null, // { [id]: 'success' : 'error' }
        quiz: [
            {
                question: 'Osmoni rangi qanday?',
                rightAnswerID: 2,
                id: 1,
                answers: [
                    {text: 'Oq', id: 1},
                    {text: 'Moviy', id: 2},
                    {text: 'Qora', id: 3},
                    {text: 'Yashil', id: 4},
                ]
            },
            {
                question: 'O`zbekistonning poytaxti?',
                rightAnswerID: 3,
                id: 2,
                answers: [
                    {text: 'Samarqand', id: 1},
                    {text: 'Jizzax', id: 2},
                    {text: 'Toshkent', id: 3},
                    {text: 'Andijon', id: 4},
                ]
            }
        ]
    };

    onAnswerClickHandler = answerId => {
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];

            if (this.state.answerState[key] === 'success') {
                return
            }
        }


        const question = this.state.quiz[this.state.activeQuestion];
        const results = this.state.results;

        if (question.rightAnswerID === answerId) {
            if (!results[question.id]) {
                results[question.id] = 'success'
            }
            this.setState({
                answerState: {[answerId]: 'success'},
                results
            });

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }

                window.clearTimeout(timeout)
            }, 1000)


        } else {
            results[question.id] = 'error';
            this.setState({
                answerState: {[answerId]: 'error'},
                results
            });
        }


    };

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    retryHandler = () => {
        this.setState({
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
            results: {},
        })
    };

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Hamma savolarga javob bering</h1>
                    {
                        this.state.isFinished
                            ? <FinishedQuiz
                                results={this.state.results}
                                quiz={this.state.quiz}
                                onRetry={this.retryHandler}
                            />
                            :
                            <ActiveQuiz
                                answers={this.state.quiz[this.state.activeQuestion].answers}
                                question={this.state.quiz[this.state.activeQuestion].question}
                                onAnswerClick={this.onAnswerClickHandler}
                                quizLength={this.state.quiz.length}
                                answerNumber={this.state.activeQuestion + 1}
                                state={this.state.answerState}
                            />
                    }

                </div>
            </div>
        );
    }


}

export default Quiz;