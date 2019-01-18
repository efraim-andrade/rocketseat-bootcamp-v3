import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },

  form: {
    marginTop: metrics.basePadding,
    marginHorizontal: metrics.basePadding,
    borderBottomWidth: 1,
    borderBottomColor: colors.secondary,
    paddingBottom: metrics.basePadding,
  },

  searchInput: {
    backgroundColor: colors.secondary,
    borderRadius: metrics.baseRadius,
    paddingHorizontal: metrics.basePadding,
    height: 42,
    color: colors.white,
  },
});

export default styles;
