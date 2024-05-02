import { useState, useEffect } from "react";
import Navibar2 from "../component/Navibar2";
import Footer from "../component/Footer";
import Style from "./QuizCreatePage.module.css";

const QuizCreatePage = () => {
  const [questions, setQuestions] = useState([
    { question: "", answers: ["", "", "", ""], correct: "" },
  ]);
  const [timeLimit, setTimeLimit] = useState({ minutes: 0, seconds: 0 });
  const [title, setTitle] = useState("");
  const [createdQuizzes, setCreatedQuizzes] = useState([]);
  const [numQuestions, setNumQuestions] = useState(1);
  const [category, setCategory] = useState(""); // Add this line

  const handleQuestionChange = (e, index) => {
    const newQuestions = [...questions];
    newQuestions[index].question = e.target.value;
    setQuestions(newQuestions);
  };

  const handleAnswerChange = (e, questionIndex, answerIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].answers[answerIndex] = e.target.value;
    setQuestions(newQuestions);
  };

  const handleCorrectChange = (e, index) => {
    const newQuestions = [...questions];
    newQuestions[index].correct = e.target.value;
    setQuestions(newQuestions);
  };

  const handleTimeChange = (e, field) => {
    setTimeLimit({ ...timeLimit, [field]: e.target.value });
  };

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { question: "", answers: ["", "", "", ""], correct: "" },
    ]);
    setNumQuestions(numQuestions + 1); // Update the number of questions

    // Create the questionContainer element
    const questionContainer = document.createElement(Style.quiz_page_align);
    questionContainer.classList.add("add-questions");

    // Create the question number element
    const questionNumber = document.createElement(Style.quiz_page_align);
    questionNumber.classList.add(Style.question_number);
    const questionNumberText = document.createTextNode(
      questions.length + 1 + " Question"
    );
    questionNumber.appendChild(questionNumberText);

    // Append the question number and question image to the questionContainer element
    //questionContainer.appendChild(questionNumber);
    //questionContainer.appendChild(questionImage);

    // Append the questionContainer element to the question-container element in the HTML
    //document.getElementById("question-container").appendChild(questionContainer);
  };

  const saveQuiz = async () => {
    try {
      // Retrieve JWT token from local storage
      const token = localStorage.getItem("token");
      console.log("Token:", token);

      // Send JWT token in the request headers
      const res = await fetch("http://localhost:8000/quizzes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include JWT token in the headers
        },
        body: JSON.stringify({ title, questions, timeLimit, category }), // Include category here
      });

      const data = await res.json();
      console.log("Quiz saved successfully:", data);

      // Update state to include new quiz
      setCreatedQuizzes((prevQuizzes) => [...prevQuizzes, data]);

      // Clear input fields and reset state for the next quiz creation
      setTitle("");
      setQuestions([{ question: "", answers: ["", "", "", ""], correct: "" }]);
      setTimeLimit({ minutes: 0, seconds: 0 });
    } catch (error) {
      console.error("Error saving quiz:", error.message);
    }
  };

  return (
    <div>
      <Navibar2 />
      <div className={Style.quiz_create_page}>
        <div className={Style.quiz_page_align}>
          <div className={Style.category_section}>
            <div className={Style.category_area}>
              <h1 className={Style.category_text}>Select Category</h1>
              <select
                className={Style.drop_menu}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {" "}
                {/* Add this line */}
                <option value="">--Please choose a Category--</option>
                <option value="Math">Math</option>
                <option value="Information technology">
                  Information technology
                </option>
                <option value="Science">Science</option>
                <option value="History">History</option>
                <option value="Business">Business</option>
                <option value="Finance">Finance</option>
              </select>
            </div>
          </div>
          <div className={Style.create_quiz_section}>
            <h1 className={Style.create_quiz_text}>Create Your Quiz</h1>

            <div className={Style.quizTitle_area}>
              <h2 className={Style.create_quiz_quiztitle}>Enter Quiz Title</h2>
              <input
                className={Style.quizTitle_box}
                type="text"
                placeholder="Enter Quiz Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {questions.map((question, questionIndex) => (
              <div key={questionIndex}>
                <div className={Style.question_area}>
                  <h2 className={Style.create_quiz_minititle}>
                    Enter Questions Here
                  </h2>

                  <div className="add-questions">
                    <h1 className={Style.question_number}>
                      {" "}
                      Question - {questionIndex + 1}
                    </h1>
                  </div>
                  <input
                    className={Style.q_box}
                    type="text"
                    placeholder="Start typing your question....."
                    value={question.question}
                    onChange={(e) => handleQuestionChange(e, questionIndex)}
                  />
                </div>

                <div className={Style.answer_area}>
                  {question.answers.map((answer, answerIndex) => (
                    <div className={Style.answer_section} key={answerIndex}>
                      <div className="checkBoxes">
                        <input
                          type="checkbox"
                          className={Style.check_boxes}
                          id={`answer${answerIndex}`}
                          name={`answer${answerIndex}`}
                          value={`Answer${answerIndex}`}
                          checked={question.correct === `Answer${answerIndex}`}
                          onChange={(e) =>
                            handleCorrectChange(e, questionIndex)
                          }
                        />
                        <label htmlFor={`answer${answerIndex}`}></label>
                        <br />
                      </div>

                      {/* Input Field for Answer */}
                      <div className="answerInput">
                        <input
                          className={Style.answer_box}
                          type="text"
                          placeholder={`Add answer ${answerIndex + 1}`}
                          value={answer}
                          onChange={(e) =>
                            handleAnswerChange(e, questionIndex, answerIndex)
                          }
                        />
                      </div>
                    </div>
                  ))}

                  {questionIndex === questions.length - 1 && (
                    <div className={Style.button_container2}>
                      <button
                        className={Style.add_button}
                        type="button"
                        onClick={addQuestion}
                      >
                        + Question{" "}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className={Style.right_section}>
            <div>
              <div className={Style.time_set_section}>
                <h1 className={Style.info}>Set Time limit</h1>
                <h2 className={Style.time_text_hrs}>min</h2>
                <input
                  className={Style.time_box}
                  type="number"
                  placeholder="hrs"
                  value={timeLimit.minutes}
                  onChange={(e) => handleTimeChange(e, "minutes")}
                />
                <h2 className={Style.time_text_min}>sec</h2>
                <input
                  className={Style.time_box}
                  type="number"
                  placeholder="min"
                  value={timeLimit.seconds}
                  onChange={(e) => handleTimeChange(e, "seconds")}
                />
              </div>
            </div>

            <div className={Style.num_question_section}>
              <h1 className={Style.num_question_text}>No. of questions</h1>
              <input
                className={Style.num_question_box}
                type="number"
                value={numQuestions}
                readOnly
              />

              <div className={Style.save_button_container}>
                <button
                  type="button"
                  className={Style.save_button}
                  onClick={saveQuiz}
                >
                  Save
                </button>
              </div>
              <div className={Style.delete_button_container}>
                <button type="button" className={Style.delete_button}>
                  <svg
                    className={Style.deleteIcon}
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="100"
                    viewBox="0 0 32 32"
                    fill="#949494"
                  >
                    <path d="M 15 4 C 14.476563 4 13.941406 4.183594 13.5625 4.5625 C 13.183594 4.941406 13 5.476563 13 6 L 13 7 L 7 7 L 7 9 L 8 9 L 8 25 C 8 26.644531 9.355469 28 11 28 L 23 28 C 24.644531 28 26 26.644531 26 25 L 26 9 L 27 9 L 27 7 L 21 7 L 21 6 C 21 5.476563 20.816406 4.941406 20.4375 4.5625 C 20.058594 4.183594 19.523438 4 19 4 Z M 15 6 L 19 6 L 19 7 L 15 7 Z M 10 9 L 24 9 L 24 25 C 24 25.554688 23.554688 26 23 26 L 11 26 C 10.445313 26 10 25.554688 10 25 Z M 12 12 L 12 23 L 14 23 L 14 12 Z M 16 12 L 16 23 L 18 23 L 18 12 Z M 20 12 L 20 23 L 22 23 L 22 12 Z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default QuizCreatePage;
