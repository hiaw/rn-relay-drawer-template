import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Actions as NavigationActions } from 'react-native-router-flux'

const toggleDrawer = () => {
  NavigationActions.refresh({
    key: 'drawer',
    open: value => !value
  })
}

export default {
  hamburgerButton () {
    return (
      <TouchableOpacity onPress={toggleDrawer}>
        <Text>Menu</Text>
      </TouchableOpacity>
    )
  }
}
