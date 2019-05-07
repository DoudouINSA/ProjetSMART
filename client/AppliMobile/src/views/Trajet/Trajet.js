import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Carte from '../../components/Carte/Carte';
import HautAccueil from '../../components/HautAccueil/HautAccueil';
import BoutonSignalement from '../../components/BoutonSignalement/BoutonSignalement';
import styles from './stylesTrajet.js';

export default class Trajet extends React.Component {
  render() {
    return (
      <View style={ styles.container}>

        <View style={ styles.hautAccueil}>
          <HautAccueil/>
        </View>

        <View style={ styles.carte}>
          <Carte/>
        </View>

        <View style={ styles.boutonSignalement}>
          <BoutonSignalement/>
        </View>

      </View>
    );
  }
}