import React from "react";
import { createStackNavigator } from "react-navigation-stack";

import Login from "../screens/Login";
import Register from "../screens/Register";
import Forgot from "../screens/Forgot";

import Signature from "../screens/Signature";

export default createStackNavigator(
  {
    Login,
    Register,
    Forgot,
    Signature
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);
