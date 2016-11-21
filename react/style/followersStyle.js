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
    fontSize: 19,
  },
  photo: {
    marginRight: 10,
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  rowContainer: {
    padding: 10,
    flex: 1,
    flexDirection: 'row',
  }
});