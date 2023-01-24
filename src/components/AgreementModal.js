import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {Colors, NavService} from '../config';
import Checkbox from './CheckBox';
export default AgreementModal = ({
    isVisible = false,
    onReject = () => {},
    onAccept = () => {},
    naviagtion,
  }) => {
    const [terms, setTerms] = useState(false);
    const [privacy, setPrivacy] = useState(false);
    return (
      <Modal
        isVisible={isVisible}
        backdropOpacity={0.8}
        onBackButtonPress={onReject}
        onModalHide={() => {
          setTerms(false);
          setPrivacy(false);
        }}
        onBackdropPress={onReject}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 20,
          }}>
          <View
            style={{
              width: '100%',
              borderRadius: 20,
              borderWidth: 1,
              borderColor: Colors.border,
              backgroundColor: Colors.white,
            }}>
            <View
              style={{
                // backgroundColor: Colors.primary,
                alignItems: 'center',
                justifyContent: 'center',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
  
                height: 65,
                width: '101%',
                marginLeft: -1,
                marginTop: -1,
                backgroundColor: Colors.backgroundColor,
              }}>
              <Text
                style={{color: Colors.black, fontSize: 18, fontWeight: '700'}}>
                AGREEMENT
              </Text>
            </View>
            <View style={{padding: 10}}>
              <Text style={{color: Colors.black, fontSize: 16}}>
                I have read and agreed with
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginBottom: 10,
                  alignItems: 'center',
                  marginTop: 25,
                }}>
                <Checkbox
                  borderColor={Colors.black}
                  isChecked={terms}
                  onPress={() => setTerms(!terms)}
                />
                <TouchableOpacity
                  onPress={() => {
                    // naviagtion.navigate("TermsConditions")
                    NavService.navigate('TermsCondition');
                    onReject();
                  }}>
                  <Text
                    style={{
                      color: Colors.black,
                      fontSize: 16,
                      marginLeft: 15,
                    }}>
                    Terms & Conditions
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginBottom: 10,
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <Checkbox
                  borderColor={Colors.black}
                  isChecked={privacy}
                  onPress={() => setPrivacy(!privacy)}
                />
                <TouchableOpacity
                  onPress={() => {
                    NavService.navigate('PrivacyPolicy');
                    onReject();
                  }}>
                  <Text
                    style={{
                      color: Colors.black,
                      fontSize: 16,
                      marginLeft: 15,
                    }}>
                    Privacy Policy
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  height: 50,
                  width: '105%',
                  marginTop: 25,
                  alignSelf: 'center',
                }}>
                <TouchableOpacity
                  onPress={onReject}
                  activeOpacity={0.8}
                  style={{
                    flex: 1,
                    backgroundColor: Colors.grey,
  
                    borderBottomLeftRadius: 25,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '600',
                      color: Colors.black,
                    }}>
                    REJECT
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  disabled={!terms || !privacy}
                  onPress={onAccept}
                  activeOpacity={0.8}
                  style={{
                    flex: 1,
                    backgroundColor:
                      !terms || !privacy
                        ? Colors.backgroundColor
                        : Colors.backgroundColor,
  
                    borderBottomRightRadius: 25,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '600',
                      color: !terms || !privacy ? Colors.white : Colors.black,
                    }}>
                    ACCEPT
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  };
  