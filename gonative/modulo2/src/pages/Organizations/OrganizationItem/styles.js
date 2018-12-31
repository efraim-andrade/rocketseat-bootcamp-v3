import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    maxWidth: (metrics.screenWidth - 60) / 2,
    marginTop: metrics.baseMargin,
    padding: metrics.basePadding,
    borderRadius: metrics.baseRadius,

    backgroundColor: colors.white,
  },

  avatar: {
    width: 50,
    height: 50,
  },

  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.darker,
    marginTop: metrics.baseMargin,
  },
});

export default styles;
