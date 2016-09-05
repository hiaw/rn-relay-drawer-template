/* @flow weak */

import {View, Text, TouchableHighlight,} from 'react-native'
import React, { PropTypes } from 'react'
import Relay from 'react-relay'

class RelayComponentRenderer extends React.Component
{
  static propTypes = {
    component: PropTypes.func,
    renderLoading: PropTypes.func,
    renderError: PropTypes.func,
    navigationState: PropTypes.object,
  }

  renderLoading( )
  {
    return <View>
      <Text>Loading...</Text>
    </View>
  }

  renderError( error, retry )
  {
    return <View style={{padding: 30}}>
      <Text>Error while fetching data from the server</Text>
      <TouchableHighlight onPress={retry}>
        <Text>Retry?</Text>
      </TouchableHighlight>
    </View>
  }

  render( )
  {
    const { title, component, queryConfig } = this.props.navigationState.route

    return <Relay.RootContainer
             environment={ Relay.Store }
             Component={component}
             route={ queryConfig }
             render={ ( {done, error, props, retry, stale} ) =>
               {
                 if (error) {
                   return (this.props.renderError || this.renderError)(error, retry);
                 }

                 if (props) {
                   // render component itself
                   return <component {...props} />;
                 }

                 // render loading
                 return (this.props.renderLoading || this.renderLoading)(this.props.navigationState)
               } }
           />
  }
}

export default ( moduleProps ) => ( Component ) =>
  !Relay.isContainer(Component)
  ?
    Component // not a Relay container, return component itself
  :
    (props) => // relay container - wrap it with renderer
      <RelayComponentRenderer
        {...moduleProps}
        {...props}
        component={Component}
      />
