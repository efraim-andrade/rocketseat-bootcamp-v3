import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: metrics.basePadding,

    backgroundColor: colors.lighter,
  },

  form: {
    position: 'relative',

    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.light,
    paddingVertical: metrics.basePadding,
  },

  input: {
    flex: 1,
    height: 30,
    paddingVertical: 0,
    borderRadius: metrics.baseRadius,
    borderWidth: 1,
    borderColor: colors.light,

    fontSize: 12,
    lineHeight: 24,
    color: colors.dark,
    backgroundColor: colors.white,
  },

  button: {
    marginLeft: metrics.baseMargin,
  },

  icon: {
    color: colors.darker,
  },

  error: {
    textAlign: 'center',
    color: colors.danger,
  },
});

export default styles;
