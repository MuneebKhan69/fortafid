import {Colors, NavService, Shadows} from '../../../config';
import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';

import AppBackground from '../../../components/Appbackground';
import {Calendar} from 'react-native-calendars';
import CustomButton from '../../../components/CustomButton';
import Icons from '../../../assets/Icons';
import LinearGradient from 'react-native-linear-gradient';
import {ProfileTextInput} from '../../../components/CustomTextInput';
import moment from 'moment';

const {width} = Dimensions.get('window');

const time = [
  '9 AM',
  '10 AM',
  '11 AM',
  '12 PM',
  '1 PM',
  '2 PM',
  '3 PM',
  '4 PM',
  '5 PM',
];

export class RequestAppointment extends Component {
  state = {
    markedDates: {},
    selectedTime: '9 AM',
    address: '',
    isRecurring: true,
    noOfClients: 1,
  };
  render() {
    const {markedDates, selectedTime, address, isRecurring, noOfClients} =
      this.state;
    return (
      <AppBackground title="Request Appointment" back notification={false}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 20,
          }}>
          <View
            style={{
              padding: 20,
              borderRadius: 10,
              backgroundColor: Colors.white,
              margin: 3,
              ...Shadows.shadow3,
            }}>
            <Calendar
              minDate={new Date()}
              current={new Date()}
              onDayPress={day => {
                this.setState({
                  markedDates: {
                    [day.dateString]: {
                      marked: true,
                      date: day.dateString,
                    },
                    data: {marked: true, date: day.dateString},
                  },
                });
              }}
              renderArrow={direction => {
                return (
                  <View
                    style={{
                      backgroundColor: Colors.color1,
                      borderRadius: 100,
                      padding: 8,
                    }}>
                    <Image
                      source={Icons.next}
                      style={{
                        height: 12,
                        width: 12,
                        transform: [
                          {
                            rotate: direction === 'left' ? '180deg' : '0deg',
                          },
                        ],
                      }}
                      resizeMode="contain"
                    />
                  </View>
                );
              }}
              hideExtraDays={false}
              firstDay={7}
              hideDayNames={false}
              showWeekNumbers={false}
              onPressArrowLeft={subtractMonth => subtractMonth()}
              onPressArrowRight={addMonth => addMonth()}
              markedDates={markedDates}
              customHeader={data => {
                const {onPressArrowLeft, onPressArrowRight, month, addMonth} =
                  data;
                return (
                  <View
                    style={{
                      width: '100%',
                      paddingTop: 20,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignSelf: 'stretch',
                        justifyContent: 'center',
                      }}>
                      <TouchableOpacity
                        onPress={() => onPressArrowLeft(() => addMonth(-1))}>
                        <LinearGradient
                          colors={Colors.gradient}
                          style={{
                            borderRadius: 100,
                            padding: 8,
                          }}>
                          <Image
                            source={Icons.next}
                            style={{
                              height: 12,
                              width: 12,
                              transform: [{rotate: '180deg'}],
                              tintColor: Colors.white,
                            }}
                            resizeMode="contain"
                          />
                        </LinearGradient>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 18,
                          color: Colors.black,
                          fontWeight: '600',
                          marginHorizontal: 25,
                        }}>
                        {moment(new Date(month)).format('MMMM YYYY')}
                      </Text>
                      <TouchableOpacity
                        onPress={() => onPressArrowRight(() => addMonth(1))}>
                        <LinearGradient
                          colors={Colors.gradient}
                          style={{
                            borderRadius: 100,
                            padding: 8,
                          }}>
                          <Image
                            source={Icons.next}
                            style={{
                              height: 12,
                              width: 12,
                              transform: [{rotate: '0deg'}],
                              tintColor: Colors.white,
                            }}
                            resizeMode="contain"
                          />
                        </LinearGradient>
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignSelf: 'stretch',
                        justifyContent: 'space-around',
                        marginTop: 10,
                      }}>
                      {['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'].map(day => {
                        return (
                          <View
                            style={{
                              backgroundColor: Colors.white,
                              borderWidth: 1.5,
                              borderColor: Colors.primary,
                              height: (width - 80) / 7,
                              width: (width - 80) / 7,
                              borderRadius: (width - 80) / 7 / 2,
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <LinearGradient
                              colors={Colors.gradient}
                              style={{
                                height: (width - 80) / 9,
                                width: (width - 80) / 9,
                                borderRadius: (width - 80) / 9 / 2,
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}>
                              <Text
                                style={{
                                  fontSize: 14,
                                  color: Colors.white,
                                  fontWeight: '600',
                                }}>
                                {day}
                              </Text>
                            </LinearGradient>
                          </View>
                        );
                      })}
                    </View>
                  </View>
                );
              }}
              enableSwipeMonths={true}
              style={{
                borderRadius: 20,
                overflow: 'hidden',
              }}
              dayComponent={({state, date, onPress, marking}) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    // disabled={state === 'disabled' || state === 'today'}
                    disabled={state === 'disabled'}
                    onPress={() => onPress(date)}
                    style={{
                      backgroundColor: marking?.marked
                        ? Colors.primary
                        : Colors.lightGrey,
                      borderRadius: 100,
                    }}>
                    <LinearGradient
                      colors={
                        marking?.marked
                          ? Colors.gradient
                          : [Colors.lightGrey, Colors.lightGrey]
                      }
                      style={{
                        height: (width - 80) / 9,
                        width: (width - 80) / 9,
                        borderRadius: 100,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          textAlign: 'center',
                          color: marking?.marked
                            ? Colors.white
                            : state === 'disabled'
                            ? Colors.grey
                            : Colors.black,
                        }}>
                        {date.day}
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <ScrollView
            horizontal
            style={{marginTop: 10}}
            showsHorizontalScrollIndicator={false}>
            {time?.map(item => {
              isSelected = item === selectedTime;
              return (
                <TouchableOpacity
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 40 / 2,
                    marginRight: 5,
                    ...Shadows.shadow5,
                    marginVertical: 10,
                    marginLeft: 5,
                  }}
                  activeOpacity={0.8}
                  onPress={() => this.setState({selectedTime: item})}>
                  <LinearGradient
                    colors={
                      isSelected
                        ? Colors.gradient
                        : [Colors.white, Colors.white]
                    }
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 40 / 2,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        color: isSelected ? Colors.white : Colors.primary,
                        fontSize: 10,
                        fontWeight: '800',
                      }}>
                      {item}
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
          <ProfileTextInput
            label={'Street Address of the Appointment'}
            value={address}
            onChangeText={value => this.setState({address: value})}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 25,
            }}>
            <Text
              style={{
                fontSize: 14,
                color: Colors.secondary,
                fontWeight: '600',
              }}>
              Is this a recurring appointment?
            </Text>
            <Switch
              style={{transform: [{scale: Platform.OS == 'ios' ? 0.6 : 0.9}]}}
              trackColor={{false: Colors.secondary, true: Colors.primary}}
              thumbColor={isRecurring ? Colors.white : Colors.primary}
              ios_backgroundColor={
                isRecurring ? Colors.primary : Colors.secondary
              }
              onValueChange={() => this.setState({isRecurring: !isRecurring})}
              value={isRecurring}
            />
          </View>
          <ProfileTextInput
            label={'No of clients to be scheduled'}
            value={noOfClients}
            onChangeText={value => this.setState({noOfClients: value})}
            keyboardType="numeric"
            placeholder="1"
          />
          <CustomButton
            title="Select Therapist"
            onPress={() => NavService.navigate('TherapyProviders')}
          />
        </ScrollView>
      </AppBackground>
    );
  }
}

export default RequestAppointment;
