import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

class Input extends React.Component {
  getPlaceholder() {
    return !this.props.started ? 'Press start to begin...' : '';
  }

  render() {
    return (
      <TextInput
        ref={(input) => this.input = input}
        value={this.props.value}
        editable={this.props.started}
        onChangeText={(evt) => this.props.onChange(evt)}
        onKeyPress={(evt) => this.props.onEnter(evt)}
        onSubmitEditing={(evt) => this.props.onSubmit(evt)}
        style={styles.wrapper}
        autoCapitalize="none"
        placeholder={this.getPlaceholder()}
        placeholderTextColor="#999"
        selectionColor="#6c6"
        blurOnSubmit={false}
      />
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    height: 40,
    fontSize: 20,
    color: '#fff',
    borderRadius: 5,
    backgroundColor: '#484848'
  },
});

export default Input;
