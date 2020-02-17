import * as React from "react";
import { Button, View, Text } from "react-native";
import PopUp from "./PopUp";

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
      displayPopup: "flex",
      modalVisible: true
    };
    // this.nextQuestion = this.nextQuestion.bind(this);
    // this.handleShowButton = this.handleShowButton.bind(this);
    this.handleStartQuiz = this.handleStartQuiz.bind(this);
    // this.handleIncreaseScore = this.handleIncreaseScore.bind(this);
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

  handleStartQuiz() {
    this.setState({
      displayPopup: "none",
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
      modalVisible
    } = this.state;

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {/* <Text>I am the feed :)</Text>
        <Button
          onPress={() => this.props.navigation.navigate("Details")}
          title="Go to detailed tweet"
        /> */}
        {modalVisible && (
          <PopUp score={score} total={total} startQuiz={this.handleStartQuiz} />
        )}
        <View>
          <Text>
            Question {nr}/{total}
          </Text>
          <Text>{question}</Text>
        </View>
      </View>
    );
  }
}

export default Main;
