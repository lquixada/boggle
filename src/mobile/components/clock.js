import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text} from 'react-native';

class Clock extends React.Component {
  getSecs() {
    return this.props.secs < 10 ? `0${this.props.secs}` : this.props.secs;
  }

  getTimeStyle() {
    return this.props.secs < 10? {color: 'red'} : {};
  }

  render() {
    return (
      <View>
        <Text style={styles.text}>
          Time left:{' '}
          <Text style={this.getTimeStyle()}>00:{this.getSecs()}</Text>
        </Text>
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

Clock.propTypes = {
  secs: PropTypes.number.isRequired,
};

export default Clock;
