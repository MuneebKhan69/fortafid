import {Colors, NavService} from '../../../config';
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  LayoutAnimation,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component, useState} from 'react';

import CustomBackground from '../../../components/CustomBackground';
import CustomButton from '../../../components/CustomButton';
import GradientText from '../../../components/GradientText';
import Images from '../../../assets/Images';
import Therapies from '../../../components/TherapiesOnboarding';
import ReactNativeModal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';
import {ProfileTextInput} from '../../../components/CustomTextInput';
import TherapyProvider from '../../../components/TherapyProviderOnboarding';
import Checkbox from '../../../components/Checkbox';
import StarRating from 'react-native-star-rating';
import AnimatedLottieView from 'lottie-react-native';

const {width, height} = Dimensions.get('window');

const LatestTherapy = [
  {
    title: 'Super B-hydration',
    image: {
      uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe-XaRqDR6OIGw_1dN9vnQa25wB3oOHLH2tByzip9bUuzJqSUpDZ1zb7-Kc_ND4pYTOsQ&usqp=CAU`,
    },
    icon: Icons.superB,
    price: 199,
    duration: '30 Min',
  },
  {
    title: `Myer's Coktail`,
    image: {
      uri: `https://media.istockphoto.com/photos/young-woman-posing-with-slice-of-orange-on-her-face-on-yellow-picture-id964880538?b=1&k=20&m=964880538&s=170667a&w=0&h=tS8apDXzdiWqHdAw_uPQbAFDXgYwNg-MvuGatHuIZeU=`,
    },
    icon: Icons.myer,
    price: 199,
    duration: '30 Min',
  },
  {
    title: `Myer's Coktail`,
    image: {
      uri: `https://media.istockphoto.com/photos/young-woman-posing-with-slice-of-orange-on-her-face-on-yellow-picture-id964880538?b=1&k=20&m=964880538&s=170667a&w=0&h=tS8apDXzdiWqHdAw_uPQbAFDXgYwNg-MvuGatHuIZeU=`,
    },
    icon: Icons.myer,
    price: 199,
    duration: '30 Min',
  },
  {
    title: 'Super B-hydration',
    image: {
      uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe-XaRqDR6OIGw_1dN9vnQa25wB3oOHLH2tByzip9bUuzJqSUpDZ1zb7-Kc_ND4pYTOsQ&usqp=CAU`,
    },
    icon: Icons.superB,
    price: 199,
    duration: '30 Min',
  },
  {
    title: `Myer's Coktail`,
    image: {
      uri: `https://media.istockphoto.com/photos/young-woman-posing-with-slice-of-orange-on-her-face-on-yellow-picture-id964880538?b=1&k=20&m=964880538&s=170667a&w=0&h=tS8apDXzdiWqHdAw_uPQbAFDXgYwNg-MvuGatHuIZeU=`,
    },
    icon: Icons.myer,
    price: 199,
    duration: '30 Min',
  },
  {
    title: `Myer's Coktail`,
    image: {
      uri: `https://media.istockphoto.com/photos/young-woman-posing-with-slice-of-orange-on-her-face-on-yellow-picture-id964880538?b=1&k=20&m=964880538&s=170667a&w=0&h=tS8apDXzdiWqHdAw_uPQbAFDXgYwNg-MvuGatHuIZeU=`,
    },
    icon: Icons.myer,
    price: 199,
    duration: '30 Min',
  },
  {
    title: 'Super B-hydration',
    image: {
      uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe-XaRqDR6OIGw_1dN9vnQa25wB3oOHLH2tByzip9bUuzJqSUpDZ1zb7-Kc_ND4pYTOsQ&usqp=CAU`,
    },
    icon: Icons.superB,
    price: 199,
    duration: '30 Min',
  },
  {
    title: `Myer's Coktail`,
    image: {
      uri: `https://media.istockphoto.com/photos/young-woman-posing-with-slice-of-orange-on-her-face-on-yellow-picture-id964880538?b=1&k=20&m=964880538&s=170667a&w=0&h=tS8apDXzdiWqHdAw_uPQbAFDXgYwNg-MvuGatHuIZeU=`,
    },
    icon: Icons.myer,
    price: 199,
    duration: '30 Min',
  },
];

const providers = [
  {
    name: 'Caroline Lee',
    email: 'caroline@domain.com',
    image:
      'https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTl8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800',

    city: 'Phoenix',
    state: 'Arizona',
    distance: Math.floor(Math.random() * (100 - 1)) + 1,
    rating: 4.4,
    price: 40,
  },
  {
    name: 'Jimmy Johnson',
    email: 'jimmy@domain.com',
    image:
      'https://images.unsplash.com/photo-1618641986557-1ecd230959aa?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800',

    city: 'Phoenix',
    state: 'Arizona',
    distance: Math.floor(Math.random() * (100 - 1)) + 1,
    rating: 4.8,
    price: 42,
  },
  {
    name: 'Blaire Grace',
    email: 'blaire@domain.com',
    image:
      'https://images.unsplash.com/photo-1474978528675-4a50a4508dc3?ixlib=rb-1.2.1&raw_url=true&q=60&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800',

    city: 'Phoenix',
    state: 'Arizona',
    distance: Math.floor(Math.random() * (100 - 1)) + 1,
    rating: 4.1,
    price: 45,
  },
  {
    name: 'Bree Mccullough',
    email: 'bree@domain.com',
    image:
      'https://images.unsplash.com/photo-1577565177023-d0f29c354b69?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800',

    city: 'Phoenix',
    state: 'Arizona',
    distance: Math.floor(Math.random() * (100 - 1)) + 1,
    rating: 3.9,
    price: 60,
  },
  {
    name: 'Aliana Rhoades',
    email: 'aliana@domain.com',
    image:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800',

    city: 'Phoenix',
    state: 'Arizona',
    distance: Math.floor(Math.random() * (100 - 1)) + 1,
    rating: 4.7,
    price: 50,
  },
];
export class Onboarding extends Component {
  state = {index: 0, selectedIndex: 0};
  render() {
    const {index, selectedIndex} = this.state;
    const indicator = new Array(7).fill(0);
    return (
      <CustomBackground back={false}>
        {index == 0 ? null : (
          <View
            style={{
              width: '100%',
              borderRadius: 15,
              position: 'absolute',
              top: -30,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            {indicator.map((item, i) => {
              return (
                <>
                  <View
                    style={{
                      backgroundColor: i < index ? Colors.primary : Colors.grey,
                      height: 15,
                      width: 15,
                      borderRadius: 15,
                      marginLeft: -3,
                      zIndex: 99,
                    }}
                  />
                  {i < 6 && (
                    <View
                      style={{
                        backgroundColor:
                          i + 1 < index ? Colors.primary : Colors.grey,
                        height: 5,
                        width: 35,
                        marginLeft: -5,
                      }}
                    />
                  )}
                </>
              );
            })}
          </View>
        )}

        {index == 0 ? (
          <InitialStep />
        ) : index == 1 ? (
          <Step1
            selectedIndex={selectedIndex}
            onCheckboxPressed={index => this.setState({selectedIndex: index})}
          />
        ) : index == 2 ? (
          <Step2 />
        ) : index == 3 ? (
          <Step3 />
        ) : index == 4 ? (
          <Step4 />
        ) : index == 5 ? (
          <Step5 />
        ) : index == 6 ? (
          <Step6 />
        ) : (
          <Step7 />
        )}
        <CustomButton
          title={index == 6 ? 'Schedule' : index > 6 ? 'Get Fortafid' : 'Next'}
          onPress={() => {
            LayoutAnimation.linear();
            index > 6
              ? NavService.reset(0, [{name: 'UserAppStack'}])
              : this.setState({index: index + 1});
          }}
        />
        {index == 0 || index > 6 ? (
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: 15,
              marginBottom: 15,
            }}
            onPress={() => NavService.reset(0, [{name: 'UserAppStack'}])}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: Colors.secondary,
              }}></Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: 15,
              marginBottom: 15,
            }}
            onPress={() => NavService.reset(0, [{name: 'UserAppStack'}])}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: Colors.secondary,
              }}>
              Skip for Now
            </Text>
          </TouchableOpacity>
        )}
      </CustomBackground>
    );
  }
}

