import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

import COLORS from '../reusables/Colors';
import Button from '../reusables/ClassicButton';

export default class OpenEmail extends React.Component {

    componentDidMount() {
        StatusBar.setHidden(false);
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
                <View style={{ marginLeft: 30, marginRight: 30, }}>
                    <Text></Text>
                    <Text style={styles.tex}>We have sent an email to janedoe@gmail.com please check your mail.</Text>
                    <Text></Text>
                </View>
                <Button textOnButton="Open Inbox"
                    lightEndColor={COLORS.lightGreen} darkEndColor={COLORS.darkGreen}
                    navigation={this.props.navigation}
                    page=""></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    text: {
        fontSize: 22,
        color: 'black',
        marginLeft: -60,

    },
    tex: {
        color: 'grey',

    },
});
