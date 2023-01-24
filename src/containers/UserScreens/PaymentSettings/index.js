import {Colors, Shadows} from '../../../config';
import {
  FlatList,
  Image,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';

import AppBackground from '../../../components/Appbackground';
import {CreditCardInput} from '../../../components/react-native-credit-card-input';
import CustomButton from '../../../components/CustomButton';
import GradientText from '../../../components/GradientText';
import Icons from '../../../assets/Icons';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal';
import Toast from 'react-native-toast-message';

const cards = [
  {
    cardHolderName: 'John Doe',
    cardNumber: '4649 1234 5678 9123',
  },
  {
    cardHolderName: 'Kal El',
    cardNumber: '6542 1234 5678 9123',
  },
  {
    cardHolderName: 'Jaden Smith',
    cardNumber: '3415 1234 5678 9123',
  },
  {
    cardHolderName: 'Alexa Johnson',
    cardNumber: '3549 1234 5678 9123',
  },
  {
    cardHolderName: 'Lara Croft',
    cardNumber: '3646 1234 5678 9123',
  },
  {
    cardHolderName: 'John Snow',
    cardNumber: '5101 1234 5678 9123',
  },
];

export default class index extends Component {
  state = {addNewModal: false};
  render() {
    const {addNewModal} = this.state;
    return (
      <AppBackground title={'Payment Settings'} back notification={false}>
        <AddNew
          isVisible={addNewModal}
          onSave={data => {
            cards.push({
              cardHolderName: data.cardName,
              cardNumber: data.cardNumber,
            });
            this.setState({addNewModal: false});
          }}
          onClose={() => this.setState({addNewModal: false})}
        />
        <FlatList
          data={[...cards]}
          showsVerticalScrollIndicator={false}
          style={{flex: 1}}
          contentContainerStyle={{
            flexGrow: 1,
            paddingTop: 15,
            paddingBottom: 20,
            paddingHorizontal: 3,
          }}
          renderItem={({item}) => <Cards item={item} />}
          ListFooterComponent={() => (
            <CustomButton
              title="Add new"
              onPress={() => this.setState({addNewModal: true})}
            />
          )}
        />
      </AppBackground>
    );
  }
}

const Cards = ({item}) => {
  const {cardHolderName, cardNumber} = item;
  let cardType = 'unknown';
  if (cardNumber.startsWith('65') || cardNumber.startsWith('6011')) {
    cardType = 'discover';
  }
  if (cardNumber.startsWith('34') || cardNumber.startsWith('37')) {
    cardType = 'amex';
  }
  if (cardNumber.startsWith('36') || cardNumber.startsWith('38')) {
    cardType = 'dinersClub';
  }
  if (cardNumber.startsWith('35')) {
    cardType = 'jcb';
  }
  if (cardNumber.startsWith('4')) {
    cardType = 'visa';
  }
  if (cardNumber.startsWith('5')) {
    cardType = 'mastercard';
  }
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        alignItems: 'center',
        width: '100%',
        backgroundColor: Colors.white,
        ...Shadows.shadow3,
      }}>
      <LinearGradient
        colors={Colors.gradient}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: 42,
          width: 65,
          borderRadius: 5,
        }}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1.4}}>
        <Image
          source={Icons[cardType]}
          style={{
            width: 40,
            height: 40,
            tintColor: Colors.white,
            resizeMode: 'contain',
          }}
        />
      </LinearGradient>

      <View style={{flex: 1, marginHorizontal: 15}}>
        <Text
          style={{fontSize: 18, fontWeight: '700', color: Colors.secondary}}>
          {cardHolderName}
        </Text>
        <Text style={{color: Colors.darkGrey, marginTop: 3}}>{cardNumber}</Text>
      </View>
      <Image
        source={Icons.next}
        style={{
          width: 20,
          height: 20,
          resizeMode: 'contain',
        }}
      />
    </View>
  );
};

const AddNew = ({
  isVisible = addNewModal,
  onSave = () => {},
  onClose = () => {},
}) => {
  const [cardNumber, setCardNumber] = React.useState('');
  const [cardName, setCardName] = React.useState('');
  const [cardExpiry, setCardExpiry] = React.useState('');
  const [cardCVV, setCardCVV] = React.useState('');
  const [valid, setValid] = React.useState(false);
  const [isDefault, setIsDefault] = React.useState(true);
  return (
    <Modal isVisible={isVisible}>
      <Toast />
      <View
        style={{
          backgroundColor: Colors.white,
          padding: 15,
          borderRadius: 15,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onClose}
          style={{
            alignSelf: 'flex-end',
          }}>
          <Image
            source={Icons.cross}
            style={{
              height: 20,
              width: 20,
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
        <GradientText
          style={{fontSize: 20, fontWeight: 'bold', marginVertical: 20}}>
          Enter Card Details
        </GradientText>
        {/* <CustomTextInput
          containerStyle={{width: '90%'}}
          placeholder="Full Name"
        />
        <CustomTextInput
          containerStyle={{width: '90%'}}
          placeholder="Card Number"
        />
        <View
          style={{
            // flexDirection: 'row',
            width: '90%',
            // backgroundColor: 'red',
            // height: 20,
          }}>
          <CustomTextInput
            containerStyle={{width: '55%', alignSelf: 'flex-start'}}
            placeholder="Expiry Date"
          />
          <CustomTextInput
            containerStyle={{width: '55%', alignSelf: 'flex-start'}}
            placeholder="CVC"
          />
        </View> */}
        <View style={{height: 220}}>
          <CreditCardInput
            requiresName={true}
            requiresCVC={true}
            requiresExpiry={true}
            requiresNumber={true}
            inputStyle={{
              fontSize: 16,
              color: Colors.black,
              fontWeight: '400',
              // textAlign: 'center',
            }}
            inputContainerStyle={{
              borderBottomWidth: 1,
              borderBottomColor: Colors.black,
            }}
            cardScale={0}
            onChange={card => {
              setCardName(card.values.name);
              setCardNumber(card.values.number);
              setCardExpiry(card.values.expiry);
              setCardCVV(card.values.cvc);
              setValid(card.valid);
            }}
          />
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
          <Text
            style={{fontSize: 12, color: Colors.secondary, fontWeight: 'bold'}}>
            Set as default
          </Text>
          <Switch
            style={{transform: [{scaleX: 0.6}, {scaleY: 0.6}]}}
            trackColor={{false: Colors.secondary, true: Colors.primary}}
            thumbColor={isDefault ? Colors.white : Colors.primary}
            ios_backgroundColor={isDefault ? Colors.primary : Colors.secondary}
            onValueChange={() => setIsDefault(!isDefault)}
            value={isDefault}
          />
        </View>
        <CustomButton
          title="Save"
          buttonStyle={{width: '50%', marginBottom: 15}}
          onPress={() =>
            valid
              ? onSave({
                  cardNumber,
                  cardName,
                  cardExpiry,
                  cardCVV,
                  isDefault,
                })
              : Toast.show({
                  text1: 'Please enter valid card details',
                  textStyle: {textAlign: 'center'},
                  type: 'error',
                  visibilityTime: 5000,
                })
          }
        />
      </View>
    </Modal>
  );
};
