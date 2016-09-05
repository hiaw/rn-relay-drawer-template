import React from 'react'
import {AsyncStorage} from 'react-native'
import Relay from 'react-relay'

import publicURL from '../Navigation/publicURL.js'

let setNetworkLayer = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem('currentUser', (err, res) => {
      if (err) {
      } else {
        var store = JSON.parse(res)
        var options = {}
        if (store) {
          options.headers = {
            Authorization: 'Bearer ' + store.scapholdAuthToken
          }
        } else {
          options.headers = {}
        }
        Relay.injectNetworkLayer(
        new Relay.DefaultNetworkLayer(publicURL, options)
      )
        resolve(options)
      }
    })
  })
}

let renderRelayScene = (route, navigator) => {
  const { title, Component, queryConfig } = route
  return (
    <Relay.RootContainer
      Component={Component}
      route={queryConfig}
      renderFetched={(data) => {
        return (
          <Component
            navigator={navigator}
            name={title}
            {...data}
          />
        )
      }}
    />
  )
}

module.exports = {setNetworkLayer, renderRelayScene}
