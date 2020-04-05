import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Header, Picker, Image, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import ClassicButton from '../reusables/ClassicButton';
import COLORS from '../reusables/Colors';
//todo: make reusable grid and cube.
export default class UserCauses extends Component {
  constructor(){
    super();
    this.state={ button1:false, button2:false, button3:false, button4:false, button5:false, button6:false, button7:false, button8:false, button9:false
  }
  }
  
 render(){
    return (
      
      <View style={styles.container}> 
     
            <Text style={{color:'#01b0b0',fontSize:25}}>What causes do you care about?</Text>
            <View style= {{flexDirection:'row',marginTop:40}}>
            <TouchableOpacity  style={this.state.button1? styles.pressed : styles.unpressed}
              onPress ={() => this.setState({button1: !this.state.button1})}
              
            >
            </TouchableOpacity>
            <TouchableOpacity  style={this.state.button2? styles.pressed : styles.unpressed} 
              onPress ={() => this.setState({button2: !this.state.button2})}
              
            >
            </TouchableOpacity>
            <TouchableOpacity style={this.state.button3? styles.pressed : styles.unpressed}
              onPress ={() => this.setState({button3: !this.state.button3})}
              
            >
            </TouchableOpacity>
            </View>
            <View style= {{flexDirection:'row',marginTop:10}}>
            <TouchableOpacity  style={this.state.button4? styles.pressed : styles.unpressed}
              onPress ={() => this.setState({button4: !this.state.button4})}
              
            >
            </TouchableOpacity>
            <TouchableOpacity  style={this.state.button5? styles.pressed : styles.unpressed}
              onPress ={() => this.setState({button5: !this.state.button5})}
              
            >
            </TouchableOpacity>
            <TouchableOpacity  style={this.state.button6? styles.pressed : styles.unpressed}
              onPress ={() => this.setState({button6: !this.state.button6})}
              
            >
            </TouchableOpacity>
            </View>
            <View style= {{flexDirection:'row',marginTop:10,}}>
            <TouchableOpacity  style={this.state.button7? styles.pressed : styles.unpressed}
              onPress ={() => this.setState({button7: !this.state.button7})}
              
            >
            </TouchableOpacity>
            <TouchableOpacity  style={this.state.button8? styles.pressed : styles.unpressed}
              onPress ={() => this.setState({button8: !this.state.button8})}
              
            >
            </TouchableOpacity>
            <TouchableOpacity  style={this.state.button9? styles.pressed : styles.unpressed}
              onPress ={() => this.setState({button9: !this.state.button9})}
              
            >
            </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',marginTop:20}}>
            <ClassicButton
                    
                    textOnButton="Next"
                    lightEndColor={COLORS.lightGreen} darkEndColor={COLORS.darkGreen}
                    navigation={this.props.navigation}
                    page="Feed"
                ></ClassicButton>
            </View>
    
         </View>
      
    );
    }
}

const styles = StyleSheet.create({
  container: {
    marginTop:10,
    elevation:10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    height: 300,
    width: 300,
    
  
 },
  pressed:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    
    elevation: 24,
    height:100,
    width:100,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#01b0b0',
    borderRadius:3,
    marginLeft:10
  },
  unpressed:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    
    elevation: 24,
    height:100,
    width:100,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
    borderRadius:3,
    marginLeft:10
  },
 
  
})



