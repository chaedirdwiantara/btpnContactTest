import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {color} from '../theme';
import {widthResponsive} from '../utils';
import {Button, Gap, InputText} from '../components';
import {mvs} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {AppCreateDataState} from '../interface/createData.interface';
import {createDataRequest} from '../redux/actions/createData.action';
import {dummyPhoto} from '../data/dummyData';

const FeedScreen = () => {
  const [focusInput, setFocusInput] = useState<
    'firstName' | 'lastName' | 'age' | null
  >(null);
  const [firstNameValue, setFirstNameValue] = useState<string>('');
  const [lastNameValue, setLastNameValue] = useState<string>('');
  const [ageValue, setAgeValue] = useState<string>('');

  const dispatch = useDispatch();

  const {loading, error, success} = useSelector(
    (state: AppCreateDataState) => state.createData,
  );

  useEffect(() => {
    if (success) {
      Alert.alert('Success', 'Data created successfully');
      setFirstNameValue('');
      setLastNameValue('');
      setAgeValue('');
    }
  }, [success]);

  const handleOnSubmit = () => {
    if (firstNameValue === '' || lastNameValue === '' || ageValue === '') {
      Alert.alert('Error', 'Please fill all the fields');
      return;
    }
    dispatch(
      createDataRequest({
        firstName: firstNameValue,
        lastName: lastNameValue,
        age: Number(ageValue),
        photo: dummyPhoto,
      }),
    );
  };

  const handleFocusInput = (focus: 'firstName' | 'lastName' | 'age' | null) => {
    setFocusInput(focus);
  };
  return (
    <View style={styles.container}>
      <InputText
        value={firstNameValue}
        onChangeText={setFirstNameValue}
        placeholder={'First Name..'}
        onFocus={() => {
          handleFocusInput('firstName');
        }}
        onBlur={() => {
          handleFocusInput(null);
        }}
        isError={false}
        errorMsg={''}
        isFocus={focusInput === 'firstName'}
      />
      <Gap height={16} />
      <InputText
        value={lastNameValue}
        onChangeText={setLastNameValue}
        placeholder={'Last Name..'}
        onFocus={() => {
          handleFocusInput('lastName');
        }}
        onBlur={() => {
          handleFocusInput(null);
        }}
        isError={false}
        errorMsg={''}
        isFocus={focusInput === 'lastName'}
      />
      <Gap height={16} />
      <InputText
        value={ageValue}
        onChangeText={setAgeValue}
        placeholder={'Age..'}
        onFocus={() => {
          handleFocusInput('age');
        }}
        onBlur={() => {
          handleFocusInput(null);
        }}
        isError={false}
        errorMsg={''}
        isFocus={focusInput === 'age'}
      />
      <Gap height={16} />
      <Button
        label={'Submit'}
        textStyles={{fontSize: mvs(14)}}
        containerStyles={{width: '100%'}}
        onPress={handleOnSubmit}
      />
    </View>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.Dark[800],
    padding: widthResponsive(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
