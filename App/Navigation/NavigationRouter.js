import React, { Component } from 'react'
import Relay from 'react-relay'
import { Scene, Router } from 'react-native-router-flux'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'

// screens identified by the router
import RelayRenderer from './RelayComponentRenderer.js'
import {setNetworkLayer, renderRelayScene} from '../Helper/NetworkHelper.js'
import Styles from './Styles/NavigationContainerStyle'
import MainPage from '../Components/MainPage.js'
import Page from '../Components/Page.js'
import HomeRoute from './HomeRoute.js'
import Home from '../Components/Home.js'

class NavigationRouter extends Component {
  componentDidMount () {
    setNetworkLayer()
  }

  render () {
    let homeNavigatorRoute = {
      title: 'Smish',
      component: Home,
      queryConfig: new HomeRoute({email: 't@t.t', orderBy: '-createdAt'})
    }
    let mainNavigatorRoute = {
      title: 'Smish',
      component: MainPage,
      queryConfig: new HomeRoute({email: 't@t.t', orderBy: '-createdAt'})
    }
    return (
      <Router wrapBy={RelayRenderer()}>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
            <Scene key='mainPage' route={mainNavigatorRoute} component={MainPage} renderLeftButton={NavItems.hamburgerButton} />
            <Scene key='home' route={homeNavigatorRoute} component={Home} renderLeftButton={NavItems.hamburgerButton} />
            <Scene key='page' component={Page} renderLeftButton={NavItems.hamburgerButton} initial />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
