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

export default Relay.createContainer(MainPage, {
  initialVariables: {
    orderBy: null,
    size: 5
  },
  fragments: {
    allProducts: (variables) => {
      return Relay.QL `
        fragment on Viewer {
          allItems (first: $size, orderBy: $orderBy) {
            edges {
              node {
                id
                createdAt
                originCountry
                user {
                  id
                }
                image {
                  url
                }
                name
                description
                average_rating
                rating_count
                quantity
              }
            }
          }
        }
      `
    }
  }
})
