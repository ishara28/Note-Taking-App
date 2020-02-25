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
import Category from "./Category";

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: [
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
        category: [
          ...this.state.category,
          { id: uuid(), title: this.state.newInput }
        ]
      },
      this.setState({
        newInput: ""
      })
    );
  };

  handleDelete = id => {
    this.setState(state => {
      return {
        category: this.state.category.filter(function(item) {
          return item.id != id;
        })
      };
    });
  };

  pressHandlerNavigation = () => {
    this.props.navigation.navigate("Note");
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.category}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={this.pressHandlerNavigation}>
              <Category
                item={item}
                handleDelete={this.handleDelete}
                pressHandlerNavigation={this.pressHandlerNavigation}
              />
            </TouchableOpacity>
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
  input: {
    borderWidth: 2
  }
});

export default Home;
