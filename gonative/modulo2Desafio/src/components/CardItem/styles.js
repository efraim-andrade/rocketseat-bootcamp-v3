import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: metrics.baseMargin,
    padding: metrics.basePadding / 2,
    borderRadius: metrics.baseRadius,

    backgroundColor: colors.white,
  },

  avatar: {
    width: 40,
    height: 40,
    marginRight: metrics.baseMargin,
    borderRadius: 100,

    resizeMode: 'cover',
  },

  info: {
    flex: 1,
  },

  title: {
    color: colors.dark,
    fontWeight: 'bold',
  },

  author: {
    letterSpacing: -0.05,
    fontSize: 11,
    color: colors.regular,
  },
});

export default styles;
