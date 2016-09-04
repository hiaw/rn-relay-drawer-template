import Relay from 'react-relay';

export default class HomeRoute extends Relay.Route {
  static routeName = 'HomeRoute';
  static queries = {
    allProducts: (Component, variables) => {
      return Relay.QL `
        query {
          viewer {
            ${Component.getFragment('allProducts', {orderBy: variables.orderBy})}
          }
        }
      `
    }
  };
  static paramDefinitions = {
    email: {required: true},
    orderBy: {required: true},
  };
}
