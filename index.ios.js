import {AppRegistry} from 'react-native'
import Root from './App/Root.js'
import {setNetworkLayer} from './App/Helper/NetworkHelper.js'

setNetworkLayer()

AppRegistry.registerComponent('rn_relay_drawer_template', () => Root)
