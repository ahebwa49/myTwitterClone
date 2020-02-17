// import React from "react";
import React, { Component, useState } from "react";

import {
  Button,
  Modal,
  Text,
  TouchableHighlight,
  View,
  Alert
} from "react-native";

class PopUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: "start",
      title: "Welcome to Quizz",
      text: "This is a quiz application built using ReactJS.",
      buttonText: "Start the quiz"
    };

    this.popupHandle = this.popupHandle.bind(this);
  }

  popupHandle() {
    let { time } = this.state;

    if (time === "start") {
      this.setState({
        time: "end",
        title: "Congratulations!",
        buttonText: "Restart"
      });

      this.props.startQuiz();
    } else {
      location.reload(); // restart the application
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      text:
        "You have completed the quiz. <br /> You got: <strong>" +
        this.props.score +
        "</strong> out of <strong>" +
        this.props.total +
        "</strong> questions right."
    });
  }

  render() {
    let { title, text, buttonText } = this.state;

    return (
     
      <View style={{ marginTop: 22 }}>
        <Modal animationType="slide" transparent={false}>
          <View style={{ marginTop: 22 }}>
            <View>
              <Text style={{ textAlign: "center" }}>{title}</Text>

              <Text style={{ textAlign: "center", marginTop: 50, marginBottom: 40 }}>{text}</Text>
              <Button
                onPress={this.popupHandle}
                title={buttonText}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

// const styles = {
//   popupContainer: {
//     // position: "fixed",
//     // top: 0,
//     // left: 0,
//     // bottom: 0,
//     // right: 0,
//     backgroundColor: "aqua",
//     zIndex: 1,
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   fancyButton: {
//     color: "#fff",
//     display: "inline-block",
//     fontSize: "18px",
//     fontWeight: "600",
//     width: "100%",
//     // textTransform: "uppercase",
//     transition: "color .2s ease, background-color .2s ease"
//   },
//   popup: {
//     textAlign: "center",
//     backgroundColor: "#fff",
//     // borderRadius: "10px",
//     overflow: "hidden"
//   }
// };

export default PopUp;
