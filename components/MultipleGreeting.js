import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

class Greeting extends Component {
    render() {
        let greeting = `Hello ${this.props.name}. How do you feel today?`
        return (
            <Text>{greeting}</Text>
        );
    }
}
export default class MultipleGreeting extends Component {
    render() {
        return (
            <View 
                style = {{alignItems: 'center'}}
            >
                <Greeting name="Dung"></Greeting>
                <Greeting name = "Vy"></Greeting>
            </View>
        );
    }
}