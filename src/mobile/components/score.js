import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text} from 'react-native';

class Score extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>Score: {this.props.counter}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

Score.propTypes = {
  counter: PropTypes.number.isRequired,
};

export default Score;
