import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import CameraStackNavigator from "../CameraStackNavigator"
import Landing from "../screens/Landing/index"
import AddItems from "../screens/AddItems/context"
import CaptureItems from "../screens/CaptureItems/context"
/* import SearchHeader from "../header/SearchHeader" */
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";



const CustomStackNavigator = createStackNavigator(
  {
    Home: Landing,


    AddItems: {
      screen: AddItems,
    },

    CaptureItems: CaptureItems
  },
 /*  {
    initialRouteName: Home,
  }
   */
  {
    navigationOptions:{
      header: null,
    }
  }
);



export default CustomStackNavigator;