import React from 'react';
import TabbarComp from '../../TabbarComp';
import DrawerCustom from '../../components/Drawer';

// Navigation here
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {Colors} from '../../config';
import {ImageBackground} from 'react-native';
import Images from '../../assets/Images';

//Screens
import PreLogin from './Pre-Login';
import Login from './Login';
import Signup from './Signup';
import ForgetPassword from './ForgetPassword';
import OTP from './OTP';
import SignupOTP from './SignupOTP';
import ResetPassword from './ResetPassword';
import CompleteProfile from './CompleteProfile';

//App
import Home from './Home';
import Profile from './Profile';
import TermsConditions from './TermsConditions';
import PrivacyPolicy from './PrivacyPolicy';
import Settings from './Settings';
import EditProfile from './EditProfile';
import Notification from './Notification';
import ChangePassword from './ChangePassword';
import PaymentSettings from './PaymentSettings';
import TherapyDetails from './TherapyDetails';
import Messages from './Messages';
import Chat from './Chat';
import BookASession from './BookASession';
import RequestAppointment from './RequestAppointment';
import TherapyProviders from './TherapyProviders';
import MyAppointments from './MyAppointments';
import Onboarding from './Onboarding';
import SummaryDetails from './SummaryDetails';
import TherapistProfile from './TerapistProfile';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

const UserAuthStack = () => {
  return (
    <ImageBackground source={Images.background} style={{flex: 1}}>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: false,
          contentStyle: {backgroundColor: 'transparent'},
          animation: 'simple_push',
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
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
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
        name="BookSession"
        component={BookASession}
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
          gestureEnabled: false,
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
          name="TherapyDetails"
          component={TherapyDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RequestAppointment"
          component={RequestAppointment}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TherapyProviders"
          component={TherapyProviders}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TherapistProfile"
          component={TherapistProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SummaryDetails"
          component={SummaryDetails}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </ImageBackground>
  );
};

const SettingsStack = () => {
  return (
    <ImageBackground source={Images.background} style={{flex: 1}}>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: false,
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
        <Stack.Screen
          name="PaymentSettings"
          component={PaymentSettings}
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

const UserAppStack = () => {
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
        component={SettingsStack}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export {UserAuthStack, UserAppStack};
