import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Cube from "../reusables/Cube";
import { ScrollView } from "react-native-gesture-handler";
import { Icon } from 'react-native-elements'
export default class Grid extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        
        <View style={{}}>
      
        <View style={{ flexDirection: "row",  }}>
          <Cube iconName="users" iconType="font-awesome5" text="Community" />
          <Cube iconName="coins" iconType="font-awesome5" text="Poverty" />
          <Cube iconName="paw" iconType="font-awesome" text="Animals" />
        </View>

        <View style={{ flexDirection: "row",  }}>
        <Cube iconName="home" iconType="font-awesome5" text="Homeless" />
        <Cube iconName="hamburger" iconType="font-awesome5" text="Food" />
        <Cube iconName="graduation-cap" iconType="font-awesome5" text="Education" />
        </View>

        <View style={{ flexDirection: "row", }}>
        <Cube iconName="heart" iconType="font-awesome" text="Health" />
        <Cube iconName="equals" iconType="font-awesome5" text="Equality" />
        <Cube iconName="praying-hands" iconType="font-awesome5" text="Religious" />
        </View>

        <View style={{ flexDirection: "row", }}>
        <Cube iconName="exclamation-triangle" iconType="font-awesome5" text="Crisis" />
        <Cube iconName="palette" iconType="font-awesome5" text="Arts and Culture" />
        <Cube iconName="md-battery-charging" iconType="ionicon" text="Energy" />
        </View>

        <View style={{ flexDirection: "row", }}>
        <Cube iconName="leaf" iconType="font-awesome5" text="Conservation" />
        <Cube iconName="peace" iconType="material-community" text="Peace and Justice" />
        <Cube iconName="location-arrow" iconType="font-awesome5" text="Refugees" />
        </View>
    
      </View>
    );
  }
}
