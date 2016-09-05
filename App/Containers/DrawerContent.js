import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { Actions as NavigationActions, ActionConst } from 'react-native-router-flux'
import autobind from 'autobind-decorator'

import styles from './Styles/DrawerContent.Style.js'
import DrawerButton from '../Components/DrawerButton'

@autobind
export default class DrawerContent extends Component {

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  handleMainPage () {
    this.toggleDrawer()
    NavigationActions.mainPage({type: ActionConst.RESET})
  }

  handleAbout() {
    this.toggleDrawer()
    NavigationActions.about({type: ActionConst.RESET})
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <DrawerButton text='Main Page' onPress={this.handleMainPage} />
        <DrawerButton text='About' onPress={this.handleAbout} />
      </ScrollView>
    )
  }

}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}
