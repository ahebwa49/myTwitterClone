import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleEmail = text => {
    this.setState({ email: text });
  };
  handlePassword = text => {
    this.setState({ password: text });
  };

  login = (email, pass) => {};

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Login to my App</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={this.handleEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={this.handlePassword}
        />
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.userBtn}
            onPress={() => this.login(this.state.email, this.state.password)}
          >
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.userBtn}>
            <Text style={styles.btnText}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    backgroundColor: "#164C60"
  },
  text: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 15
  },
  input: {
    width: "90%",
    backgroundColor: "white",
    padding: 12,
    borderRadius: 4,
    marginBottom: 10
  },
  userBtn: {
    backgroundColor: "#4BBBB5",
    padding: 15,
    width: "45%"
  },
  btnText: {
    fontSize: 18,
    textAlign: "center"
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%"
  }
});
