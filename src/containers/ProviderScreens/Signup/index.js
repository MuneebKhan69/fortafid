import {Colors, NavService, Shadows} from '../../../config';
import {Dimensions, Text, View} from 'react-native';
import React, {Component} from 'react';

import CustomBackground from '../../../components/CustomBackground';
import CustomButton from '../../../components/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput';
import Icons from '../../../assets/Icons';
import Slider from 'react-native-slider';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

const {width} = Dimensions.get('window');
class Login extends Component {
  state = {
    fullName: '',
    email: 'sid@gmail.com',
    password: '123123123',
    confirmPassword: '123123123',
    radius: 0.2,
  };

  render() {
    const {fullName, email, password, confirmPassword,radius} = this.state;
    const signUp = async (email, password,confirmPassword,radius) => {
      try{
          const response = await axios.post(
           "https://server.appsstaging.com:3011/routes/therapist/therapistsignup",
           {
             email: email,
             password:password,
             confirmPassword:confirmPassword,
             radius:radius

           },
          )
          console.log('response', response.data);
          NavService.navigate('SignupOTP')
          
          // if(email != /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i){
          //       Toast.show ({
          //         text1:"Please enter correct email",
          //         type:'error',
          //         onHide:2000,
          //       });
          // } {
          //   if(password != confirmPassword ){
          //     Toast.show ({
          //       text1:"Password Not Match",
          //       type:'error',
          //       onHide:2000,
          //     });
          //   }
          // }
      }catch(error){
                 console.log("error",error.response.data)
      }
       }
    return (
      <CustomBackground>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            width: '100%',
          }}>
          <View
            style={{
              marginTop: 20,
              alignItems: 'center',
              flex: 1,
              width: '100%',
            }}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: 'bold',
                color: Colors.primary,
                marginVertical: 20,
              }}>
              Sign-Up
            </Text>
            {/* <CustomTextInput
              icon={Icons.user}
              placeholder="Full Name"
              value={fullName}
              onChangeText={text => this.setState({email: text})}
            /> */}
            <CustomTextInput
              icon={Icons.email}
              placeholder="Email Address"
              value={email}
              onChangeText={text => this.setState({email: text})}
            />
            <CustomTextInput
              icon={Icons.password}
              placeholder="Password"
              value={password}
              onChangeText={text => this.setState({password: text})}
              isPassword={true}
            />
            <CustomTextInput
              icon={Icons.password}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChangeText={text => this.setState({confirmPassword: text})}
              isPassword={true}
            />

            <View
              style={{
                marginTop: 20,
                width: width - 60,
                height: 70,
                // backgroundColor: 'red',
              }}>
              <Text
                style={{
                  color: Colors.secondary,
                  fontSize: 20,
                  fontWeight: '700',
                }}>
                Choose Radius
              </Text>

              <Slider
                value={this.state.radius}
                onValueChange={value => this.setState({radius: value})}
                thumbStyle={{
                  backgroundColor: Colors.primary,
                }}
                minimumTrackTintColor={Colors.white}
                maximumTrackTintColor={Colors.white}
                trackStyle={{...Shadows.shadow5}}
                // thumbImage={Icons.sliderThumb}
              />
              <View
                style={{
                  width: '100%',
                  height: 50,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    color: Colors.secondaryText,
                    fontSize: 13,
                    fontWeight: '600',
                  }}>
                  1 Mile
                </Text>
                <Text
                  style={{
                    color: Colors.secondaryText,
                    fontSize: 13,
                    fontWeight: '600',
                  }}>
                  20 Mile
                </Text>
              </View>
            </View>
            <CustomButton
              title="Signup"
              onPress={() => signUp()}
              // onPress={async () => await signUp(email,password,confirmPassword,radius)}
              // onPress={() => NavService.navigate('SignupOTP')}
            />
          </View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: Colors.black,
              marginVertical: 30,
            }}>
            Already have an account?{' '}
            <Text
              onPress={() => NavService.goBack()}
              style={{
                color: Colors.secondary,
                textDecorationLine: 'underline',
              }}>
              Signin
            </Text>
          </Text>
        </View>
      </CustomBackground>
    );
  }
}

export default Login;
