import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export class NewComp extends Component {
  render() {
    return (
      <TouchableOpacity style={{ ...styles.item, flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{this.props.item.title}</Text>
        </View>
        <TouchableOpacity
          onPress={() => this.props.handleDelete(this.props.item.id)}
        >
          <Ionicons name="md-remove-circle" size={25} />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "violet",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 18
  }
});

export default NewComp;
