import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import COLORS from '../reusables/Colors';
import ClassicButton from '../reusables/ClassicButton';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
        this.state = { password: '' };
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.text}>
                        Welcome back!
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Email Address"
                        placeholderTextColor='grey'
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor='grey'
                        onChangeText={(password) => this.setState({ password })}
                        value={this.state.password}
                    />
                </View>

                <View style={{ flex: 1, marginLeft: 170 }}>
                    <Button
                        title="Forgot Password?"
                        fontSize='10'
                        color={COLORS.classicGreen}
                        onPress={() => navigate('ForgotPass')}
                    />
                </View>

                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
                    <ClassicButton textOnButton="Login"
                        lightEndColor={COLORS.lightGreen} darkEndColor={COLORS.darkGreen}
                        page='Feed'
                        navigation={this.props.navigation}></ClassicButton>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 8,
    },
    text: {
        margin: 25,
        fontSize: 22,
        fontWeight: '500',
        textAlign: 'left',
        color: COLORS.classicGreen,

    },
    input: {
        height: 50,
        padding: 10,
        margin: 18,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,

    },
});
