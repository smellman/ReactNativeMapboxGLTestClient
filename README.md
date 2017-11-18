# React Native Mapbox GL Test Client

Sample application for [React Native Mapbox GL ](https://github.com/mapbox/react-native-mapbox-gl) from ```react-native init``` command.
Also this application targets [OpenMapTiles](https://openmaptiles.org/) project and supports [Tileserver-GL](https://github.com/klokantech/tileserver-gl/).
```App.js``` includes the fake accessToken to pass error in Android [validateAccessToken](https://github.com/mapbox/mapbox-gl-native/blob/master/platform/android/MapboxGLAndroidSDK/src/main/java/com/mapbox/mapboxsdk/Mapbox.java).

# how to use

You need setup [React Native](https://facebook.github.io/react-native/) and your tile server.

## setup

```sh
yarn
vim App.js # edit styleURL
yarn run start # start server
```

## ios

```sh
cd ios
pod install
open ReactNativeMapboxGLTestClient.xcworkspace
```

and run in Xcode.

## android

Start android emulator and

```sh
react-native run-android
```

# notice

- Just use [jesseditson/react-native-mapbox-gl#v6_cocoapods](https://github.com/jesseditson/react-native-mapbox-gl#v6_cocoapods) to support current cocoapods. See [PR #741](https://github.com/mapbox/react-native-mapbox-gl/pull/741).
