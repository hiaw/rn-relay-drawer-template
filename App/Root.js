import React from 'react'
import Drawer from 'react-native-drawer'

import DrawerContent from './Containers/DrawerContent.js'
import NavigationRouter from './Navigation/NavigationRouter.js'

class Root extends React.Component {
  render () {
    return (
        <NavigationRouter />
    )
  }
}

module.exports = Root
