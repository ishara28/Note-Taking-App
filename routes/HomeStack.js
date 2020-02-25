import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../components/Home";
import Note from "../components/Note";

const screens = {
  Home: {
    screen: Home
  },
  Note: {
    screen: Note
  }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
