import React, { Component } from "react";

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

    this.state = {};

    this.popupHandle = this.popupHandle.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    const { title, text, buttonText } = props;
    return { title, text, buttonText };
  }

  popupHandle() {
    this.props.startQuiz();
  }

  render() {
    let { title, text, buttonText, score } = this.state;

    return (
      <View style={{ marginTop: 22 }}>
        <Modal animationType="slide" transparent={false}>
          <View style={{ marginTop: 22 }}>
            <View>
              <Text style={{ textAlign: "center" }}>{title}</Text>

              <Text
                style={{ textAlign: "center", marginTop: 50, marginBottom: 40 }}
              >
                {text}
              </Text>
              <Button onPress={this.popupHandle} title={buttonText} />
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
