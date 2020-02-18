import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

class Answers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAnswered: false,
      classNames: ["", "", "", ""]
    };

    this.checkAnswer = this.checkAnswer.bind(this);
  }

  checkAnswer(e) {
    let { isAnswered } = this.props;

    if (!isAnswered) {
      let elem = e.currentTarget;
      console.log(elem);
      let { correct, increaseScore } = this.props;
      let answer = Number(elem.dataset.id);
      let updatedClassNames = this.state.classNames;

      if (answer === correct) {
        updatedClassNames[answer - 1] = "right";
        increaseScore();
      } else {
        updatedClassNames[answer - 1] = "wrong";
      }

      this.setState({
        classNames: updatedClassNames
      });

      this.props.showButton();
    }
  }

  //   shouldComponentUpdate() {
  //     this.setState({
  //       classNames: ["", "", "", ""]
  //     });
  //     return true;
  //   }

  render() {
    let { answers } = this.props;
    let { classNames } = this.state;

    // let transition = {
    //   transitionName: "example",
    //   transitionEnterTimeout: 500,
    //   transitionLeaveTimeout: 300
    // };

    return (
      <View style={styles.container}>
        <View style={styles.button}>
          <Text>A </Text>
          <Button onPress={this.checkAnswer} title={answers[0]} />
        </View>

        <View style={styles.button}>
          <Text>B </Text>
          <Button onPress={this.checkAnswer} title={answers[1]} />
        </View>

        <View style={styles.button}>
          <Text>C </Text>
          <Button onPress={this.checkAnswer} title={answers[2]} />
        </View>

        <View style={styles.button}>
          <Text>D </Text>
          <Button onPress={this.checkAnswer} title={answers[3]} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  },
  container: {
    flex: 1,
    justifyContent: "center"
  }
});
export default Answers;
