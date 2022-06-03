import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';

const BlastReqCard = ({STYLES}) => {
  return (
    <View
      style={[
        {
          height: '20%',
          backgroundColor: 'white',
          elevation: 19,
          paddingHorizontal: '1.5%',
        },
        STYLES,
      ]}>
      <View>
        <View
          style={{
            height: '74%',
            width: '100%',
            flexDirection: 'row',
            // justifyContent: 'space-between',
            // borderWidth: 1,
            marginTop: '3%',
          }}>
          <Image
            style={{width: '20%', height: '70%'}}
            resizeMode="contain"
            source={require('../Icons/Circle-avatar.png')}
          />

          <View
            style={{
              justifyContent: 'space-between',
              width: '69%',
              height: '60%',
              alignSelf: 'flex-start',
              marginTop: '3%',
              marginLeft: '2%',
            }}>
            <Text style={{color: '#414041', fontWeight: 'bold', fontSize: 15}}>
              Sarah Lee
            </Text>
            {/* stars */}
            <Image
              style={{height: '55%', width: '45%'}}
              resizeMode="contain"
              source={require('../Icons/Group13290.png')}
            />
            <Text style={{color: '#787676', fontWeight: '300', fontSize: 14}}>
              Great Communication! A very quick learner!
            </Text>
          </View>

          <View
            style={{
              alignItems: 'flex-end',
              width: '9%',
              height: '55%',
              justifyContent: 'space-between',
            }}>
            <Image
              style={{
                width: '50%',
                height: '40%',
              }}
              resizeMode="contain"
              source={require('../Icons/Report-icon.png')}
            />
            <Text style={{color: '#0253B3', fontWeight: '300', fontSize: 16}}>
              C++
            </Text>
          </View>
        </View>
        <Text
          style={{
            color: '#D9D8D8',
            fontWeight: '400',
            alignSelf: 'flex-end',
          }}>
          June 04, 2020 at 8:45 AM EST
        </Text>
      </View>
    </View>
  );
};

export default BlastReqCard;

const styles = StyleSheet.create({});
