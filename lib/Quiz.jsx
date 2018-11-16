import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import "./styles.css";

class Quiz extends Component {
  constructor(props){
    super(props);
    this.state = {
      start: false,
      currentQuestionIndex: 0,
    }
    this.handleClick = this.handleClick.bind(this);
    this.start = this.start.bind(this);
  }

  componentDidMount() {
    let quiz = this.props.quiz;
    console.log(quiz)

  }

  start = () => {
  console.log("clicked")
    this.setState({start: true})
  }


   handleClick = (index) => {
   console.log(index);
	    const { step, questions, answers, totalQuestions } = this.state;
	    answers.push((index+1));
	    let updatedStep = step;

	    if(step < totalQuestions - 1){
	       updatedStep = step + 1;
	        this.setState({
	        step: updatedStep,
	        currentQuestion: questions[updatedStep],
	      })
	    }else{
	      this.setState({
	        endQuiz: true
	      })
	    }
	 }

  render() {
    let quiz = this.props.quiz;
    let questions = quiz.questions;
    console.log(questions[this.state.currentQuestionIndex])
    return (
      <div className="react-quiz-container">
        {!this.state.start &&
          <div>
            <h2>{quiz.quizTitle}</h2>
            <div>{quiz.questions.length} Questions</div>
            <div>
              <button onClick={() => this.start()}>Start Quiz</button>
            </div>
          </div>
        }

        {
          this.state.start && <Question currentQuestion={questions[this.state.currentQuestionIndex])} handleClick={this.handleClick}/>
        }
      </div>
    );
  }
}

Quiz.propTypes = {
  quiz: PropTypes.object
};

export default Quiz;
