import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
} from 'react-native';

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showText: true
        }
        const timeToBlink = 1000 ;
        var taskToDo = () => {
            this.setState(previousState =>{
                return {
                    showText: !previousState.showText
                }
            })
        }
        setInterval(taskToDo,timeToBlink);
    }
    
    render() {
        let textToDisplay = this.state.showText ? this.props.inputText : '';
        return (
            <Text>{textToDisplay}</Text>
        );
    }
}
export default class TextBlink extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showEmail: "Email: ",
            showPass: "Pass: ",
        }
    }
    render() {
        return (
            <View>
                <View>
                    <TextInput 
                    style = {{margin: 20, 
                        height: 40,
                        textSize: 20 
                    }}
                    placeholder = 'Enter your name'
                    placeholderTextColor = 'red'
                    onChangeText = {(text) =>{
                        this.setState((previousState) => {
                            return {
                                showEmail :  text
                            }

                        })
                    }}
                    />
                    <TextInput style = {{margin: 20, 
                        height: 40,  }}
                    placeholder = 'Enter password'
                    secureTextEntry = {true}
                    />
                    <Text>{this.state.showEmail}</Text>
                </View>
            </View>

        );
    }
}