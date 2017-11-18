/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

export default class App extends Component<{}> {
  constructor (props) {
    super(props);
    this.state = {
      isFetchingAndroidPermission: Platform.OS === 'android',
      isAndroidPermissionGranted: false,
    };
  }
  async componentWillMount () {
    if (Platform.OS === 'android') {
      const isGranted = await MapboxGL.requestAndroidLocationPermissions();
      this.setState({
        isAndroidPermissionGranted: isGranted,
        isFetchingAndroidPermission: false,
      });
    }
    MapboxGL.setAccessToken("pk.NO_ACCESS_TOKEN");
  }
  render() {
    if (Platform.OS === 'android' && !this.state.isAndroidPermissionGranted) {
      if (this.state.isFetchingAndroidPermission) {
        return null;
      }
      return (
        <View style={{flex: 1}}>
          <Text style={styles.noPermissionsText}>
            You need to accept location permissions in order to use this example applications
          </Text>
        </View>
      );
    }

    return (
      <MapboxGL.MapView
        zoomLevel={16}
        centerCoordinate={[139.766403, 35.681262]}
        styleURL="PATH TO YOUR style.json"
        style={{flex: 1}}
      />
    );
  }
}

const styles = StyleSheet.create({
  noPermissionsText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
