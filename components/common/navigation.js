import { createStackNavigator } from 'react-navigation-stack'
import LoginPage from '../login/loginPage'
import HomePage from '../homePage/homePage'

export const AppNavigator = createStackNavigator({
    LoginPage: {
      screen: LoginPage,
      navigationOptions: { header: null }
    },
    HomePage: {
        screen: HomePage,
        navigationOptions: { header: null }
      }
  }, {
    initialRouteName: 'LoginPage',
    defaultNavigationOptions: {
      headerBackTitle: () => null,
      headerBackImage: () => null
    }
  });