import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

class Answers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAnswered: false
    };

    this.checkAnswer = this.checkAnswer.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    const { ids } = props;
    return { ids };
  }

  checkAnswer(answer) {
    const { correct, increaseScore } = this.props;
    const { ids } = this.state;

    let updatedIds = ids;

    if (answer === correct) {
      updatedIds[answer - 1] = 100;
      increaseScore();
    } else {
      updatedIds[answer - 1] = -100;
    }

    this.setState({
      ids: updatedIds
    });

    this.props.showButton();
  }

  render() {
    let { answers } = this.props;
    let { ids } = this.state;

    // let transition = {
    //   transitionName: "example",
    //   transitionEnterTimeout: 500,
    //   transitionLeaveTimeout: 300
    // };

    return (
      <View style={styles.container}>
        <View style={styles.button}>
          <Text>A </Text>
          <Button
            onPress={() => this.checkAnswer(ids[0])}
            title={answers[0]}
            id={ids[0]}
            color={ids[0] < 0 ? "red" : ids[0] > 10 ? "green" : ""}
          />
        </View>

        <View style={styles.button}>
          <Text>B </Text>
          <Button
            onPress={() => this.checkAnswer(ids[1])}
            title={answers[1]}
            id={ids[1]}
            color={ids[1] < 0 ? "red" : ids[1] > 10 ? "green" : ""}
          />
        </View>

        <View style={styles.button}>
          <Text>C </Text>
          <Button
            onPress={() => this.checkAnswer(ids[2])}
            title={answers[2]}
            id={ids[2]}
            color={ids[2] < 0 ? "red" : ids[2] > 10 ? "green" : ""}
          />
        </View>

        <View style={styles.button}>
          <Text>D </Text>
          <Button
            onPress={() => this.checkAnswer(ids[3])}
            title={answers[3]}
            id={ids[3]}
            color={ids[3] < 0 ? "red" : ids[3] > 10 ? "green" : ""}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    color: "red"
  },
  container: {
    flex: 1,
    justifyContent: "center"
  }
});
export default Answers;
