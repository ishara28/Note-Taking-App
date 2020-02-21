import React, { Component } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Modal,
  TouchableHighlight,
  Alert,
  TouchableOpacity
} from "react-native";
import Constants from "expo-constants";
import uuid from "uuid/v1";
import { Ionicons } from "@expo/vector-icons";
import NewComp from "./newComp";

export class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          id: 1,
          title: "First Item"
        },
        {
          id: 2,
          title: "Second Item"
        },
        {
          id: 3,
          title: "Third Item"
        }
      ],
      modalVisible: false,
      newInput: ""
    };
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  handleModalClick = () => {
    this.setState(
      {
        data: [...this.state.data, { id: uuid(), title: this.state.newInput }]
      },
      this.setState({
        newInput: ""
      })
    );
  };

  handleDelete = id => {
    this.setState(state => {
      return {
        data: this.state.data.filter(function(item) {
          return item.id != id;
        })
      };
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <NewComp item={item} handleDelete={this.handleDelete} />
          )}
          keyExtractor={item => item.id}
        />

        <View style={{ marginTop: 22 }}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >
            <View style={{ marginTop: 22 }}>
              <View>
                <TextInput
                  placeholder="ENTER"
                  onChangeText={text => {
                    this.setState({
                      newInput: text
                    });
                  }}
                  value={this.state.newInput}
                />
                <Button title="click" onPress={this.handleModalClick} />

                <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}
                >
                  <Ionicons name="md-done-all" size={50} color="red" />
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
          <TouchableOpacity
            onPress={() => {
              this.setModalVisible(true);
            }}
          >
            <View style={{ alignItems: "flex-end", marginRight: 10 }}>
              <Ionicons name="md-add-circle" size={100} color="violet" />
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
  item: {
    backgroundColor: "violet",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 18
  },
  input: {
    borderWidth: 2
  }
});

export default Test;
