import {Image, ScrollView, View} from 'react-native';
import React, {Component} from 'react';

import AppBackground from '../../../components/Appbackground';
import CustomButton from '../../../components/CustomButton';
import CustomImagePicker from '../../../components/CustomImagePicker';
import {NavService} from '../../../config';
import {ProfileTextInput} from '../../../components/CustomTextInput';

export class EditService extends Component {
  state = {
    image: this.props.route?.params?.item?.image,
    title: this.props.route?.params?.item?.title,
    price: this.props.route?.params?.item?.price,
    duration: this.props.route?.params?.item?.duration,
    ingredients: this.props.route?.params?.item?.ingredients,
    description: this.props.route?.params?.item?.description,
  };
  render() {
    const {image, title, price, duration, ingredients, description} =
      this.state;
    return (
      <AppBackground title={'Edit'} back>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{flex: 1}}
          contentContainerStyle={{flexGrow: 1, paddingBottom: 20}}>
          <View style={{marginTop: 10}}>
            <CustomImagePicker
              onImageChange={(path, mime) => this.setState({image: path})}>
              <Image
                source={{uri: image}}
                style={{
                  width: '100%',
                  height: 180,
                  borderRadius: 10,
                  resizeMode: 'cover',
                }}
              />
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

export default EditService;
