import {Colors, NavService} from '../config';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';

import GradientText from './GradientText';
import Icons from '../assets/Icons';
import ProfileImage from './ProfileImage';
import {connect} from 'react-redux';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const menuItems = [
  {
    icon: Icons.home,
    title: 'Home',
    nav: 'Home',
  },
  {
    icon: Icons.myAppointments,
    title: 'My Appointments',
    nav: 'MyAppointments',
  },
  {
    icon: Icons.chat,
    title: 'My Messages',
    nav: 'Messages',
  },
  {
    icon: Icons.settings,
    title: 'Settings',
    nav: 'Settings',
  },
  {
    icon: Icons.logout,
    title: 'Logout',
    nav: 'RoleSelection',
  },
];

class Drawer extends Component {
  _renderItem({title, icon, nav}) {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          if (title === 'Logout') {
            this.props.saveUser(null);
            NavService.reset(0, [{name: nav}]);
          } else {
            this.props.navigation.navigate(nav);
          }
        }}
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 10,
          borderBottomWidth: 0.5,
          borderColor: Colors.grey + '70',
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            padding: 10,
            borderRadius: 7,
            marginBottom: 5,
          }}>
          <Image
            source={icon}
            style={{
              width: 20,
              height: 20,
              resizeMode: 'contain',
            }}
          />
        </View>
        <Text
          style={{
            marginLeft: 10,
            color: Colors.darkGrey,
            fontSize: 16,
            fontWeight: '500',
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
  render() {
    const {user} = this.props;
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: Colors.white,
          alignItems: 'center',
          paddingTop: getStatusBarHeight(),
          borderTopRightRadius: 30,
          borderBottomRightRadius: 30,
        }}>
        <View
          style={{
            marginTop: 20,
            // flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            borderBottomWidth: 0.5,
            borderColor: Colors.grey + '50',
            paddingBottom: 40,
          }}>
          <ProfileImage size={140} imageUri={user?.image} name={user?.name} />
          <GradientText
            numberOfLines={1}
            style={{
              color: Colors.secondary,
              fontSize: 18,
              fontWeight: '700',
              marginTop: 15,
            }}>
            {user?.name}
          </GradientText>
          <Text
            numberOfLines={1}
            style={{
              color: Colors.grey,
              fontSize: 14,
              marginTop: 5,
              fontWeight: '600',
            }}>
            {user?.email}
          </Text>
        </View>
        <View style={{flex: 1, marginTop: 10, width: '100%'}}>
          <FlatList
            bounces={false}
            showsVerticalScrollIndicator={false}
            data={menuItems}
            style={{
              height: '100%',
            }}
            renderItem={({item}) => this._renderItem(item)}
          />
        </View>
      </View>
    );
  }
}

function mapState({reducer: {user}}) {
  return {
    user,
  };
}

function mapDispatch(dispatch) {
  return {
    saveUser: user => {
      dispatch({type: 'SAVE_USER', payload: user});
    },
  };
}

export default connect(mapState, mapDispatch)(Drawer);
