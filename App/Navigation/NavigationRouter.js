import React, { Component } from 'react'
import Relay from 'react-relay'
import { Scene, Router } from 'react-native-router-flux'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'

// screens identified by the router
import RelayRenderer from './RelayComponentRenderer.js'
import {setNetworkLayer, renderRelayScene} from '../Helper/NetworkHelper.js'
import Styles from './Styles/NavigationRouter.Style.js'
import MainPage from '../Containers/MainPage.js'
import AboutScreen from '../Containers/About.js'
import HomeRoute from './Routes/HomeRoute.js'

class NavigationRouter extends Component {
  componentDidMount () {
    setNetworkLayer()
  }

  render () {
    let mainNavigatorRoute = {
      title: 'Smish',
      component: MainPage,
      queryConfig: new HomeRoute({email: 't@t.t', orderBy: '-createdAt'})
    }

    return (
      <Router wrapBy={RelayRenderer()}>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
            <Scene key='mainPage' route={mainNavigatorRoute} component={MainPage} renderLeftButton={NavItems.hamburgerButton} initial />
            <Scene key='about' component={AboutScreen} renderLeftButton={NavItems.hamburgerButton} />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
