import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color} from '../../../theme';

type Props = {
  size?: 'small' | 'large';
  testID?: string; // Added this line
};

const LoadingIndicator: React.FC<Props> = (props: Props) => {
  const {size, testID} = props;
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size={size ?? 'large'}
        color={color.Pink[200]}
        testID={testID}
      />
    </View>
  );
};

export default LoadingIndicator;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
