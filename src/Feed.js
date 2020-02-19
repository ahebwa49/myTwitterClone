import * as React from "react";
import { Button, View, Text } from "react-native";
import PopUp from "./PopUp";
import Answers from "./Answers";
import data from "./data/data";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nr: 0,
      total: data.length,
      showButton: false,
      questionAnswered: false,
      score: 0,
      modalVisible: true,
      ids: [1, 2, 3, 4],
      title: "Welcome to Quizz",
      text: "This is a quiz application built using ReactJS.",
      buttonText: "Start the quiz"
    };
    this.nextQuestion = this.nextQuestion.bind(this);
    this.handleShowButton = this.handleShowButton.bind(this);
    this.handleStartQuiz = this.handleStartQuiz.bind(this);
    this.handleIncreaseScore = this.handleIncreaseScore.bind(this);
  }

  componentWillMount() {
    let { nr } = this.state;
    this.pushData(nr);
  }

  pushData(nr) {
    this.setState({
      question: data[nr].question,
      answers: [
        data[nr].answers[0],
        data[nr].answers[1],
        data[nr].answers[2],
        data[nr].answers[3]
      ],
      correct: data[nr].correct,
      nr: this.state.nr + 1
    });
  }

  handleIncreaseScore() {
    this.setState({
      score: this.state.score + 1
    });
  }

  handleShowButton() {
    this.setState({
      showButton: true,
      questionAnswered: true
    });
  }

  handleIncreaseScore() {
    this.setState({
      score: this.state.score + 1
    });
  }

  nextQuestion() {
    let { nr, total, score } = this.state;

    if (nr === total) {
      this.setState({
        modalVisible: true,
        text: `You have completed the quiz \n You got: ${score}/${total} questions right`,
        title: "Congratulations!",
        buttonText: "Restart",
        ids: [1, 2, 3, 4]
      });
    } else {
      this.pushData(nr);
      this.setState({
        showButton: false,
        questionAnswered: false,
        ids: [1, 2, 3, 4]
      });
    }
  }

  handleStartQuiz() {
    this.setState({
      modalVisible: false,
      nr: 1
    });
  }

  render() {
    let {
      nr,
      total,
      question,
      answers,
      correct,
      showButton,
      questionAnswered,
      displayPopup,
      score,
      modalVisible,
      ids,
      title,
      text,
      buttonText
    } = this.state;

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {modalVisible && (
          <PopUp
            score={score}
            total={total}
            startQuiz={this.handleStartQuiz}
            title={title}
            buttonText={buttonText}
            text={text}
          />
        )}

        <Text>
          Question {nr}/{total}
        </Text>
        <Text>{question}</Text>
        <Answers
          answers={answers}
          correct={correct}
          showButton={this.handleShowButton}
          isAnswered={questionAnswered}
          increaseScore={this.handleIncreaseScore}
          ids={ids}
        />
        <View>
          {showButton ? (
            <Button
              onPress={this.nextQuestion}
              title={nr === total ? "Finish quiz" : "Next question"}
            />
          ) : null}
        </View>
      </View>
    );
  }
}

export default Main;
