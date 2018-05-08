import React from 'react';
import {StyleSheet, Text} from 'react-native';

class Title extends React.Component {
  render() {
    return (
      <Text style={styles.wrapper}>
        BOGGLE
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    color: '#fff',
    fontSize: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    fontWeight: '900',
    letterSpacing: -1,
    textAlign: 'center'
  },
});

export default Title;
