import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { Actions as NavigationActions, ActionConst } from 'react-native-router-flux'
import autobind from 'autobind-decorator'

import DrawerButton from '../Components/DrawerButton'

@autobind
export default class DrawerContent extends Component {

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  handleHome () {
    this.toggleDrawer()
    NavigationActions.home({type: ActionConst.RESET})
  }

  handleMainPage () {
    this.toggleDrawer()
    NavigationActions.mainPage({type: ActionConst.RESET})
  }

  handleFirstView () {
    this.toggleDrawer()
    NavigationActions.page({type: ActionConst.RESET})
  }

  render () {
    return (
      <ScrollView>
        <DrawerButton text='Home' onPress={this.handleHome} />
        <DrawerButton text='Home' onPress={this.handleHome} />
        <DrawerButton text='Home' onPress={this.handleHome} />
        <DrawerButton text='Main Page' onPress={this.handleMainPage} />
        <DrawerButton text='Main Page' onPress={this.handleMainPage} />
        <DrawerButton text='Main Page' onPress={this.handleMainPage} />
        <DrawerButton text='First View' onPress={this.handleFirstView} />
        <DrawerButton text='First View' onPress={this.handleFirstView} />
        <DrawerButton text='First View' onPress={this.handleFirstView} />
      </ScrollView>
    )
  }

}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}