export default Onboarding;

const InitialStep = () => (
  <View
    style={{
      alignItems: 'center',
      marginHorizontal: 25,
      flex: 1,
      // justifyContent: 'center',
    }}>
    <Text style={{color: Colors.black, fontSize: 20, fontWeight: '600'}}>
      Welcome to Fortafid{'\n'}Ready to Get Started?
    </Text>
    {/* <Text
      style={{
        color: Colors.black,
        fontSize: 12,
        fontWeight: '300',
        marginVertical: 15,
        textAlign: 'center',
      }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
      ultrices gravida. Riss commodo viverra maecenas.
    </Text> */}
  </View>
);
const Step1 = ({selectedIndex, onCheckboxPressed, index}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selected, setSelected] = useState(0);
  const {title, image, icon} = LatestTherapy[selected];
  const benefits = `Tempor veniam nisi ut et commodo aliqua voluptate ut irure ullamco. Ipsum Lorem enim sunt aliqua enim tempor reprehenderit veniam aute dolore laborum cillum cupidatat. Sunt in Lorem do deserunt nulla quis pariatur aute eiusmod aute eiusmod adipisicing. Culpa non Lorem ut aliqua anim. Sunt eiusmod quis deserunt ex est ut exercitation irure enim do amet officia enim. Tempor reprehenderit Lorem ex adipisicing. Fugiat labore id in dolor voluptate id excepteur.`;
  const ingredients = `Consectetur enim labore commodo adipisicing consequat dolore enim labore adipisicing in. Minim voluptate enim ex incididunt. Et elit anim deserunt velit veniam culpa. Pariatur tempor adipisicing in mollit tempor et. Consequat quis anim non velit occaecat. Quis Lorem commodo ex consectetur adipisicing aliqua ullamco sunt ut officia ea tempor. Laborum dolor magna duis nisi tempor qui pariatur cillum non aliqua officia officia ullamco adipisicing.

Est amet irure aliqua dolore enim laboris. Nostrud eu veniam reprehenderit duis reprehenderit culpa commodo proident aliquip nulla veniam laborum culpa eiusmod. Excepteur cupidatat elit veniam Lorem dolor sunt occaecat minim ad minim. Aliquip reprehenderit minim in et id ullamco commodo eu. Culpa aliqua eiusmod dolor proident aliquip elit magna consectetur consectetur enim enim non. Eu ipsum deserunt officia quis ut consequat elit reprehenderit dolor velit ad culpa consequat eu.

Dolor laborum deserunt enim incididunt nulla ea dolor ut nisi aute sint Lorem. Laborum mollit fugiat consequat qui non adipisicing ea pariatur non est nulla ad fugiat. Enim aliqua mollit ad velit id quis Lorem pariatur adipisicing aliquip.`;
  return (
    <View
      style={{
        alignItems: 'center',
        marginHorizontal: 25,
        flex: 1,
      }}>
      <ReactNativeModal
        isVisible={isVisible}
        onBackdropPress={() => setIsVisible(false)}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: width - 60,
              height: height / 1.5,
              backgroundColor: Colors.white,
              paddingHorizontal: 20,
              borderRadius: 15,
            }}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{flex: 1, marginTop: 10}}
              contentContainerStyle={{flexGrow: 1, paddingBottom: 20}}>
              <Text
                style={{
                  color: Colors.primary,
                  marginTop: 4,
                  fontWeight: '600',
                  fontSize: 15,
                  alignSelf: 'center',
                }}>
                {title}
              </Text>
              <TouchableOpacity
                onPress={() => setIsVisible(false)}
                style={{position: 'absolute', right: 0}}>
                <Text
                  style={{
                    color: Colors.grey,
                    fontWeight: 'bold',
                    fontSize: 18,
                  }}>
                  X
                </Text>
              </TouchableOpacity>
              <ImageBackground
                source={image}
                imageStyle={{
                  borderTopLeftRadius: 5,
                  borderTopRightRadius: 5,
                }}
                style={{
                  height: width / 2.5,
                  width: '100%',
                  resizeMode: 'cover',
                  borderTopLeftRadius: 5,
                  borderTopRightRadius: 5,
                  justifyContent: 'flex-end',
                  marginTop: 10,
                  ...Shadows.shadow3,
                }}>
                <Image
                  source={Images.therapyBackground}
                  style={{
                    width: ((width - 60) / 2) * 0.7,
                    height: ((width - 60) / 2) * 0.7 * 0.521,

                    resizeMode: 'contain',
                    bottom: -1,
                    zIndex: 95,
                  }}
                />
                <Image
                  source={icon}
                  style={{
                    width: 25,
                    height: 25,
                    resizeMode: 'contain',
                    position: 'absolute',
                    bottom: 15,
                    left: 13,
                    zIndex: 99,
                  }}
                />
              </ImageBackground>
              <View
                style={{
                  flexDirection: 'row',
                  marginVertical: 20,
                  alignItems: 'center',
                }}>
                <GradientText
                  style={{
                    fontSize: 20,
                    fontWeight: '600',
                    marginRight: 5,
                  }}>
                  Therapy:
                </GradientText>
                <Text
                  style={{
                    color: Colors.grey,
                    marginTop: 4,
                    fontWeight: '600',
                    fontSize: 15,
                  }}>
                  {title}
                </Text>
              </View>
              <GradientText
                style={{
                  fontSize: 20,
                  fontWeight: '600',
                  marginRight: 5,
                }}>
                Benefits:
              </GradientText>
              <Text
                style={{
                  color: Colors.grey,
                  marginTop: 10,
                  fontSize: 12,
                }}>
                {benefits}
              </Text>
              <GradientText
                style={{
                  fontSize: 20,
                  fontWeight: '600',
                  marginRight: 5,
                  marginTop: 20,
                }}>
                Ingredients:
              </GradientText>
              <Text
                style={{
                  color: Colors.grey,
                  marginTop: 10,
                  fontSize: 12,
                }}>
                {ingredients}
              </Text>
              {/* <CustomButton
                title="Schedule An Appointment"
                onPress={() => NavService.navigate('RequestAppointment')}
              /> */}
            </ScrollView>
          </View>
        </View>
      </ReactNativeModal>
      <GradientText style={{fontSize: 36, fontWeight: '700'}}>
        Step 1
      </GradientText>
      <Text
        style={{
          color: Colors.black,
          fontSize: 15,
          fontWeight: '600',
          marginVertical: 15,
        }}>
        Choose the service(s) you would like.
      </Text>
      <FlatList
        // key={key}
        data={LatestTherapy}
        numColumns={2}
        style={{maxHeight: height / 2, width: width - 60}}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <Therapies
            title={item.title}
            image={item.image}
            icon={item.icon}
            left={index % 2 == 0}
            last={index % 2 != 0}
            price={item.price}
            duration={item.duration}
            isChecked={selectedIndex == index}
            onCheckBokPress={() => onCheckboxPressed(index)}
            onPress={() => {
              setSelected(index);
              setIsVisible(true);
            }}
          />
        )}
      />
      {/* <Image
      source={Images.step1}
      style={{width: width - 50, height: width - 150, resizeMode: 'contain'}}
    /> */}
    </View>
  );
};
const Step2 = () => {
  const [markedDates, setMarkedDates] = useState({});
  const [selectedTime, setSelectedTime] = useState('9 AM');
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
  return (
    <View style={{alignItems: 'center', marginHorizontal: 25, flex: 1}}>
      <GradientText style={{fontSize: 36, fontWeight: '700'}}>
        Step 2
      </GradientText>
      <Text
        style={{
          color: Colors.black,
          fontSize: 15,
          fontWeight: '600',
          marginVertical: 15,
        }}>
        Tell us when you would like your treatment.
      </Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{maxHeight: height / 2, width: width - 60}}
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
              setMarkedDates({
                [day.dateString]: {
                  marked: true,
                  date: day.dateString,
                },
                data: {marked: true, date: day.dateString},
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
                            width: (width - 100) / 7,
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
                onPress={() => setSelectedTime(item)}>
                <LinearGradient
                  colors={
                    isSelected ? Colors.gradient : [Colors.white, Colors.white]
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
      </ScrollView>
    </View>
  );
};
const Step3 = () => {
  const [address, setAddress] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);
  const [noOfClients, setNoOfClients] = useState(1);
  return (
    <View style={{alignItems: 'center', marginHorizontal: 25, flex: 1}}>
      <GradientText style={{fontSize: 36, fontWeight: '700'}}>
        Step 3
      </GradientText>
      <Text
        style={{
          color: Colors.black,
          fontSize: 15,
          fontWeight: '600',
          marginVertical: 15,
        }}>
        Tell us where we will be providing service(s).
      </Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          maxHeight: height / 2,
          width: width - 60,
        }}
        contentContainerStyle={{
          paddingBottom: 20,
        }}>
        <Image
          source={Images.map}
          style={{
            width: width - 60,
            height: (width - 60) / 1.43,
            resizeMode: 'contain',
          }}
        />
        <ProfileTextInput
          label={'Street Address of the Appointment'}
          value={address}
          onChangeText={value => setAddress(value)}
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
            onValueChange={() => setIsRecurring(!isRecurring)}
            value={isRecurring}
          />
        </View>
        <ProfileTextInput
          label={'No of clients to be scheduled'}
          value={noOfClients}
          onChangeText={value => setNoOfClients(value)}
          keyboardType="numeric"
          placeholder="1"
        />
      </ScrollView>
    </View>
  );
};
const Step4 = () => {
  const [checkedId, setCheckedId] = useState(0);
  return (
    <View style={{alignItems: 'center', marginHorizontal: 25, flex: 1}}>
      <GradientText style={{fontSize: 36, fontWeight: '700'}}>
        Step 4
      </GradientText>
      <Text
        style={{
          color: Colors.black,
          fontSize: 15,
          fontWeight: '600',
          marginVertical: 15,
        }}>
        Choose your provider.
      </Text>
      <FlatList
        data={providers}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        style={{
          maxHeight: height / 2,
          width: width - 60,
        }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <TherapyProvider
            onPress={() =>
              NavService.navigate('TherapistProfile', {data: item})
            }
            isChecked={index === checkedId}
            onCheckBokPress={() => setCheckedId(index)}
            item={item}
            left={index % 2 == 0}
            last={index % 2 != 0}
          />
        )}
      />
    </View>
  );
};
const Step5 = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <View style={{alignItems: 'center', marginHorizontal: 25, flex: 1}}>
      <GradientText style={{fontSize: 36, fontWeight: '700'}}>
        Step 5
      </GradientText>
      <Text
        style={{
          color: Colors.black,
          fontSize: 15,
          fontWeight: '600',
          marginVertical: 15,
        }}>
        Accept terms and conditions.
      </Text>
      <View
        style={{
          maxHeight: height / 2,
          width: width - 60,
        }}>
        <ScrollView
          style={{
            borderRadius: 15,
            borderWidth: 0.5,
            borderColor: Colors.grey,
          }}
          contentContainerStyle={{flexGrow: 1, margin: 10}}>
          <Text
            style={{
              fontSize: 12,
              color: Colors.black,
              marginBottom: 20,
            }}>
            Anim consectetur exercitation veniam amet ad ipsum. Adipisicing ex
            tempor sit ullamco consequat ad officia commodo labore. Labore
            laborum elit do nisi est in ullamco aliqua. Ex veniam minim ea nulla
            fugiat deserunt ullamco ipsum. Minim fugiat occaecat incididunt
            ullamco magna cillum deserunt anim quis reprehenderit pariatur enim
            anim. Minim enim laborum id est laboris aliqua minim ut amet. Dolore
            occaecat veniam sunt consectetur cupidatat officia cillum ut
            excepteur ullamco. Fugiat laborum duis officia et quis culpa et
            ullamco nisi consectetur. Irure occaecat qui est proident velit ad.
            Minim Lorem et ullamco incididunt aliquip est duis sint irure
            pariatur tempor. Deserunt commodo consequat Lorem et excepteur
            consequat fugiat ad. Laborum sint aliqua labore excepteur in
            exercitation. Tempor enim excepteur et consectetur voluptate
            consequat. Veniam exercitation ipsum ad aute quis fugiat excepteur
            elit veniam eiusmod amet duis eu. Sit aute laboris laboris consequat
            non. Culpa esse aliqua voluptate enim fugiat laborum sit consectetur
            est tempor incididunt. Commodo sit Lorem velit proident. Aliqua
            laboris officia elit anim irure irure non voluptate aute sunt et
            nostrud. Ad ea officia sit occaecat nulla nisi nisi consectetur
            velit. Nisi minim reprehenderit non labore. Aliqua ipsum esse amet
            tempor culpa anim dolore tempor Lorem aute sit ex. Dolor tempor
            reprehenderit laborum velit ullamco consectetur aliqua. Mollit
            aliquip est proident ipsum incididunt amet sunt cillum ipsum aute.
            Aute eu ea quis veniam mollit mollit nostrud nostrud. Aute
            exercitation proident magna consequat culpa amet sint ea eiusmod
            cillum ex est deserunt. Eiusmod minim culpa culpa do quis incididunt
            consequat mollit ex est sint consectetur voluptate. Nostrud minim
            pariatur dolore nostrud laboris voluptate minim incididunt veniam
            labore deserunt. Ullamco laboris nostrud incididunt do est pariatur
            laborum dolor. Sint nisi culpa Lorem labore dolor ipsum laboris
            minim fugiat. Magna ea id veniam sint. Velit tempor ad occaecat in
            ad occaecat sit proident adipisicing qui. Nostrud tempor elit enim
            fugiat veniam eu sunt aliquip eiusmod consectetur. Duis culpa
            consectetur laborum eu pariatur velit adipisicing duis ullamco
            fugiat consequat dolore consectetur nulla. Aliqua excepteur Lorem
            nulla aute officia id nostrud aute adipisicing. Voluptate
            reprehenderit officia sunt magna do reprehenderit et laborum laborum
            consectetur velit reprehenderit nulla mollit. Veniam ex aliquip
            adipisicing officia sunt adipisicing ut. Sunt qui quis amet officia
            esse incididunt enim minim eu excepteur sit sint adipisicing. Id
            aliquip fugiat in velit incididunt adipisicing Lorem exercitation
            officia id. Minim est irure deserunt ex in nulla eu qui sunt
            exercitation dolor. Eiusmod in est pariatur ut tempor anim eu. Velit
            commodo dolore amet sit consequat officia ex occaecat sint Lorem
            sunt velit aliquip. Duis sunt nisi dolor do commodo est veniam anim.
            Veniam amet anim nostrud adipisicing duis cillum ut veniam non elit
            enim elit velit. Culpa eiusmod minim dolore deserunt mollit. Est
            aliquip ad ex enim.
          </Text>
        </ScrollView>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
          <Checkbox
            isChecked={isChecked}
            onPress={() => setIsChecked(!isChecked)}
          />
          <Text
            style={{
              fontSize: 15,
              fontWeight: '600',
              color: Colors.black,
              marginLeft: 10,
            }}>
            I Accept the terms and conditions
          </Text>
        </View>
      </View>
    </View>
  );
};
const Step6 = () => (
  <View style={{alignItems: 'center', marginHorizontal: 25, flex: 1}}>
    <GradientText style={{fontSize: 36, fontWeight: '700'}}>
      Step 6
    </GradientText>
    <Text
      style={{
        color: Colors.black,
        fontSize: 15,
        fontWeight: '600',
        marginVertical: 15,
      }}>
      Schedule your session(s).
    </Text>
    <ScrollView
      style={{
        maxHeight: height / 2,
        width: width - 60,
      }}>
      <GradientText style={{fontSize: 18, fontWeight: '600'}}>
        Therapist
      </GradientText>
      <View
        style={{
          marginVertical: 15,
          backgroundColor: Colors.white,
          borderRadius: 10,
          padding: 10,
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 3,
          ...Shadows.shadow3,
        }}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
          }}
          style={{
            width: 75,
            height: 75,
            borderRadius: 75 / 2,
          }}
        />
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            marginLeft: 15,
          }}>
          <Text
            numberOfLines={1}
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: Colors.secondary,
            }}>
            Mark Smith
          </Text>
          <Text
            numberOfLines={1}
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: Colors.darkGrey,
            }}>
            mark.smith@domain.com
          </Text>
          <View style={{width: '55%', marginTop: 5}}>
            <StarRating
              fullStar={Icons.starFilled}
              emptyStar={Icons.starEmpty}
              disabled={true}
              starSize={18}
              maxStars={5}
              rating={4}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
        }}>
        <GradientText style={{fontSize: 18, fontWeight: '600'}}>
          Therapy :
        </GradientText>
        <Text
          numberOfLines={2}
          style={{
            fontSize: 14,
            fontWeight: '500',
            color: Colors.grey,
            marginLeft: 7,
            flex: 1,
            marginTop: 4,
          }}>
          Alleviate, Myers Cocktail & Hydration
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          // alignItems: 'center',
          marginTop: 10,
        }}>
        <GradientText style={{fontSize: 18, fontWeight: '600'}}>
          Date & Time :
        </GradientText>
        <Text
          numberOfLines={1}
          style={{
            fontSize: 14,
            fontWeight: '500',
            color: Colors.grey,
            marginLeft: 7,
            flex: 1,
            marginTop: 4,
          }}>
          {moment().format('llll')}
        </Text>
      </View>
      <GradientText style={{fontSize: 18, fontWeight: '600', marginTop: 15}}>
        Details
      </GradientText>
      <View
        style={{
          backgroundColor: Colors.white,
          borderRadius: 10,
          padding: 10,
          ...Shadows.shadow3,
          marginTop: 10,
          marginBottom: 25,
          marginHorizontal: 3,
        }}>
        <ScrollView
          style={{
            maxHeight: height / 4,
          }}
          showsVerticalScrollIndicator={false}>
          <Text
            style={{
              fontSize: 13,
              fontWeight: '300',
              color: Colors.darkGrey,
            }}>
            Magna quis irure exercitation laboris laboris sunt mollit. Sint id
            duis Lorem dolore irure proident laborum minim aute officia.
            Consequat laborum ipsum sunt occaecat nisi qui est ullamco do
            excepteur labore occaecat culpa. Ad tempor elit do sint quis nisi
            eiusmod ut sint sunt magna eiusmod exercitation. Sint dolore Lorem
            ea sunt voluptate. Adipisicing velit ut Lorem sint laboris do ut
            duis labore.{'\n\n'} Magna quis irure exercitation laboris laboris
            sunt mollit. Sint id duis Lorem dolore irure proident laborum minim
            aute officia. Consequat laborum ipsum sunt occaecat nisi qui est
            ullamco do excepteur labore occaecat culpa. Ad tempor elit do sint
            quis nisi eiusmod ut sint sunt magna eiusmod exercitation. Sint
            dolore Lorem ea sunt voluptate. Adipisicing velit ut Lorem sint
            laboris do ut duis labore.
          </Text>
        </ScrollView>
      </View>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 10,
        }}>
        <Text
          style={{
            color: Colors.black,
            fontSize: 14,
            fontWeight: '500',
          }}>
          Alleviate :
        </Text>
        <Text
          style={{
            color: Colors.darkGrey,
            fontSize: 14,
            fontWeight: '500',
          }}>
          $100.00
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 10,
        }}>
        <Text
          style={{
            color: Colors.black,
            fontSize: 14,
            fontWeight: '500',
          }}>
          Myers Cocktail :
        </Text>
        <Text
          style={{
            color: Colors.darkGrey,
            fontSize: 14,
            fontWeight: '500',
          }}>
          $150.00
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 10,
        }}>
        <Text
          style={{
            color: Colors.black,
            fontSize: 14,
            fontWeight: '500',
          }}>
          Hydration:
        </Text>
        <Text
          style={{
            color: Colors.darkGrey,
            fontSize: 14,
            fontWeight: '500',
          }}>
          $250.00
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          height: 0.5,
          backgroundColor: Colors.grey,
          marginBottom: 20,
        }}
      />
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 10,
        }}>
        <GradientText style={{fontSize: 18, fontWeight: '600'}}>
          Total Price:
        </GradientText>
        <Text
          style={{
            color: Colors.black,
            fontSize: 18,
            fontWeight: '600',
          }}>
          $500.00
        </Text>
      </View>
    </ScrollView>
  </View>
);
const Step7 = () => (
  <View style={{alignItems: 'center', marginHorizontal: 25, flex: 1}}>
    <GradientText style={{fontSize: 36, fontWeight: '700'}}> </GradientText>
    <Text
      style={{
        color: Colors.black,
        fontSize: 15,
        fontWeight: '600',
        marginVertical: 15,
      }}>
      {' '}
    </Text>
    <View
      style={{
        height: height / 2,
        width: width - 60,
        // justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: Colors.primary,
          fontSize: 24,
        }}>
        Finalizing your request
      </Text>
      {/* <Image
        source={Images.fortafidDrop}
        style={{
          width: width / 3,
          height: width / 3,
          resizeMode: 'contain',
          marginTop: 40,
        }} 
      />
        */}
      <View
        style={{
          // flex: 1,
          backgroundColor: Colors.white,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <AnimatedLottieView
          ref={animation => {
            this.animation = animation;
          }}
          source={require('../../Splash/SplashLogo.json')}
          autoPlay
          loop
          style={{
            height: width / 1.3,
            width: width,
          }}
          resizeMode="cover"
        />
      </View>
    </View>
  </View>
);
