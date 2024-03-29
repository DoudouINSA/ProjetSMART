import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/reducers/index';
import AppNavigator from './src/navigation/AppNavigator';

console.disableYellowBox = true;

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <AppNavigator />
      </Provider>
    );
  }
}

//   state = {
//     vue: 0
//   }

//   _onPress = () => {
//     let newVue = this.state.vue + 1;
//     if (newVue === 4) { newVue = 0; }
//     this.setState({ vue: newVue });
//   }

//   render() {
//     if (this.state.vue === 0) {
//       return (
//         <Provider store={configureStore()}>
//           <View style={{ flex: 1 }}>
//             <View style={{ flex: 1, paddingTop: 30, backgroundColor: 'green' }}>
//               <Button
//                 onPress={this._onPress}
//                 title="Page suivante"
//               />
//             </View>
//             <View style={{ flex: 9 }}>
//               <Accueil />
//             </View>
//           </View>
//         </Provider>
//       );
//     } if (this.state.vue === 1) {
//       return (
//         <Provider store={configureStore()}>
//           <View style={{ flex: 1 }}>
//             <View style={{ flex: 1, paddingTop: 30, backgroundColor: 'green' }}>
//               <Button
//                 style={{ height: 100 }}
//                 onPress={this._onPress}
//                 title="Page suivante"
//               />
//             </View>
//             <View style={{ flex: 9 }}>
//               <Itineraire />
//             </View>
//           </View>
//         </Provider>

//       );
//     }
//     if (this.state.vue === 3) {
//       return (
//         <Provider store={configureStore()}>
//           <View style={{ flex: 1 }}>
//             <View style={{ flex: 1, paddingTop: 30, backgroundColor: 'green' }}>
//               <Button
//                 style={{ height: 100 }}
//                 onPress={this._onPress}
//                 title="Page suivante"
//               />
//             </View>
//             <View style={{ flex: 9 }}>
//               <Recherche />
//             </View>
//           </View>
//         </Provider>
//       );
//     }
//     return (
//       <Provider store={configureStore()}>
//         <View style={{ flex: 1 }}>
//           <View style={{ flex: 1, paddingTop: 30, backgroundColor: 'green' }}>
//             <Button
//               style={{ height: 100 }}
//               onPress={this._onPress}
//               title="Page suivante"
//             />
//           </View>
//           <View style={{ flex: 9 }}>
//             <FinTrajet />
//           </View>
//         </View>
//       </Provider>
//     );
//   }
// }
