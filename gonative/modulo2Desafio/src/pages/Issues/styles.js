import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: metrics.basePadding,

    backgroundColor: colors.lighter,
  },

  filter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: metrics.basePadding / 3,
    marginTop: metrics.baseMargin,
    borderRadius: metrics.baseRadius,

    backgroundColor: colors.light,
  },

  item: {
    flex: 1,
  },

  text: {
    textAlign: 'center',
  },

  active: {
    fontWeight: 'bold',
  },
});

export default styles;
