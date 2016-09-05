import React from 'react'
import Relay from 'react-relay'
import {Text, View} from 'react-native'


/* export default class MainPage extends React.Component { */
class MainPage extends React.Component {
  render () {
    return (
      <View>
        <Text>
          Main Page
          {JSON.stringify(this.props.allProducts)}
        </Text>
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
