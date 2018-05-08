import React from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';

class Button extends React.Component {
  render() {
    return (
      <TouchableHighlight
        onPress={this.props.onClick}
        style={styles.wrapper}
        underlayColor="#286f23"
      >
        <Text style={styles.text}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: 100,
    height: 44,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#6c6',
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});

export default Button;
