import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderComp from '../Componenets/HeaderComp';

import {heightPercentageToDP} from 'react-native-responsive-screen';
import CardPropsComp from '../Componenets/CardPropsComp';
import SubjectDescComp from '../Componenets/SubjectDescComp';
import ButtonComponent from '../Componenets/ButtonComponent';
import Slider from '@react-native-community/slider';

const BlastRequest2 = () => {
  const text =
    'Hi,\nHow are You my name ?is marry\nI am an IT Developer but have been looking skill I want to learn C++\nthank you';
  return (
    <View style={styles.MainView}>
      <View style={{width: '80%', alignSelf: 'center'}}>
        <HeaderComp TEXT={'Classes'} />
      </View>
      <View style={styles.InnerContainer}>
        {/* + '\n' + text */}
        <CardPropsComp TEXT={text} />
        <Text style={styles.TextStyle}>Price Range</Text>
        <View
          style={[
            styles.boxWithShadow,
            {
              marginVertical: heightPercentageToDP(2),
              paddingVertical: 6,
              borderRadius: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            },
          ]}>
          <Slider
            style={{flex: 1, height: 40}}
            minimumValue={1}
            maximumValue={1000}
            minimumTrackTintColor="#27DF52"
            maximumTrackTintColor="#000000"
            thumbTintColor="#27DF52"
          />
          <Text style={{color: 'black', fontSize: 14, marginRight: 7}}>
            {'1$-1000'}
          </Text>
        </View>
        <View
          style={{
            height: heightPercentageToDP('34%'),
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <SubjectDescComp TITTLE={'Subject'} VALUE={'C++'} />
          <SubjectDescComp TITTLE={'No.classes'} VALUE={'5'} />
          <SubjectDescComp TITTLE={'classes Mode'} VALUE={'physical'} />
          <SubjectDescComp TITTLE={'Class size'} VALUE={'Any'} />
          <SubjectDescComp TITTLE={'Proforced meeting price'} VALUE={'Any'} />
          <SubjectDescComp TITTLE={'Expected date'} VALUE={'05/11/2020'} />
          <SubjectDescComp TITTLE={'Expected time'} VALUE={'15:00'} />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '100%',
            marginVertical: heightPercentageToDP('5%'),
            height: heightPercentageToDP('5%'),
          }}>
          <ButtonComponent
            STYLE={[styles.ButtonStyle, {backgroundColor: '#F22F2F'}]}
            TEXTStyle={{fontSize: 16}}
            TEXT={'Cancel'}
          />
          <ButtonComponent
            STYLE={styles.ButtonStyle}
            TEXTStyle={{fontSize: 16}}
            TEXT={'Accept'}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainView: {flex: 1, marginVertical: '3%'}, //flexWrap:'wrap'
  InnerContainer: {
    width: '85%',
    alignSelf: 'center',
    // backgroundColor: 100,
    height: '98%',
    paddingVertical: '4%',
    alignItems: 'center',
  },
  TextStyle: {
    color: 'black',
    fontSize: 19,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginTop: '7%',
  },
  ButtonStyle: {
    width: '45%',
    borderRadius: 6,
  },
  boxWithShadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
    backgroundColor: '#fff',
  },
});

export default BlastRequest2;
