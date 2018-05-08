import React from 'react';
import {StyleSheet, Text} from 'react-native';

class Copyright extends React.Component {
  render() {
    return (
      <Text style={styles.wrapper}>
        © Copyright 2016 Leonardo Quixadá. All rights reserved.
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    color: '#999',
    width: '60%'
  },
});

export default Copyright;
