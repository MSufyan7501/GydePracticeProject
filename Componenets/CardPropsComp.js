import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const CardPropsComp = ({TEXT}) => {
  return (
    <View style={styles.BorderView}>
      <View style={styles.HeaderView}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          Blast Request
        </Text>
      </View>
      <View style={styles.DescView}>
        <Text style={{color: 'black', lineHeight: 19, fontSize: 13}}>
          {TEXT}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  BorderView: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 19,
  },
  HeaderView: {
    height: heightPercentageToDP('6.5%'),
    backgroundColor: '#27DF52',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  DescView: {
    width: '100%',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    flexWrap: 'nowrap',
    paddingHorizontal: '5%',
    paddingTop: heightPercentageToDP('1%'),
    paddingBottom: heightPercentageToDP('4%'),
  },
});

export default CardPropsComp;
