import {StyleSheet, Image, TouchableOpacity, View} from 'react-native';
import React from 'react';

const RoundButton = () => {
  return (
    <TouchableOpacity
      style={{
        height: '15%',
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
      }}>
      <Image
        style={{height: '100%', width: '100%'}}
        resizeMode="contain"
        source={require('../Icons/Group6.png')}
      />
    </TouchableOpacity>
  );
};

export default RoundButton;

const styles = StyleSheet.create({});
