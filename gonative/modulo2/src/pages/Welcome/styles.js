import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: metrics.basePadding * 2,

    backgroundColor: colors.secondary,
  },

  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
  },

  text: {
    marginTop: metrics.baseMargin,

    fontSize: 15,
    lineHeight: 21,
    color: colors.light,
    textAlign: 'center',
  },

  error: {
    color: colors.danger,
    textAlign: 'center',
    marginTop: metrics.baseMargin,
  },

  form: {
    marginTop: metrics.baseMargin * 2,
  },

  input: {
    height: 44,
    paddingHorizontal: metrics.basePadding,
    borderRadius: metrics.baseRadius,

    backgroundColor: colors.white,
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    marginTop: metrics.baseMargin,
    borderRadius: metrics.baseRadius,

    backgroundColor: colors.primary,
  },

  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
