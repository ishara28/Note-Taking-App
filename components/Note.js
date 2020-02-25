import React, { Component } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

export class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      noteText: ""
    };
  }

  render() {
    return (
      <View>
        <Text>Note Component</Text>
      </View>
    );
  }
}

export default Note;
