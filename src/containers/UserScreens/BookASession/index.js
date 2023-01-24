import React, {Component} from 'react';

import AppBackground from '../../../components/Appbackground';
import BookTherapies from '../../../components/BookTherapies';
import CustomButton from '../../../components/CustomButton';
import {FlatList} from 'react-native';
import GradientText from '../../../components/GradientText';
import {NavService} from '../../../config';

const LatestTherapy = [
  {
    id: 1,
    title: 'Super B-hydration',
    image: {
      uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe-XaRqDR6OIGw_1dN9vnQa25wB3oOHLH2tByzip9bUuzJqSUpDZ1zb7-Kc_ND4pYTOsQ&usqp=CAU`,
    },
    icon: Icons.superB,
    price: 199,
    duration: '30 Min',
  },
  {
    id: 2,
    title: `Myer's Coktail`,
    image: {
      uri: `https://media.istockphoto.com/photos/young-woman-posing-with-slice-of-orange-on-her-face-on-yellow-picture-id964880538?b=1&k=20&m=964880538&s=170667a&w=0&h=tS8apDXzdiWqHdAw_uPQbAFDXgYwNg-MvuGatHuIZeU=`,
    },
    icon: Icons.myer,
    price: 199,
    duration: '30 Min',
  },
  {
    id: 3,
    title: `Myer's Coktail`,
    image: {
      uri: `https://media.istockphoto.com/photos/young-woman-posing-with-slice-of-orange-on-her-face-on-yellow-picture-id964880538?b=1&k=20&m=964880538&s=170667a&w=0&h=tS8apDXzdiWqHdAw_uPQbAFDXgYwNg-MvuGatHuIZeU=`,
    },
    icon: Icons.myer,
    price: 199,
    duration: '30 Min',
  },
  {
    id: 4,
    title: 'Super B-hydration',
    image: {
      uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe-XaRqDR6OIGw_1dN9vnQa25wB3oOHLH2tByzip9bUuzJqSUpDZ1zb7-Kc_ND4pYTOsQ&usqp=CAU`,
    },
    icon: Icons.superB,
    price: 199,
    duration: '30 Min',
  },
  {
    id: 5,
    title: `Myer's Coktail`,
    image: {
      uri: `https://media.istockphoto.com/photos/young-woman-posing-with-slice-of-orange-on-her-face-on-yellow-picture-id964880538?b=1&k=20&m=964880538&s=170667a&w=0&h=tS8apDXzdiWqHdAw_uPQbAFDXgYwNg-MvuGatHuIZeU=`,
    },
    icon: Icons.myer,
    price: 199,
    duration: '30 Min',
  },
  {
    id: 6,
    title: `Myer's Coktail`,
    image: {
      uri: `https://media.istockphoto.com/photos/young-woman-posing-with-slice-of-orange-on-her-face-on-yellow-picture-id964880538?b=1&k=20&m=964880538&s=170667a&w=0&h=tS8apDXzdiWqHdAw_uPQbAFDXgYwNg-MvuGatHuIZeU=`,
    },
    icon: Icons.myer,
    price: 199,
    duration: '30 Min',
  },
  {
    id: 7,
    title: 'Super B-hydration',
    image: {
      uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe-XaRqDR6OIGw_1dN9vnQa25wB3oOHLH2tByzip9bUuzJqSUpDZ1zb7-Kc_ND4pYTOsQ&usqp=CAU`,
    },
    icon: Icons.superB,
    price: 199,
    duration: '30 Min',
  },
  {
    id: 8,
    title: `Myer's Coktail`,
    image: {
      uri: `https://media.istockphoto.com/photos/young-woman-posing-with-slice-of-orange-on-her-face-on-yellow-picture-id964880538?b=1&k=20&m=964880538&s=170667a&w=0&h=tS8apDXzdiWqHdAw_uPQbAFDXgYwNg-MvuGatHuIZeU=`,
    },
    icon: Icons.myer,
    price: 199,
    duration: '30 Min',
  },
];

export class BookASession extends Component {
  state = {checked: []};
  render() {
    const {checked} = this.state;
    return (
      <AppBackground title="Book Session">
        <GradientText
          style={{fontSize: 18, fontWeight: '600', marginBottom: 5}}>
          Choose Therapy:
        </GradientText>
        <FlatList
          data={LatestTherapy}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 20}}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <BookTherapies
              item={item}
              left={index % 2 == 0}
              last={index % 2 != 0}
              isChecked={checked.includes(item.id)}
              onCheck={id => {
                const newChecked = [...checked];
                newChecked.includes(id)
                  ? newChecked.splice(newChecked.indexOf(item.id), 1)
                  : newChecked.push(item.id);
                this.setState({checked: newChecked});
              }}
            />
          )}
          ListFooterComponent={() => (
            <CustomButton
              title="Schedule An Appointment"
              onPress={() => NavService.navigate('RequestAppointment')}
            />
          )}
        />
      </AppBackground>
    );
  }
}

export default BookASession;
