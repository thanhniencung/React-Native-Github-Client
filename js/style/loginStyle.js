var {StyleSheet, Platform} = require('react-native');

module.exports = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 40,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },

  title: {
    marginTop: 10,
    fontSize: 25,
    textAlign: 'center',
    color: '#666'
  },

  textfield: {
    height: 28,  
    marginTop: 32,
  },

  logo: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },

  textfieldWithFloatingLabel: {
    height: 48,  
    marginTop: 10,
  },

  horizContainer: {
  	flexDirection: 'row',
    justifyContent: 'center',
  },

  btnLogin: {
  	flex: 1,
  	alignSelf: 'stretch',
  	backgroundColor: '#6cc644',
  	borderWidth: 0,
    height: 46,  
    marginTop: 30,
  },

  background: {
    flex: 1,
    justifyContent: 'center',
  },
});