import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

class Social extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Image source={require('../../public/images/logo-github.png')} style={styles.image} />
        <Image source={require('../../public/images/logo-facebook.png')} style={styles.image} />
        <Image source={require('../../public/images/logo-twitter.png')} style={styles.image} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  image: {
    marginLeft: 15,
    opacity: .3,
  },
});

export default Social;
