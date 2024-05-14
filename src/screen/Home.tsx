import {FlatList, StyleSheet, View} from 'react-native';
import React, {useCallback} from 'react';
import {color} from '../theme';
import {widthResponsive} from '../utils';
import {useDispatch, useSelector} from 'react-redux';
import {AppFetchState} from '../interface/fetchData.interface';
import {fetchDataRequest} from '../redux/actions/fetchData.action';
import {
  EmptyState,
  ListDataCard,
  LoadingIndicator,
  TopNavigation,
} from '../components';
import {dataList} from '../interface/dataList.interface';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigations';

const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const dispatch = useDispatch();
  const {data, loading, error} = useSelector(
    (state: AppFetchState) => state.fetchData,
  );

  useFocusEffect(
    useCallback(() => {
      dispatch(fetchDataRequest());
    }, []),
  );

  const handleOnPress = (data: dataList) => {
    navigation.navigate('DetailData', {data});
  };

  // Render your UI based on the state
  return (
    <View style={styles.container}>
      <TopNavigation.Type2
        title={'BTPN Officers'}
        itemStrokeColor={color.Neutral[10]}
      />
      {loading && <LoadingIndicator size="large" />}
      {error && <EmptyState text="Error" subtitle={error} />}

      {!loading && !error && data && (
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.childrenContainer}>
              <ListDataCard
                title={item.firstName}
                subTitle={item.lastName}
                imageUrl={item.photo}
                onPress={() => {
                  handleOnPress(item);
                }}
                withIcon={false}
              />
            </View>
          )}
          ListEmptyComponent={
            <EmptyState text="No Data Found" subtitle="Try to add more data" />
          }
        />
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.Dark[800],
  },
  childrenContainer: {
    padding: widthResponsive(20),
    width: '100%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
});
