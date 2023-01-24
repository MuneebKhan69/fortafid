import {Colors, NavService} from '../../../config';
import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';

import CustomBackground from '../../../components/CustomBackground';
import CustomButton from '../../../components/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput';

class OTP extends Component {
  state = {
    code: '',
    timerCode: 60,
    resend: false,
  };
  constructor(props) {
    super(props);
    this.timer = null;
  }
  componentDidMount() {
    this.startInterval();
  }
  startInterval = () => {
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      const {timerCode} = this.state;
      if (timerCode < 1) {
        clearInterval(this.timer);
        this.setState({resend: true});
      } else this.setState({timerCode: timerCode - 1});
    }, 1000);
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const {timerCode, resend, code} = this.state;
    const {user_id} = this.props.route.params;
    return (
      <CustomBackground>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          style={{flexGrow: 1}}
          contentContainerStyle={{
            alignItems: 'center',
            flexGrow: 1,
            paddingHorizontal: 40,
          }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              color: Colors.primary,
              marginVertical: 20,
            }}>
            Enter OTP Verification
          </Text>

          <CustomTextInput
            placeholder={'******'}
            onChangeText={value => this.setState({code: value})}
            keyboardType="number-pad"
            // isPassword={true}
            style={{
              letterSpacing: 20,
              textAlign: 'center',
              width: '100%',
              color: Colors.primary,
              fontSize: 14,
            }}
            maxLength={6}
          />

          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 5,
            }}>
            <Text
              style={{
                marginTop: 5,
                alignSelf: 'flex-end',
                color: Colors.secondary,
              }}>
              00:{timerCode}
            </Text>
            <Text
              onPress={
                resend
                  ? async () => {
                      // await resendVerifyCode(user_id);
                      this.setState({timerCode: 60, resend: false, code: ''});
                      this.startInterval();
                    }
                  : null
              }
              style={{
                marginTop: 5,
                color: Colors.secondary,
                fontWeight: resend ? '600' : '300',
                alignSelf: 'flex-end',
                fontSize: 11,
              }}>
              Didn't Receive Code? Resend?
            </Text>
          </View>

          <CustomButton
            title={'CONTINUE'}
            // onPress={async () => await verifyCode(code, user_id)}
            onPress={async () => NavService.navigate('ResetPassword')}
            buttonStyle={{marginBottom: 40}}
          />
        </ScrollView>
      </CustomBackground>
    );
  }
}

export default OTP;
