import React from 'react';
import { Button } from 'react-native';
import { withNavigation } from 'react-navigation';

class BoutonLetsGo extends React.Component {
  _onPress = () => {
    this.props.navigation.navigate('Trajet');
  }

  render() {
    return (
      <Button
        onPress={this._onPress}
        title="LET'S GO !"
        color="#C840E9"
      />
    );
  }
}

export default withNavigation(BoutonLetsGo);
