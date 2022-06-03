import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const SubjectDescComp = ({TITTLE, VALUE}) => {
  return (
    <View
      style={{
        width: '100%',
        // backgroundColor: 100,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <Text style={{fontSize: 13, fontWeight: 'bold', color: 'black'}}>
        {TITTLE}
      </Text>
      <View
        style={{
          backgroundColor: 'white',
          elevation: 9,
          width: '30%',
          elevation: 9,
          justifyContent: 'center',
          paddingHorizontal: '2%',
          height: heightPercentageToDP('4%'),
        }}>
        <Text style={{fontSize: 13, color: 'black'}}>{VALUE}</Text>
      </View>
    </View>
  );
};

export default SubjectDescComp;
