import React, {Component} from 'react';
import {ScrollView, Text} from 'react-native';

import AppBackground from '../../../components/Appbackground';
import {Colors} from '../../../config';

export class PrivacyPolicy extends Component {
  render() {
    return (
      <AppBackground title={'Privacy Policy'} notification={false} back>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{flex: 1}}
          contentContainerStyle={{flexGrow: 1, paddingTop: 15}}>
          <Text style={{color: Colors.secondary}}>
            {`Deserunt cupidatat voluptate duis non dolor adipisicing consectetur labore. Consectetur irure aliqua officia labore laboris cillum aliquip mollit aliqua magna dolor id adipisicing. Magna ut excepteur adipisicing velit veniam duis nulla ut. Velit ullamco nulla occaecat minim occaecat. Sint anim duis consequat reprehenderit commodo ad consequat aliqua irure aliqua adipisicing sint magna voluptate. Sunt magna duis aliquip dolore incididunt proident. Ipsum adipisicing nisi laborum proident id cupidatat nisi est.

Est qui consectetur aute et qui ex est anim do reprehenderit. Esse est anim sit cillum dolor nostrud sunt sint dolore id officia. Do irure anim mollit non. Officia elit Lorem ipsum anim veniam duis minim minim deserunt ut ullamco.

Et sint labore non incididunt voluptate excepteur fugiat dolore. Ipsum amet elit mollit enim sunt et esse nulla sunt sunt ut pariatur mollit ex. Elit proident anim enim ea quis aute aliquip anim elit incididunt minim mollit consequat culpa.

Nisi sunt minim laborum id dolore laborum. Labore nostrud non magna culpa excepteur. Do excepteur deserunt laboris irure aliquip cillum deserunt cupidatat nisi laboris laborum ut duis est. Fugiat eiusmod exercitation dolore culpa consequat occaecat consectetur nulla nostrud cillum. Ea consequat aute ad reprehenderit laboris Lorem esse mollit eu ea nulla adipisicing reprehenderit. Ea ad labore dolor in do occaecat Lorem. Excepteur non dolore adipisicing aute labore minim amet cupidatat sint aliqua amet amet do voluptate.

Occaecat dolore duis mollit cupidatat commodo dolore duis qui pariatur tempor minim velit. Ad do eu adipisicing qui laborum ipsum deserunt sint magna laboris qui et nostrud consequat. Minim eiusmod irure aliquip proident dolore deserunt quis sunt. Et sint pariatur est consequat excepteur nulla ipsum commodo nulla ut. Magna exercitation minim pariatur ullamco ipsum incididunt commodo id pariatur dolor mollit aliqua adipisicing. Enim ut incididunt amet sunt adipisicing ipsum non incididunt exercitation nisi non.

Consequat aute commodo officia labore minim consectetur eu in mollit pariatur aliqua laborum eu. Deserunt ipsum eu nisi ex Lorem incididunt. Irure exercitation excepteur laboris cillum veniam laboris exercitation mollit.
          `}
          </Text>
        </ScrollView>
      </AppBackground>
    );
  }
}

export default PrivacyPolicy;
