import {Colors, NavService, Shadows} from '../../../config';
import {
  Dimensions,
  FlatList,
  Image,
  LayoutAnimation,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';

import AppBackground from '../../../components/Appbackground';
import CustomButton from '../../../components/CustomButton';
import GradientText from '../../../components/GradientText';
import Icons from '../../../assets/Icons';
import LinearGradient from 'react-native-linear-gradient';
import ReactNativeModal from 'react-native-modal';
import StarRating from 'react-native-star-rating';
import moment from 'moment';

const {width} = Dimensions.get('window');

const upcomingAppointments = [
  {
    therapistName: 'Jimmy Johnson',
    therapistImage:
      'https://images.unsplash.com/photo-1618641986557-1ecd230959aa?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800',
    title: 'Super B-hydration',
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe-XaRqDR6OIGw_1dN9vnQa25wB3oOHLH2tByzip9bUuzJqSUpDZ1zb7-Kc_ND4pYTOsQ&usqp=CAU`,
    scheduledAt: Date.now() - 1000 * 3 * 60 * 24 * 2,
    location: 'San Jose, CA',
    icon: Icons.superB,
    price: 199,
    duration: '30 Min',
    status: 'confirmed',
  },
  {
    therapistName: 'Aliana Rhoades',
    therapistImage:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800',
    title: `Myer's Coktail`,
    image: `https://media.istockphoto.com/photos/young-woman-posing-with-slice-of-orange-on-her-face-on-yellow-picture-id964880538?b=1&k=20&m=964880538&s=170667a&w=0&h=tS8apDXzdiWqHdAw_uPQbAFDXgYwNg-MvuGatHuIZeU=`,
    scheduledAt: Date.now() - 1000 * 3 * 60 * 24 * 2,
    location: 'San Jose, CA',
    icon: Icons.superB,
    price: 199,
    duration: '30 Min',
    status: 'requested',
  },
  {
    therapistName: 'Jimmy Johnson',
    therapistImage:
      'https://images.unsplash.com/photo-1618641986557-1ecd230959aa?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800',
    title: 'Super B-hydration',
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe-XaRqDR6OIGw_1dN9vnQa25wB3oOHLH2tByzip9bUuzJqSUpDZ1zb7-Kc_ND4pYTOsQ&usqp=CAU`,
    scheduledAt: Date.now() - 1000 * 3 * 60 * 24 * 2,
    location: 'San Jose, CA',
    icon: Icons.superB,
    price: 199,
    duration: '30 Min',
    status: 'confirmed',
  },
];
const pastAppointments = [
  {
    title: `Myer's Coktail`,
    image: `https://media.istockphoto.com/photos/young-woman-posing-with-slice-of-orange-on-her-face-on-yellow-picture-id964880538?b=1&k=20&m=964880538&s=170667a&w=0&h=tS8apDXzdiWqHdAw_uPQbAFDXgYwNg-MvuGatHuIZeU=`,
    scheduledAt: Date.now() - 1000 * 3 * 60 * 24 * 2,
    location: 'San Jose, CA',
    icon: Icons.superB,
    price: 199,
    duration: '30 Min',
  },
  {
    title: 'Super B-hydration',
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe-XaRqDR6OIGw_1dN9vnQa25wB3oOHLH2tByzip9bUuzJqSUpDZ1zb7-Kc_ND4pYTOsQ&usqp=CAU`,
    scheduledAt: Date.now() - 1000 * 3 * 60 * 24 * 2,
    location: 'San Jose, CA',
    icon: Icons.superB,
    price: 199,
    duration: '30 Min',
  },
  {
    title: `Myer's Coktail`,
    image: `https://media.istockphoto.com/photos/young-woman-posing-with-slice-of-orange-on-her-face-on-yellow-picture-id964880538?b=1&k=20&m=964880538&s=170667a&w=0&h=tS8apDXzdiWqHdAw_uPQbAFDXgYwNg-MvuGatHuIZeU=`,
    scheduledAt: Date.now() - 1000 * 3 * 60 * 24 * 2,
    location: 'San Jose, CA',
    icon: Icons.superB,
    price: 199,
    duration: '30 Min',
  },
];

export class MyAppointments extends Component {
  state = {
    selected: 0,
    key: false,
  };
  render() {
    const {selected, key} = this.state;

    return (
      <AppBackground title={'My Appointments'} back notification={false}>
        <View
          style={{
            width: '100%',
            height: 50,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            disabled={selected === 0}
            style={{
              borderBottomColor: Colors.secondary,
              borderBottomWidth: selected === 0 ? 1 : 0,
            }}
            activeOpacity={0.8}
            onPress={() => {
              LayoutAnimation.linear();
              this.setState({selected: 0, key: !key});
            }}>
            {selected === 0 ? (
              <GradientText
                style={{
                  fontSize: 18,
                  fontWeight: '600',
                }}>
                Upcoming
              </GradientText>
            ) : (
              <Text
                style={{
                  color: Colors.darkGrey,
                  fontSize: 18,
                  fontWeight: '600',
                }}>
                Upcoming
              </Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            disabled={selected === 1}
            style={{
              borderBottomColor: Colors.secondary,
              borderBottomWidth: selected === 1 ? 1 : 0,
            }}
            activeOpacity={0.8}
            onPress={() => {
              LayoutAnimation.linear();
              this.setState({selected: 1, key: !key});
            }}>
            {selected === 1 ? (
              <GradientText
                style={{
                  fontSize: 18,
                  fontWeight: '600',
                }}>
                Completed
              </GradientText>
            ) : (
              <Text
                style={{
                  color: Colors.darkGrey,
                  fontSize: 18,
                  fontWeight: '600',
                }}>
                Completed
              </Text>
            )}
          </TouchableOpacity>
        </View>
        {selected === 0 ? (
          <FlatList
            key={key}
            data={upcomingAppointments}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{padding: 3}}
            renderItem={UpcomingAppointments}
          />
        ) : (
          <FlatList
            key={key}
            data={pastAppointments}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{padding: 3}}
            renderItem={({item}) => <CompletedAppointments item={item} />}
          />
        )}
      </AppBackground>
    );
  }
}

export default MyAppointments;

const UpcomingAppointments = ({item}) => {
  const {image} = item;
  return (
    <View
      style={{
        backgroundColor: Colors.white,
        borderRadius: 10,
        ...Shadows.shadow3,
        width: '100%',
        marginBottom: 20,
        // overflow: 'hidden',
      }}>
      <Image
        source={{uri: image}}
        style={{
          width: '100%',
          height: width / 2.2,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />
      <View style={{flexDirection: 'row'}}>
        <View style={{padding: 10, width: '60%'}}>
          <Text
            style={{color: Colors.secondary, fontSize: 16, fontWeight: '600'}}>
            {item?.title}
          </Text>
          <Text
            style={{
              color: Colors.darkGrey,
              fontSize: 12,
              fontWeight: '600',
              marginTop: 5,
            }}>
            {moment(item?.scheduledAt).format('llll')}
          </Text>
          <Text
            style={{
              color: Colors.darkGrey,
              fontSize: 12,
              fontWeight: '600',
              marginTop: 2,
            }}>
            {item?.location}
          </Text>
          <View
            style={{flexDirection: 'row', marginTop: 7, alignItems: 'center'}}>
            <Text
              style={{
                color: Colors.secondary,
                fontSize: 14,
                fontWeight: '600',
              }}>
              ${item?.price}
            </Text>
            <Image
              source={Icons.clock}
              style={{marginLeft: 15, width: 15, height: 15}}
            />
            <Text
              style={{
                color: Colors.secondary,
                fontSize: 14,
                fontWeight: '600',
                marginLeft: 5,
              }}>
              {item?.duration}
            </Text>
          </View>
        </View>
        <View style={{width: '40%'}}>
          {item?.status == 'confirmed' && (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                flex: 1,
              }}>
              <Image
                source={Icons?.confirmed}
                style={{width: 30, height: 30, resizeMode: 'contain'}}
              />
              <Text
                style={{
                  color: Colors.green,
                  fontSize: 14,
                  fontWeight: '600',
                  marginLeft: 5,
                }}>
                Confirmed
              </Text>
            </View>
          )}
          {item?.status == 'requested' && (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                flex: 1,
              }}>
              <Image
                source={Icons?.requested}
                style={{width: 25, height: 25, resizeMode: 'contain'}}
              />
              <Text
                style={{
                  color: Colors.google,
                  fontSize: 14,
                  fontWeight: '600',
                  marginLeft: 5,
                }}>
                Requested
              </Text>
            </View>
          )}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              NavService.navigate('Messages', {
                screen: 'Chat',
                params: {
                  data: {
                    name: item?.therapistName,
                    image: item?.therapistImage,
                  },
                },
              })
            }
            style={{
              width: '100%',
              height: 45,
              bottom: 0,
              right: 0,
            }}>
            <LinearGradient
              colors={Colors.gradient}
              style={{
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                borderBottomRightRadius: 10,
                borderTopLeftRadius: 10,
              }}>
              <Text
                style={{color: Colors.white, fontWeight: '600', fontSize: 16}}>
                Message
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const CompletedAppointments = ({item}) => {
  const [showModal, setShowModal] = React.useState(false);
  const [starCount, setStarCount] = React.useState(3);
  const {image} = item;
  return (
    <View
      style={{
        backgroundColor: Colors.white,
        borderRadius: 10,
        ...Shadows.shadow3,
        width: '100%',
        marginBottom: 20,
        // overflow: 'hidden',
      }}>
      <ReactNativeModal isVisible={showModal}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              backgroundColor: Colors.white,
              width: '100%',
              padding: 15,
              borderRadius: 15,
              alignItems: 'center',
              paddingBottom: 30,
            }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setShowModal(false)}
              style={{
                width: 20,
                height: 20,
                alignSelf: 'flex-end',
              }}>
              <Image
                source={Icons.cross}
                style={{width: 20, height: 20, alignSelf: 'flex-end'}}
              />
            </TouchableOpacity>
            <View style={{width: '90%'}}>
              <Text
                style={{color: Colors.black, fontSize: 22, fontWeight: '600'}}>
                Ratings
              </Text>
              <View style={{alignSelf: 'center', marginTop: 20}}>
                <StarRating
                  fullStar={Icons.starFilled}
                  // halfStar={Icons.star_half}
                  emptyStar={Icons.starEmpty}
                  starSize={25}
                  disabled={false}
                  maxStars={5}
                  rating={starCount}
                  selectedStar={rating => setStarCount(rating)}
                />
              </View>
              <Text
                style={{
                  color: Colors.black,
                  fontSize: 22,
                  fontWeight: '600',
                  width: '100%',
                  marginTop: 15,
                }}>
                Feedback:
              </Text>
              <View
                style={{
                  width: '100%',
                  height: 150,
                  borderRadius: 8,
                  borderWidth: 1,
                  borderColor: Colors.black,
                  marginTop: 10,
                  backgroundColor: Colors.background,
                  padding: 10,
                }}>
                <TextInput
                  multiline
                  style={{
                    width: '100%',
                    height: '100%',
                    color: Colors.black,
                    textAlignVertical: 'top',
                  }}
                  placeholder="Share your feedback here"
                  placeholderTextColor={Colors.black}
                  showsVerticalScrollIndicator={false}
                />
              </View>
            </View>
            <CustomButton
              buttonStyle={{width: '50%'}}
              title="Submit"
              onPress={() => setShowModal(false)}
            />
          </View>
        </View>
      </ReactNativeModal>
      <Image
        source={{uri: image}}
        style={{
          width: '100%',
          height: width / 2.2,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />
      <View style={{flexDirection: 'row'}}>
        <View style={{padding: 10, width: '60%'}}>
          <Text
            style={{color: Colors.secondary, fontSize: 16, fontWeight: '600'}}>
            {item?.title}
          </Text>
          <Text
            style={{
              color: Colors.darkGrey,
              fontSize: 12,
              fontWeight: '600',
              marginTop: 5,
            }}>
            {moment(item?.scheduledAt).format('llll')}
          </Text>
          <Text
            style={{
              color: Colors.darkGrey,
              fontSize: 12,
              fontWeight: '600',
              marginTop: 2,
            }}>
            {item?.location}
          </Text>
          <View
            style={{flexDirection: 'row', marginTop: 7, alignItems: 'center'}}>
            <Text
              style={{
                color: Colors.secondary,
                fontSize: 14,
                fontWeight: '600',
              }}>
              ${item?.price}
            </Text>
            <Image
              source={Icons.clock}
              style={{marginLeft: 15, width: 15, height: 15}}
            />
            <Text
              style={{
                color: Colors.secondary,
                fontSize: 14,
                fontWeight: '600',
                marginLeft: 5,
              }}>
              {item?.duration}
            </Text>
          </View>
        </View>
        <View style={{width: '40%', justifyContent: 'flex-end'}}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setShowModal(true)}
            style={{
              width: '100%',
              height: 45,
              bottom: 0,
              right: 0,
            }}>
            <LinearGradient
              colors={Colors.gradient}
              style={{
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                borderBottomRightRadius: 10,
                borderTopLeftRadius: 10,
              }}>
              <Text
                style={{color: Colors.white, fontWeight: '600', fontSize: 16}}>
                Feedback
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
