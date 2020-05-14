import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import OverviewStack from "./Overview";
import Settings from "../screens/Settings";
import DistRegister from "../screens/DistRegister";
import PosRegister from "../screens/PosRegister";


export default createDrawerNavigator({
  OverviewStack,
  Settings,
  DistRegister,
  PosRegister,
 

});
