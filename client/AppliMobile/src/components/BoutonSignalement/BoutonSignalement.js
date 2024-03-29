import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { addMarker } from '../../actions/index';
import signalementService from '../../services/signalementServices';
import styles from './stylesBoutonSignalement';

class BoutonSignalement extends React.Component {
  state = {
    start: true
  }

  _envoyerSignalement = (problem, latitude, longitude) => {
    const signalement = {
      problem,
      latitude,
      longitude
    };
    this.props.addMarker(signalement.latitude, signalement.longitude, signalement.problem);
    signalementService.postSignalement(signalement);
  }

  _signaler = (problem) => {
    const { lat } = this.props.localisation;
    const { lng } = this.props.localisation;
    this._envoyerSignalement(problem, lat, lng);
    this._onPressRetour();
  }

  _onPressSignalement = () => {
    this.setState({ start: false });
  }

  _onPressRetour = () => {
    this.setState({ start: true });
  }

  render() {
    if (this.state.start) {
      return (
        <View style={styles.container}>
          <Icon
            reverse
            raised
            style={styles.bouton}
            name="exclamation"
            type="font-awesome"
            color="#C840E9"
            underlayColor="#000000"
            onPress={this._onPressSignalement}
          />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.containerBas}>
          <Icon
            reverse
            raised
            style={styles.bouton}
            name="lightbulb-o"
            type="font-awesome"
            color="#E9BC40"
            onPress={() => { this._signaler('eclairage'); }}
          />
          <Icon
            reverse
            raised
            style={styles.bouton}
            name="exclamation-triangle"
            type="font-awesome"
            color="#E97740"
            onPress={() => { this._signaler('travaux'); }}
          />
          <Icon
            reverse
            raised
            style={styles.bouton}
            name="close"
            type="font-awesome"
            color="#E94040"
            onPress={() => { this._signaler('fermee'); }}
          />
        </View>
        <View style={styles.containerBas}>
          <Icon
            reverse
            raised
            style={styles.bouton}
            name="road"
            type="font-awesome"
            color="#3497FD"
            onPress={() => { this._signaler('etat'); }}
          />
          <Icon
            reverse
            raised
            style={styles.bouton}
            name="security"
            type="material-icons"
            color="#5773FF"
            onPress={() => { this._signaler('securite'); }}
          />
          <Icon
            reverse
            raised
            style={styles.bouton}
            name="heart"
            type="font-awesome"
            color="#C840E9"
            background-color="#000000"
            onPress={() => { this._signaler('interet'); }}
          />
          <Icon
            raised
            style={styles.bouton}
            name="back"
            type="antdesign"
            color="#C840E9"
            onPress={this._onPressRetour}
          />
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    localisation: state.localisation,
    markerList: state.markerList
  };
}

const mapDispatchToProps = dispatch => ({
  addMarker: (lat, lng, markerType) => dispatch(addMarker(lat, lng, markerType))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoutonSignalement);
