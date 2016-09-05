import {Platform} from 'react-native'

export default {
  container: {
    backgroundColor: '#F5F5F5',
    flex: 1,
    paddingTop: Platform.OS === 'android' ? undefined : 60,
    paddingLeft: 20
  },
  section: {
    color: 'black',
    fontFamily: Platform.OS === 'android' ? 'sans-serif-light' : undefined,
    fontSize: 30,
    fontWeight: 'bold'
  },
  body: {
    fontSize: 20,
    fontWeight: '200',
    marginTop: 10,
    marginBottom: 40,
    marginLeft: 10,
    marginRight: 10
  },
  spacing: {
    padding: 30
  }
}
