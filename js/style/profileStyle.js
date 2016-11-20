var {StyleSheet, Platform} = require('react-native');

module.exports = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },

  information: {
    paddingTop: 20,
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#F1F8E9',
  },

  repositories: {
    borderWidth: 1,
    borderTopColor: '#BBDEFB',
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    flex: 0.125,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },

  stars: {
   borderWidth: 1,
    borderTopColor: '#BBDEFB',
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    flex: 0.125,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },

  fllowers: {
    borderWidth: 1,
    borderTopColor: '#BBDEFB',
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    flex: 0.125,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },

  following: {
    borderWidth: 1,
    borderTopColor: '#BBDEFB',
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    flex: 0.125,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },

  horizContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },

  cateText: {
   fontSize: 20,
   color: '#4078c0',
   fontWeight: 'bold',
  },

  nameText: {
    marginTop: 15,
    fontSize: 22,
    fontWeight: 'bold',
  },

  locationText: {
    marginTop: 7,
    fontSize: 15,
    fontWeight: 'bold',
  },

});