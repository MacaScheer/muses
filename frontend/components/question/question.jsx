import React from 'react';
import { Link } from 'react-router-dom';
import AnswerIndexContainer from '../answers/answer_index_container';
import { withRouter } from "react-router";

class Question extends React.Component{

    componentDidMount(){
        let id = this.props.match.params.question_id
        this.props.fetchQuestion(id)
    }

    render() {
        let question = '';
        let answers = []; 

        if (this.props.question !== undefined)
         question = this.props.question.question
        answers = this.props.answers
        
        return (<div>
            <Link to='/'>All Questions</Link>
            <div className="card"><h3>{question}</h3></div>
         <AnswerIndexContainer answers={answers}/>
        </div>)
    }
}
    

export default withRouter(Question);