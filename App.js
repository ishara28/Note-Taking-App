import React from "react";
import { AppLoading } from "expo";
import { Container, Text, Header } from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "react-native";
import Home from "./components/Home";
import Test from "./components/test/Test";
import Note from "./components/Note";
import HomeStackNavigator from "./routes/HomeStack";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container>
        <HomeStackNavigator />
      </Container>
    );
  }
}
