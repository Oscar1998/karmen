import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import React, { Component } from 'react';
export default class Cube extends Component{
    constructor(props) {
        super(props);
        this.state={button:false}
    }
    render() {
        return (
            <TouchableOpacity style={this.state.button? styles.pressed : styles.unpressed}  onPress ={() => this.setState({button: !this.state.button})}>
                
                <Icon size={50} color={this.state.button? 'white' : 'gray'} name={this.props.iconName} type={this.props.iconType}></Icon>
                <Text style={{color:this.state.button? 'white' : 'gray'}} > Hello</Text>
            </TouchableOpacity>
        )
    }
}

const styles= StyleSheet.create({
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
      iconPressed:{
          color:"white",
      },
      iconUnpressed:{
          color:'black'
      }
})