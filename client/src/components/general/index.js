import React from 'react';
import {View, StyleSheet} from 'react-native';
export const Footer = props => {
  return <View style={styles.footer} />;
};

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    height: 50,
    backgroundColor: '#EE5407',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    flex: 0.1,
  },
});
