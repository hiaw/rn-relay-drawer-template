import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'

import styles from './Styles/DrawerButtonStyle.js'

export default class DrawerButton extends Component {
  render () {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Text style={styles.text}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}
