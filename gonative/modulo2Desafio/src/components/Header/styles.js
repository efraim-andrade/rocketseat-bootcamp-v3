import { StyleSheet } from 'react-native';

import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },

  back: {
    position: 'absolute',
    left: metrics.baseMargin,
  },

  icon: {
    fontSize: 16,
    color: colors.darker,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.05,
    color: colors.darker,
  },
});

export default styles;
