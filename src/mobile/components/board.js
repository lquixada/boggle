import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

class Board extends React.Component {
  render() {
    return (
      <View style={styles.table}>
        {this.props.matrix.map((letters, i) =>
          <View key={i} style={styles.row}>
            {letters.map((letter, i) =>
              <View key={i} style={styles.cell}>
                <Text style={styles.letter}>{letter}</Text>
              </View>
            )}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  table: {
    flex: 1,
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-between',
  },
  cell: {
    marginBottom: 5,
    width: 80,
    height: 85,
    backgroundColor: '#fff',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  letter: {
    color: '#333',
    fontSize: 40,
  }
});

export default Board;
