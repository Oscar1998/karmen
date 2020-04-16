import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Header, Picker, Image, TouchableOpacity,ScrollView } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

import ClassicButton from '../../reusables/ClassicButton';
import COLORS from '../../reusables/Colors';
import Cube from '../../reusables/Cube';
import Grid from '../../reusables/Grid';

//todo: make reusable grid and cube.
export default class CausesSelection extends Component {
  constructor(){
    super();
    this.state ={
      community:false,
      poverty:false,
      animals:false,
      homeless:false,
      food:false,
      education:false,
      health:false,
      equality:false,
      religious:false,
      crisis:false,
      arts:false,
      energy:false,
      conservation:false,
      peace:false,
      refugees:false

    }
    this.causeSelected = this.causeSelected.bind(this)
  }
  
  causeSelected(name){
    switch(name){
      case 'community': this.setState({community:!this.state.community}) 
      break;
      case 'poverty': this.setState({poverty:!this.state.poverty})
      break;
      case 'animals': this.setState({animals:!this.state.animals})
      break;
      case 'homeless': this.setState({homeless:!this.state.homeless})
      break;
      case 'food': this.setState({food:!this.state.food})
      break;
      case 'education': this.setState({education:!this.state.education})
      break;
      case 'health': this.setState({health:!this.state.health})
      break;
      case 'equality': this.setState({equality:!this.state.equality})
      break;
      case 'religious': this.setState({religious:!this.state.religious})
      break;
      case 'crisis': this.setState({crisis:!this.state.crisis})
      break;
      case 'arts': this.setState({arts:!this.state.arts})
      break;
      case 'energy': this.setState({energy:!this.state.energy})
      break;
      case 'conservation': this.setState({conservation:!this.state.conservation})
      break;
      case 'peace': this.setState({peace:!this.state.peace})
      break;
      case 'refugees': this.setState({refugees:!this.state.refugees})
      break;
    }
  }

 render(){
    return (
      <ScrollView>
      <View style={styles.container}> 
     
            <Text style={{color:'#01b0b0',fontSize:25, marginTop: 20, textAlign: 'center'}}>What causes do you care about?</Text>
            <Grid changeState={this.causeSelected} style={{marginTop: 200}}></Grid>
            <View style={{flexDirection:'row',margin:5,marginBottom:20}}>
            <ClassicButton
                    
                    textOnButton="Update"
                    lightEndColor={COLORS.lightGreen} darkEndColor={COLORS.darkGreen}
                    navigation={this.props.navigation}
                    page="Feed"
                ></ClassicButton>
            </View>
       
         </View>
         </ScrollView>
      
    );
    }
}

const styles = StyleSheet.create({
  container: {
    marginTop:0,
    elevation:10,
    alignItems: 'center',
    justifyContent: 'center',
    flex:1
  }
 
  
})



