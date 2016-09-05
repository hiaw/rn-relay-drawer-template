import React from 'react'
import Relay from 'react-relay'
import {Text, View} from 'react-native'

import styles from './Styles/MainPage.Style.js'

/* export default class MainPage extends React.Component { */
class MainPage extends React.Component {
  render () {
    let items = this.props.allHackerNewsItems.allHackerNewsItems.edges
    let itemsView = items.map((item) => {
      return (
        <View key={item.node.id}>
          <Text style={{fontWeight: 'bold'}}>Data from Relay</Text>
          <Text>Title: {item.node.title} </Text>
          <Text>URL: {item.node.url} </Text>
          <Text>Score: {item.node.score} </Text>
          <Text>Author: {item.node.author.username} </Text>
        </View>
      )
    })
    return (
      <View style={styles.container}>
        {itemsView}
      </View>
    )
  }
}

export default Relay.createContainer(MainPage, {
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
