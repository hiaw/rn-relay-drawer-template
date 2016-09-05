import React, { PropTypes, Component } from 'react'
import Relay from 'react-relay'
import Drawer from 'react-native-drawer'
import { DefaultRenderer, Actions as NavigationActions } from 'react-native-router-flux'

import DrawerContent from '../Containers/DrawerContent'

/* *******************
* Documentation: https://github.com/root-two/react-native-drawer
********************/

export default class NavigationDrawer extends Component {
  render () {
    const state = this.props.navigationState
    const children = state.children
    return (
      <Drawer
        ref='navigation'
        type='displace'
        open={state.open}
        onOpen={() => NavigationActions.refresh({key: state.key, open: true})}
        onClose={() => NavigationActions.refresh({key: state.key, open: false})}
        content={<DrawerContent />}
        tapToClose
        openDrawerOffset={0.7}
        panCloseMask={0.7}
        negotiatePan
        tweenHandler={(ratio) => ({
          main: { opacity: Math.max(0.54, 1 - ratio) }
        })}
      >
        <DefaultRenderer
          navigationState={children[0]}
          onNavigate={this.props.onNavigate} />
      </Drawer>
    )
  }
}

NavigationDrawer.propTypes = {
  navigationState: PropTypes.object,
  onNavigate: PropTypes.func
}

/* export default Relay.createContainer(NavigationDrawer,
 *   {
 *     fragments: {
 *       Viewer: () => Relay.QL`
 *       fragment on Viewer {
 *         ${DrawerView.getFragment('Viewer')}
 *       }
 *     `
 *     }
 *   }) */
