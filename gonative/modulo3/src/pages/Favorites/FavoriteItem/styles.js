import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: metrics.baseMargin,
    marginHorizontal: metrics.baseMargin,
    padding: metrics.basePadding,
    borderRadius: metrics.baseRadius,

    backgroundColor: colors.white,
  },

  avatar: {
    width: 50,
    height: 50,
  },

  info: {
    flex: 1,
    marginLeft: metrics.baseMargin,
  },

  title: {
    color: colors.darker,
    fontWeight: 'bold',
  },

  description: {
    color: colors.dark,
    marginTop: 3,
    fontSize: 12,
  },
});

export default styles;
