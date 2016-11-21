var {StyleSheet, Platform} = require('react-native');

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    marginRight: 10,
    height: 30,
    width: 30,
  },
  rowContainer: {
    padding: 10,
    flex: 1,
    flexDirection: 'row',
  }
});