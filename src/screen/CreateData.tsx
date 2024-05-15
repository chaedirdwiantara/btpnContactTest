import {Alert, StyleSheet, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {color} from '../theme';
import {widthResponsive} from '../utils';
import {Button, Gap, InputText} from '../components';
import {mvs} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {AppCreateDataState} from '../interface/createData.interface';
import {createDataRequest} from '../redux/actions/createData.action';
import {dummyPhoto} from '../data/dummyData';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainTabParams} from '../navigations';
import {dataList} from '../interface/dataList.interface';
import {useFocusEffect} from '@react-navigation/native';
import {updateDataRequest} from '../redux/actions/updateData.action';
import {AppUpdateState} from '../interface/updateData.interface';

type CrateDataProps = NativeStackScreenProps<MainTabParams, 'Create'>;

const CreateScreen = ({route}: CrateDataProps) => {
  const data: dataList | undefined = route?.params?.data;
  const [focusInput, setFocusInput] = useState<
    'firstName' | 'lastName' | 'age' | null
  >(null);
  const [firstNameValue, setFirstNameValue] = useState<string>('');
  const [lastNameValue, setLastNameValue] = useState<string>('');
  const [ageValue, setAgeValue] = useState<string>('');

  const dispatch = useDispatch();

  const {
    loading,
    error: createError,
    success: createSuccess,
  } = useSelector((state: AppCreateDataState) => state.createData);
  const {
    loading: updateLoading,
    error: updateError,
    success: updateSuccess,
  } = useSelector((state: AppUpdateState) => state.updateData);

  useEffect(() => {
    if (data) {
      setFirstNameValue(data.firstName);
      setLastNameValue(data.lastName);
      setAgeValue(data.age.toString());
    }
  }, [data]);

  useEffect(() => {
    if (createSuccess) {
      Alert.alert('Success', 'Data created successfully');
      setFirstNameValue('');
      setLastNameValue('');
      setAgeValue('');
    } else if (createError) {
      Alert.alert('Error', 'Error creating data');
    }
  }, [createSuccess, createError]);

  useEffect(() => {
    if (updateSuccess) {
      Alert.alert('Success', 'Data updated successfully');
      setFirstNameValue('');
      setLastNameValue('');
      setAgeValue('');
    } else if (updateError) {
      Alert.alert('Error', 'Error updating data');
    }
  }, [updateSuccess, updateError]);

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

  const handleOnUpdate = () => {
    if (data) {
      if (
        data.firstName !== firstNameValue ||
        data.lastName !== lastNameValue ||
        data.age.toString() !== ageValue
      ) {
        dispatch(
          updateDataRequest({
            id: data.id,
            firstName: firstNameValue,
            lastName: lastNameValue,
            age: Number(ageValue),
            photo: data.photo,
          }),
        );
      } else {
        Alert.alert('Info', 'No changes made');
      }
    }
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
        label={data ? 'Update' : 'Submit'}
        textStyles={{fontSize: mvs(14)}}
        containerStyles={styles.buttonStyle}
        onPress={data ? handleOnUpdate : handleOnSubmit}
        bgColor={data ? color.Warning[900] : color.Success[500]}
      />
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.Dark[800],
    padding: widthResponsive(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {width: '100%'},
});
