import React from 'react';
import {StyleSheet, View} from 'react-native';

import Board from '../containers/board';
import Button from '../containers/button';
import Copyright from '../components/copyright';
import Clock from '../containers/clock';
import Input from '../containers/input';
import Score from '../containers/score';
import Social from '../components/social';
import Title from '../components/title';

class Game extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Title />
            <Button />
          </View>
          <View style={styles.headerBottom}>
            <Input />
          </View>
        </View>
        <View style={styles.section}>
          <View style={styles.sectionTop}>
            <Clock />
            <Score />
          </View>
          <Board />
        </View>
        <View style={styles.footer}>
          <Copyright />
          <Social />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#484848',
  },
  header: {
    padding: 20,
    paddingTop: 40,
    height: 140,
    backgroundColor: '#565656',
  },
  headerTop: {
    marginBottom: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerBottom: {
    flex: 1
  },
  section: {
    flex: 1,
    padding: 20,
    height: '100%',
  },
  sectionTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-between',
  },
  footer: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#565656',
  },
});

export default Game;
