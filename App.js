import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'

import { Feather } from '@expo/vector-icons'

import { profileScreen, loginScreen, productScreen } from './views'

import Sidebar from './components/SideBar'

const DrawerNavigator = createDrawerNavigator({
  profileScreen: {
    screen: profileScreen,
    navigationOptions: {
      title: "Home",
      drawerIcon: ({ tintColor }) => <Feather name="home" size="16" color={tintColor} />
    }
  },
  loginScreen: {
    screen: loginScreen,
    navigationOptions: {
      title: "Login",
      drawerIcon: ({ tintColor }) => <Feather name="user" size="16" color={tintColor} />
    }
  },
  productScreen: {
    screen: productScreen,
    navigationOptions: {
      title: "Produtos",
      drawerIcon: ({ tintColor }) => <Feather name="list" size="16" color={tintColor} />
    }
  }
},{
  contentComponent: props => <Sidebar {...props} />

})

export default createAppContainer(DrawerNavigator)