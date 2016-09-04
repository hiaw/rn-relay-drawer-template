import React from 'react'
import Relay from 'react-relay'
import {Text, View} from 'react-native'

import styles from './Styles/MainPageStyle.js'

/* export default class MainPage extends React.Component { */
class MainPage extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Main Page
          {JSON.stringify(this.props.allProducts)}
        </Text>
      </View>
    )
  }
}

export default Relay.createContainer(Home, {
  initialVariables: {
    orderBy: null
  },
  fragments: {
    allHackerNewsItems: (variables) => {
      return Relay.QL `
        fragment on Viewer {
          allHackerNewsItems (first: 10, orderBy: $orderBy) {
            edges {
              node {
                id,
                createdAt,
                modifiedAt,
                title,
                score,
                url,
                author {
                  id,
                  username
                }
              }
            }
          }
        }
      `
    }
  }
})
