import React from 'react'
import {
  ScrollView,
  TouchableHighlight,
  Linking,
  Text
} from 'react-native'

import styles from './Styles/About.Style.js'

export default class About extends React.Component {
  openSmish () {
    Linking.openURL('http://www.google.com').catch(err => console.error('An error occurred', err))
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.section}>Smish</Text>
        <Text style={styles.body}>This is the initial app for Smish</Text>
        <TouchableHighlight
          style={styles.listItem}
          onPress={this.openSmish.bind(this)}
        >
          <Text>
            Visit Our Website!
          </Text>
        </TouchableHighlight>
      </ScrollView>
    )
  }
}
