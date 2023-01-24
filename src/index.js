import React, {Component} from 'react';

// Navigation here
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {NavService} from './config';
import {ImageBackground} from 'react-native';
import {connect} from 'react-redux';
import Images from './assets/Images';

//Screens
import {
  Splash,
  RoleSelection,
  UserAppStack,
  UserAuthStack,
  ProviderAppStack,
  ProviderAuthStack,
  BusinessAppStack,
  BusinessAuthStack,
} from './containers';

const Stack = createNativeStackNavigator();

class Navigation extends Component {
  state = {
    ready: false,
    initialRouteName: 'RoleSelection',
  };
  componentDidMount() {
    setTimeout(() => {
      const {user} = this.props;
      if (user && user.role === 'user') {
        this.setState({initialRouteName: 'UserAppStack'});
      } else if (user && user.role === 'service provider') {
        this.setState({initialRouteName: 'ProviderAppStack'});
      } else if (user && user.role === 'business') {
        this.setState({initialRouteName: 'BusinessAppStack'});
      }
      this.setState({ready: true});
    }, 2000);
  }
  render() {
    const {initialRouteName, ready} = this.state;
    if (!ready) return null;
    return (
      <ImageBackground source={Images.background} style={{flex: 1}}>
        <NavigationContainer
          ref={ref => NavService.setTopLevelNavigator(ref)}
          screenOptions={{animation: 'simple_push'}}>
          <Stack.Navigator
            screenOptions={{
              gestureEnabled: false,
              contentStyle: {backgroundColor: 'transparent'},
              animation: 'simple_push',
            }}
            initialRouteName={'Splash'}>
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{headerShown: false}}
            />
            {/* <Stack.Screen
              name="RoleSelection"
              component={RoleSelection}
              options={{headerShown: false}}
            /> */}
            <Stack.Screen
              name="UserAuthStack"
              component={UserAuthStack}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="UserAppStack"
              component={UserAppStack}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ProviderAuthStack"
              component={ProviderAuthStack}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ProviderAppStack"
              component={ProviderAppStack}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="BusinessAuthStack"
              component={BusinessAuthStack}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="BusinessAppStack"
              component={BusinessAppStack}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ImageBackground>
    );
  }
}

function mapStateToProps({reducer: {user}}) {
  return {
    user,
  };
}

export default connect(mapStateToProps)(Navigation);
