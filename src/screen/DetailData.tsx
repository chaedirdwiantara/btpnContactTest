import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {mvs} from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';
import {RootStackParams} from '../navigations';
import {Button, Gap, TopNavigation} from '../components';
import {color} from '../theme';
import {widthResponsive} from '../utils';
// import {
//   addItemToList,
//   isItemInList,
//   removeItemFromList,
// } from '../../hooks/use-storage.hook';

type PostDetailProps = NativeStackScreenProps<RootStackParams, 'DetailData'>;

const DetailData = ({route}: PostDetailProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const [favorite, setFavorite] = useState<boolean>(false);

  const data = route.params.data;

  //   useEffect(() => {
  //     const checkItemStored = () => {
  //       const itemExists = isItemInList(data.trackId);
  //       setFavorite(itemExists);
  //     };

  //     checkItemStored();
  //   }, []);

  const leftIconOnPress = () => {
    navigation.goBack();
  };

  const buttonOnPress = () => {
    // if (favorite) {
    //   setFavorite(false);
    //   removeItemFromList(data.trackId);
    // } else {
    //   setFavorite(true);
    //   addItemToList(data);
    // }
  };

  const DeteleUserOnPress = () => {
    console.log('DELETE USER');
  };

  const UpdateDataOnPress = () => {
    console.log('UPDATE DATA');
  };

  return (
    <View style={styles.container}>
      <TopNavigation.Type1
        title="Detail Data"
        leftIconAction={leftIconOnPress}
        itemStrokeColor={color.Neutral[10]}
      />

      <ScrollView style={styles.bodyContainer}>
        <View style={styles.imageContainer}>
          <FastImage
            style={styles.imageStyle}
            source={{
              uri: data.photo,
              headers: {Authorization: 'someAuthToken'},
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>
        <Gap height={10} />
        <Text style={styles.titleStyle}>{data.firstName}</Text>
        <Text style={styles.subTitleStyle}>{data.lastName}</Text>

        <Gap height={10} />
        <View style={styles.buttonContainer}>
          <Button
            label={favorite ? 'Favorite' : 'Add Favorite'}
            containerStyles={styles.buttonStyle}
            onPress={buttonOnPress}
            bgColor={favorite ? color.Primary[400] : color.Secondary[200]}
          />
          <Button
            label={'Delete User'}
            containerStyles={styles.buttonStyle}
            onPress={DeteleUserOnPress}
            bgColor={color.Error[400]}
          />
          <Button
            label={'Update Data'}
            containerStyles={styles.buttonStyle}
            onPress={UpdateDataOnPress}
            bgColor={color.Warning[900]}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.Dark[800],
  },
  titleStyle: {
    color: color.Neutral[10],
    fontWeight: 'bold',
    fontSize: mvs(18),
  },
  subTitleStyle: {
    color: color.Neutral[50],
    fontSize: mvs(16),
  },
  descStyle: {
    fontSize: mvs(13),
    color: color.Neutral[10],
  },
  bodyContainer: {
    padding: widthResponsive(20),
  },
  score: {
    flexDirection: 'row',
  },
  buttonStyle: {
    width: widthResponsive(100),
    height: undefined,
    aspectRatio: undefined,
    padding: widthResponsive(8),
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
  },
  imageStyle: {
    width: widthResponsive(100),
    height: widthResponsive(100),
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
