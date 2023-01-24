import {Colors, NavService} from '../../../config';
import {Image, ScrollView, View} from 'react-native';
import React, {Component} from 'react';

import AppBackground from '../../../components/Appbackground';
import CustomButton from '../../../components/CustomButton';
import CustomImagePicker from '../../../components/CustomImagePicker';
import Icons from '../../../assets/Icons';
import Images from '../../../assets/Images';
import {ProfileTextInput} from '../../../components/CustomTextInput';

export class AddService extends Component {
  state = {
    image: '',
    title: '',
    price: '',
    duration: '',
    ingredients: '',
    description: '',
  };
  render() {
    const {image, title, price, duration, ingredients, description} =
      this.state;
    return (
      <AppBackground title={'Add New'} back>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{flex: 1}}
          contentContainerStyle={{flexGrow: 1, paddingBottom: 20}}>
          <View
            style={{
              marginTop: 10,
            }}>
            <CustomImagePicker
              onImageChange={(path, mime) => this.setState({image: path})}>
              <View
                style={{
                  width: '100%',
                  height: 180,
                  borderRadius: 10,
                  resizeMode: 'cover',
                  backgroundColor: Colors.white,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={Images.placeholderImage}
                  style={{
                    width: 100,
                    height: 100,
                    resizeMode: 'contain',
                    position: 'absolute',
                  }}
                />
                <Image
                  source={image?.length ? {uri: image} : Icons.plus}
                  style={{
                    width: image?.length ? '100%' : 40,
                    height: image?.length ? 180 : 40,
                    borderRadius: 10,
                    resizeMode: 'cover',
                  }}
                />
              </View>
            </CustomImagePicker>
          </View>
          <ProfileTextInput
            onChangeText={value => this.setState({title: value})}
            label={'Service Name'}
            value={title}
          />
          <ProfileTextInput
            onChangeText={value => this.setState({price: value})}
            label={'Price'}
            value={price}
            keyboardType={'numeric'}
          />
          <ProfileTextInput
            onChangeText={value => this.setState({duration: value})}
            label={'Duration'}
            value={duration}
          />
          <ProfileTextInput
            onChangeText={value => this.setState({ingredients: value})}
            label={'Ingredients'}
            value={ingredients}
          />
          <ProfileTextInput
            onChangeText={value => this.setState({description: value})}
            label={'Description'}
            value={description}
            containerStyle={{height: 100}}
            multiline={true}
            textInputStyle={{
              height: 90,
            }}
          />
          <CustomButton title="Save" onPress={() => NavService.goBack()} />
        </ScrollView>
      </AppBackground>
    );
  }
}

export default AddService;
