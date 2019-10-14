// import {AppRegistry} from 'react-native';
// import App from './App';
// AppRegistry.registerComponent(appName, () => App);
import {Navigation} from 'react-native-navigation';
import {name as appName} from './app.json';
import App from './src/app';

import Conversation from './src/screens/conversation';

Navigation.registerComponent(appName, () => App);
Navigation.registerComponent('Conversation', () => Conversation);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'RootStack',
        children: [
          {
            component: {
              name: appName,
              options: {
                topBar: {
                  title: {
                    text: '3cho',
                  },
                },
              },
            },
          },
        ],
      },
    },
  });
});
