import React, { Component } from 'react';
import { Animated, Easing, Image } from 'react-native';

class FontAwesomeSpin extends Component {
    spinValue = new Animated.Value(0);

    componentDidMount() {
      this.spin();
    }

    spin = () => {
      this.spinValue.setValue(0);

      Animated.timing(
        this.spinValue,
        {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true
        }
      ).start(() => this.spin());
    };

    render() {
      const { style, children } = this.props;
      const rotate = this.spinValue.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '360deg'] });

      return (
        <Animated.View
          style={{
            transform: [{ rotate }],
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}
        >
          <Image style={{ width: 100, height: 100 }} source={require('../../../assets/roue.png')} />
        </Animated.View>
      );
    }
}

export default FontAwesomeSpin;
