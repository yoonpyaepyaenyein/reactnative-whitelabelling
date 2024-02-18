import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import theme from '../theme';

const Loading = () => (
  <View style={styles.container}>
    <ActivityIndicator color={theme.colors.text} />
  </View>
);

export default Loading;

const styles = {
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background,
  },
};
