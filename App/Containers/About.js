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
        <Text style={styles.section}>About</Text>
        <Text style={styles.body}>This is the about page</Text>
        <TouchableHighlight
          style={styles.listItem}
          onPress={this.openSmish.bind(this)}
        >
          <Text>
            Visit Google
          </Text>
        </TouchableHighlight>
      </ScrollView>
    )
  }
}
