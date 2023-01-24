import AddService from './AddService';
import AvailableServices from './AvailableServices';
import Calendar from './Calendar';
import ChangePassword from './ChangePassword';
import Chat from './Chat';
import ClientDetails from './ClientDetails';
import {Colors} from '../../config';
import CompleteProfile from './CompleteProfile';
import DrawerCustom from '../../components/Drawer';
import EditProfile from './EditProfile';
import EditService from './EditService';
import ForgetPassword from './ForgetPassword';
//App
import Home from './Home';
import {ImageBackground} from 'react-native';
import Images from '../../assets/Images';
import Login from './Login';
import Messages from './Messages';
import MyAppointments from './MyAppointments';
import Notification from './Notification';
import OTP from './OTP';
//Screens
import PreLogin from './Pre-Login';
import PrivacyPolicy from './PrivacyPolicy';
import Profile from './Profile';
import React from 'react';
import ResetPassword from './ResetPassword';
import Settings from './Settings';
import Signup from './Signup';
import SignupOTP from './SignupOTP';
import TabbarComp from '../../TabbarComp';
import TermsConditions from './TermsConditions';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
// Navigation here
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ServiceDetails from './ServiceDetails';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

const ProviderAuthStack = () => {
  return (
    <ImageBackground source={Images.background} style={{flex: 1}}>
      <Stack.Navigator
        screenOptions={{
          contentStyle: {backgroundColor: 'transparent'},
          animation: 'simple_push',
          gestureEnabled: false,
        }}
        initialRouteName="PreLogin">
        <Stack.Screen
          name="PreLogin"
          component={PreLogin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignupOTP"
          component={SignupOTP}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OTP"
          component={OTP}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CompleteProfile"
          component={CompleteProfile}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </ImageBackground>
  );
};

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        contentStyle: {backgroundColor: Colors.grey},
        animation: 'simple_push',
      }}
      tabBar={props => <TabbarComp {...props} />}
      initialRouteName={'HomeScreen'}>
      <Tab.Screen
        name="HomeScreen"
        component={Home}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Calender"
        component={Calendar}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const ScreenStack = () => {
  return (
    <ImageBackground source={Images.background} style={{flex: 1}}>
      <Stack.Navigator
        screenOptions={{
          contentStyle: {backgroundColor: 'transparent'},
          animation: 'simple_push',
        }}
        initialRouteName="Tab">
        <Stack.Screen
          name="Tab"
          component={TabStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ClientDetails"
          component={ClientDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AvailableServices"
          component={AvailableServices}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddService"
          component={AddService}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditService"
          component={EditService}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ServiceDetails"
          component={ServiceDetails}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </ImageBackground>
  );
};

const SettingStack = () => {
  return (
    <ImageBackground source={Images.background} style={{flex: 1}}>
      <Stack.Navigator
        screenOptions={{
          contentStyle: {backgroundColor: 'transparent'},
          animation: 'simple_push',
        }}
        initialRouteName="Settings">
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TermsConditions"
          component={TermsConditions}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PrivacyPolicy"
          component={PrivacyPolicy}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </ImageBackground>
  );
};

const MessagesStack = () => {
  return (
    <ImageBackground source={Images.background} style={{flex: 1}}>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: false,
          contentStyle: {backgroundColor: 'transparent'},
          animation: 'simple_push',
        }}
        initialRouteName="Messages">
        <Stack.Screen
          name="Messages"
          component={Messages}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </ImageBackground>
  );
};

const ProviderAppStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'front',
        drawerStyle: {
          width: '80%',
          backgroundColor: 'transparent',
        },
      }}
      drawerContent={props => <DrawerCustom {...props} />}
      initialRouteName={'Home'}>
      <Drawer.Screen
        name="Home"
        component={ScreenStack}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="MyAppointments"
        component={MyAppointments}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Messages"
        component={MessagesStack}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingStack}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export {ProviderAuthStack, ProviderAppStack};
