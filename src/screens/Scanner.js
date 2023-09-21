import React from 'react';

import {BarCode, HistoryIcon, Qrcode2, Qrcode3, Scaner} from '../Assests';

import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  View,
  ScrollView,
} from 'react-native';
import Colors from '../Assests/ColorFormat';
import ScanScreen from './ScanScreen';
const Scanner = ({navigation}) => {
  return (
    <ScrollView>
      <SafeAreaView style={{flex: 1}}>
        <Image
          source={require('../Assests/background.png')}
          style={{height: 320, width: 400}}
        />
        <View style={styles.iconCnt}>
          <TouchableOpacity onPress={() => navigation.navigate(ScanScreen)}>
            <View style={styles.iconTouch}>
              <Qrcode2 />
            </View>
            <Text style={{textAlign: 'center'}}> Qr code</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.imageCnt}>
              <BarCode />
            </View>
            <Text style={{textAlign: 'center'}}> Bar code</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomNav}>
          <TouchableOpacity>
            <Qrcode3 />
          </TouchableOpacity>
          <View style={styles.scanIcon}>
            <Scaner />
          </View>
          <TouchableOpacity>
            <HistoryIcon />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  imageCnt: {
    backgroundColor: Colors.orange,
    borderRadius: 30,
    alignItems: 'center',
  },
  iconCnt: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 50,
  },
  iconTouch: {
    backgroundColor: Colors.orange,
    borderRadius: 30,
    alignItems: 'center',
  },
  bottomNav: {
    backgroundColor: Colors.black,
    opacity: 0.8,
    padding: 30,
    margin: 10,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scanIcon: {
    position: 'absolute',
    marginLeft: 125,
    top: -40,
  },
});
export default Scanner;
