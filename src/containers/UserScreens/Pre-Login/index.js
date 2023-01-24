import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  Dimensions,
} from 'react-native';
import {Colors, NavService} from '../../../config';
import CustomBackground from '../../../components/CustomBackground';
import Icons from '../../../assets/Icons';
import AgreementModal from '../../../components/AgreementModal';
// import SplashScreen from 'react-native-splash-screen';
import AppBackground from '../../../components/AppBackground';

const {width, height} = Dimensions.get('window');

class App extends Component {
  state = {
    showModal: false,
    currentOption:''
  };

  // componentDidMount() {
  //   SplashScreen.hide()
  // }

  render() {
    const {showModal, currentOption} = this.state;
    const methods = [
      {
        name: 'Email',
        icon: Icons.email,
        onPress: () => this.setState({currentOption:'email', showModal:true}),
        color: Colors.backgroundColor,
      },
      {
        name: 'Apple',
        icon: Icons.apple,
        color: Colors.apple,
        // onPress: SocialSignin.Apple,
      },
      {
        name: 'Facebook',
        icon: Icons.facebook,
        color: Colors.facebook,
        // onPress: SocialSignin.Facebook,
      },
      {
        name: 'Google',
        icon: Icons.google,
        color: Colors.google,
        // onPress: SocialSignin.Google,
      },
    ];
    const {navigation} = this.props;
    return (
     <AppBackground  back={false} title={"Pre Login"} profile={false} >
      <CustomBackground>
        <AgreementModal
          isVisible={showModal}
          onReject={() => this.setState({showModal:false})}
          onAccept={() => {
            // alert('Accept');
            this.setState({showModal:false})
            setTimeout(() => {
              switch (currentOption) {
                case 'email':
                  NavService.navigate('Login');
                  break;
                  case 'facebook':
                    SocialSignIn.Facebook();
                    break;
                    case 'google':
                      SocialSignIn.Google();
                      break;
                      case 'apple':
                        SocialSignIn.Apple();
                        break;
                        default:
                          break;
                        }
                      }, 100);
                    }}
                    />
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            width: '100%',
          }}>
          <View
            style={{
              alignItems: 'center',
              flex: 1,
              width: '100%',
            }}>
          
            {methods.map((method, i) => {
              const {color, name, icon, onPress} = method;
              if (Platform.OS !== 'ios' && name === 'Apple ID') return null;
              return (
                <TouchableOpacity
                onPress={onPress}
                key={i}
                activeOpacity={0.8}
                style={{
                  backgroundColor: color,
                  borderRadius: 25,
                  width: width - 60,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 7,
                  height: 60,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor:Colors.white,
                  borderWidth:2
                }}>
                  <Image
                    source={icon}
                    style={{
                      marginRight: 20,
                      width: 20,
                      height: 20,
                      resizeMode: 'contain',
                      tintColor: name === 'Apple ID' || name === "Email" ? Colors.white : Colors.white,
                      position: 'absolute',
                      left: width / 8,
                    }}
                    />

                  <Text
                    style={{
                      fontWeight: '500',
                      fontSize: 16,
                      color: name === 'Apple ID' || name === "Email" ? Colors.black : Colors.white,
                      position: 'absolute',
                      left: width / 4,
                    }}>
                    Sign in with {name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </CustomBackground>
      </AppBackground>
    );
  }
}

export default App;

{
}
