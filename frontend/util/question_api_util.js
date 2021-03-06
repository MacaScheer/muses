export const fetchQuestions = query =>
  $.ajax({
    method: "GET",
    url: `/api/questions?${query ? $.param(query) : ""}`
  });

export const fetchQuestion = id =>
  $.ajax({
    method: "GET",
    url: `/api/questions/${id}`
  });

export const createQuestion = question =>
  $.ajax({
    method: "POST",
    url: "/api/questions",
    data: { question: question }
  });

export const updateQuestion = question =>
  $.ajax({
    method: "PATCH",
    url: `/api/questions/${question.id}`,
    data: { question: question }
  });

export const deleteQuestion = questionId =>
  $.ajax({
    method: "DELETE",
    url: `api/questions/${questionId}`
  });

export const filterQuestions = (questions, query) => {
  let re = new RegExp(query, "i");

  for (let k in questions) {
    let question = questions[k].question;
    if (!re.test(question)) {
      delete questions[k];
    }
  }

  return questions;
};
