import * as APIUtil from "../util/question_api_util";

export const RECEIVE_ALL_QUESTIONS = "RECEIVE_ALL_QUESTIONS";
export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const RECEIVE_QUESTION_ERRORS = "RECEIVE_QUESTION_ERRORS";
export const FILTERED_QUESTIONS = "FILTERED_QUESTIONS";

export const receiveAllQuestions = questions => ({
  type: RECEIVE_ALL_QUESTIONS,
  questions: questions
});

export const receiveQuestion = payload => ({
  type: RECEIVE_QUESTION,
  payload
});

export const receiveQuestionErrors = errors => {
  return {
    type: RECEIVE_QUESTION_ERRORS,
    errors
  };
};

export const filteredQuestions = questions => ({
  type: FILTERED_QUESTIONS,
  question: questions
});

export const fetchQuestions = prms => dispatch =>
  APIUtil.fetchQuestions(prms).then(
    questions => dispatch(receiveAllQuestions(questions)),
    err => dispatch(receiveQuestionErrors(err))
  );

export const fetchQuestion = id => dispatch =>
  APIUtil.fetchQuestion(id).then(
    question => dispatch(receiveQuestion(question)),
    err => dispatch(receiveQuestionErrors(err))
  );

export const deleteQuestion = id => dispatch =>
  APIUtil.deleteQuestion(id).then(
    question => dispatch(receiveAllQuestions(question)),
    err => dispatch(receiveQuestionErrors(err))
  );

export const createQuestion = newQuestion => dispatch => {
  return APIUtil.createQuestion(newQuestion).then(
    retQuestion => dispatch(receiveQuestion(retQuestion)),
    err => dispatch(receiveQuestionErrors(err))
  );
};

export const updateQuestion = updatedQuestion => dispatch => {
  return APIUtil.updateQuestion(updatedQuestion).then(
    retQuestion => dispatch(receiveQuestion(retQuestion)),
    err => dispatch(receiveQuestionErrors(err))
  );
};

export const searchQuestion = (question, query) => dispatch =>
  APIUtil.fetchQuestions().then(
    questions =>
      dispatch(receiveAllQuestions(APIUtil.filterQuestions(questions, query))),
    err => dispatch(receiveQuestionErrors(err))
  );
