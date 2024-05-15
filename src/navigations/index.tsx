import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
  ViewStyle,
} from 'react-native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {color, font} from '../theme';
import {normalize} from '../utils/formatter';

// Main
import {HomeScreen, CreateScreen} from '../screen';
import {FeedIcon, HomeIcon} from '../assets/icon';
import DetailData from '../screen/DetailData';
import {dataList} from '../interface/dataList.interface';

// interface
export type RootStackParams = {
  SplashScreen: undefined;
  MainTab: undefined;
  DetailData: {data: dataList};
};

export type MainTabParams = {
  Create: {data: dataList} | undefined;
  Home: undefined;
  Rewards: undefined;
  Profile: {
    showToast?: boolean;
    deletePlaylist?: boolean;
  };
};

const screenOption: NativeStackNavigationOptions = {
  headerShown: false,
  gestureEnabled: false,
};

const MainTab = createBottomTabNavigator<MainTabParams>();
const TabScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainTabParams>>();
  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: color.Pink[200],
        tabBarInactiveTintColor: color.Dark[300],
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          paddingBottom: Platform.OS === 'ios' ? 20 : 0,
          height: Platform.OS === 'ios' ? 84 : 64,
          backgroundColor: '#0F1319',
          borderTopColor: color.Dark[800],
        },
      }}>
      <MainTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <TouchableOpacity
              style={styles.root}
              onPress={() => navigation.navigate('Home')}>
              <HomeIcon stroke={color} />
              <Text style={[styles.label, {color}]}>{'Home'}</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <MainTab.Screen
        name="Create"
        component={CreateScreen}
        options={{
          tabBarIcon: ({color}) => (
            <View style={styles.root}>
              <FeedIcon stroke={color} />
              <Text style={[styles.label, {color}]}>{'Create'}</Text>
            </View>
          ),
        }}
      />
    </MainTab.Navigator>
  );
};

const RootStack = createNativeStackNavigator<RootStackParams>();
export const RootStackScreen = () => (
  <RootStack.Navigator
    screenOptions={screenOption}
    // initialRouteName={'SplashScreen'}
  >
    <RootStack.Screen name="MainTab" component={TabScreen} />
    <RootStack.Screen name="DetailData" component={DetailData} />
  </RootStack.Navigator>
);

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontFamily: font.InterMedium,
    fontSize: normalize(12),
    marginTop: 2,
  },
});
