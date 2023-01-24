import {Colors, NavService} from '../../../config';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';

import AppBackground from '../../../components/Appbackground';
import GradientText from '../../../components/GradientText';
import Icons from '../../../assets/Icons';
import LatestTherapies from '../../../components/LatestTherapies';

import Swiper from 'react-native-swiper';
import {connect} from 'react-redux';
import moment from 'moment';

const {width} = Dimensions.get('window');

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
];
const upcomingAppointments = [
  {
    title: 'Super B-hydration',
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe-XaRqDR6OIGw_1dN9vnQa25wB3oOHLH2tByzip9bUuzJqSUpDZ1zb7-Kc_ND4pYTOsQ&usqp=CAU`,

    scheduledAt: Date.now() - 1000 * 3 * 60 * 24 * 2,
    location: 'San Jose, CA',
  },
  {
    title: `Myer's Coktail`,
    image: `https://media.istockphoto.com/photos/young-woman-posing-with-slice-of-orange-on-her-face-on-yellow-picture-id964880538?b=1&k=20&m=964880538&s=170667a&w=0&h=tS8apDXzdiWqHdAw_uPQbAFDXgYwNg-MvuGatHuIZeU=`,

    scheduledAt: Date.now() - 1000 * 3 * 60 * 24 * 2,
    location: 'San Jose, CA',
  },
  {
    title: `Myer's Coktail`,
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe-XaRqDR6OIGw_1dN9vnQa25wB3oOHLH2tByzip9bUuzJqSUpDZ1zb7-Kc_ND4pYTOsQ&usqp=CAU`,

    scheduledAt: Date.now() - 1000 * 3 * 60 * 24 * 2,
    location: 'San Jose, CA',
  },
];
upcomingAppointmentImages = [
  {
    image: {
      uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe-XaRqDR6OIGw_1dN9vnQa25wB3oOHLH2tByzip9bUuzJqSUpDZ1zb7-Kc_ND4pYTOsQ&usqp=CAU`,
    },
  },

  {
    image: {
      uri: `https://media.istockphoto.com/photos/young-woman-posing-with-slice-of-orange-on-her-face-on-yellow-picture-id964880538?b=1&k=20&m=964880538&s=170667a&w=0&h=tS8apDXzdiWqHdAw_uPQbAFDXgYwNg-MvuGatHuIZeU=`,
    },
  },
  {
    image: {
      uri: `https://media.istockphoto.com/photos/young-woman-posing-with-slice-of-orange-on-her-face-on-yellow-picture-id964880538?b=1&k=20&m=964880538&s=170667a&w=0&h=tS8apDXzdiWqHdAw_uPQbAFDXgYwNg-MvuGatHuIZeU=`,
    },
  },
];

export class Home extends Component {
  componentDidMount() {
    this.props.saveUser({
      name: 'John Smith',
      email: 'john.smith@abc.com',
      image:
        'https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      bio: 'I am a software developer',
      licenseNumber: '123456789',
      driversLicense: '123456789',
      state: 'Arizona',
      city: 'Phoenix',
      address: '221B Baker Street',
      insurancePolicyNumber: '0987654321',
      insuranceExpiryDate: moment().format('MMM DD, YYYY'),
      role: 'service provider',
    });
  }
  render() {
    return (
      <AppBackground
        title={'Home'}
        childrenContainerStyle={{marginHorizontal: 0}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{flex: 1}}
          contentContainerStyle={{flexGrow: 1, paddingTop: 15}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
            }}>
            <GradientText
              style={{
                fontSize: 18,
                fontWeight: '700',
              }}>
              Latest Therapies
            </GradientText>
            {/* <TouchableOpacity activeOpacity={0.8}>
              <Text
                style={{
                  color: Colors.primary,
                  fontSize: 14,
                  fontWeight: '600',
                  textDecorationLine: 'underline',
                }}>
                View All
              </Text>
            </TouchableOpacity> */}
          </View>
          <FlatList
            data={LatestTherapy}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{
              height: width / 2.5,
            }}
            contentContainerStyle={{
              paddingHorizontal: 20,
              marginTop: 20,
              justifyContent: 'flex-start',
              height: width / 1.6,
            }}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <LatestTherapies
                title={item.title}
                image={item.image}
                icon={item.icon}
                last={index === LatestTherapy.length - 1}
                price={item.price}
                duration={item.duration}
              />
            )}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              marginTop: 0,
            }}>
            <GradientText
              style={{
                fontSize: 18,
                fontWeight: '700',
              }}>
              Upcoming Appointments
            </GradientText>
            <TouchableOpacity activeOpacity={0.8}>
              <Text
                style={{
                  color: Colors.darkGrey,
                  fontSize: 14,
                  fontWeight: '600',
                  textDecorationLine: 'underline',
                }}>
                View All
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 200,
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
              marginTop: 5,
            }}>
            <Swiper
              showsButtons={false}
              width={width * 0.9}
              loop={false}
              dotStyle={{
                backgroundColor: Colors.grey,
                width: 15,
                height: 15,
              }}
              activeDotStyle={{
                width: 15,
                height: 15,
                backgroundColor: Colors.primary,
              }}>
              {upcomingAppointments.length &&
                upcomingAppointments.map((item, index) => {
                  console.log('====================================');
                  console.log(item, 'item');
                  console.log('====================================');
                  return (
                    <View
                      style={{
                        borderRadius: 10,
                      }}>
                      <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() =>
                          NavService.navigate('ClientDetails', {data: item})
                        }>
                        <Image
                          source={{uri: item?.image}}
                          style={{
                            resizeMode: 'cover',
                            width: width * 0.9,
                            height: 200,
                            borderRadius: 8,
                          }}
                        />
                      </TouchableOpacity>
                      <GradientText
                        style={{
                          marginBottom: 5,
                          fontSize: 16,
                          fontWeight: '600',
                        }}>
                        {item?.title}
                      </GradientText>

                      <Text
                        style={{
                          color: Colors.darkGrey,
                          marginBottom: 5,
                          fontSize: 14,
                        }}>
                        {moment(item?.scheduledAt).format('llll')}{' '}
                        {item?.location}
                      </Text>

                      <Text
                        style={{
                          color: Colors.darkGrey,
                          marginBottom: 5,
                          fontSize: 14,
                        }}>
                        {item?.location}
                      </Text>
                    </View>
                  );
                })}
            </Swiper>
          </View>
        </ScrollView>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => NavService.navigate('AvailableServices')}
          style={{
            shadowOpacity: 0.2,
            shadowRadius: 8,
            backgroundColor: Colors.white,
            height: 60,
            width: 60,
            borderRadius: 60 / 2,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            bottom: 20,
            right: 20,
          }}>
          <Image
            source={Icons.plus}
            style={{
              height: 30,
              width: 30,
            }}
          />
        </TouchableOpacity>
      </AppBackground>
    );
  }
}

function mapDispatch(dispatch) {
  return {
    saveUser: user => {
      dispatch({type: 'SAVE_USER', payload: user});
    },
  };
}

export default connect(null, mapDispatch)(Home);
