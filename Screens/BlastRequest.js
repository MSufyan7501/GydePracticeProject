import {StyleSheet, TouchableOpacity, Image, View} from 'react-native';
import React from 'react';
import HeaderComp from '../Componenets/HeaderComp';
import BlastReqCard from '../Componenets/BlastReqCard';
import RoundButton from '../Componenets/RoundButton';

const BlastRequest = () => {
  return (
    <View style={styles.MainView}>
      <View style={{width: '83%', alignSelf: 'center'}}>
        <HeaderComp TEXT={'Blast Request'} />
      </View>
      <View style={styles.InnerContainer}>
        {/* component */}
        <BlastReqCard STYLES={styles.marginBetween} />
        <BlastReqCard STYLES={styles.marginBetween} />
        <BlastReqCard STYLES={styles.marginBetween} />
        <RoundButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    paddingVertical: '5%',
  },
  InnerContainer: {
    width: '90%',
    height: '100%',
    // backgroundColor: 100,
    alignSelf: 'center',
    marginVertical: '4%',
  },
  marginBetween: {marginVertical: '2%'},
});

export default BlastRequest;
