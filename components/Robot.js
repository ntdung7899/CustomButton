import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
export default class Robot extends Component {
    render() {
        const imgUrl = {
            uri :"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/HONDA_ASIMO.jpg/800px-HONDA_ASIMO.jpg"
        }
        return (
            <Image source = {imgUrl}
                   style ={{width: 200, height: 200}}>
            </Image>
        );
    }
}