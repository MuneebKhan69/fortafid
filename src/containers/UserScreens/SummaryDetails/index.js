import {Colors, NavService, Shadows} from '../../../config';
import {Image, ScrollView, Text, View} from 'react-native';
import React, {Component} from 'react';

import AppBackground from '../../../components/Appbackground';
import CustomButton from '../../../components/CustomButton';
import GradientText from '../../../components/GradientText';
import Icons from '../../../assets/Icons';
import StarRating from 'react-native-star-rating';
import moment from 'moment';

export class SummaryDetails extends Component {
  render() {
    return (
      <AppBackground title={'Summary Details'} back notification={false}>
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
            maxHeight: '31%',
          }}>
          <ScrollView showsVerticalScrollIndicator={false}>
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
              sunt mollit. Sint id duis Lorem dolore irure proident laborum
              minim aute officia. Consequat laborum ipsum sunt occaecat nisi qui
              est ullamco do excepteur labore occaecat culpa. Ad tempor elit do
              sint quis nisi eiusmod ut sint sunt magna eiusmod exercitation.
              Sint dolore Lorem ea sunt voluptate. Adipisicing velit ut Lorem
              sint laboris do ut duis labore.
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
        <CustomButton
          title="Continue"
          onPress={() => NavService.navigate('HomeScreen')}
        />
      </AppBackground>
    );
  }
}

export default SummaryDetails;
