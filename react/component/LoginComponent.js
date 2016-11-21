var base64 = require('base-64');

import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
  Text,
  Image,
  TextInput,
  View,
  ActivityIndicator
} from 'react-native';

var profileComponent = require('./ProfileComponent');

const styles = require('../style/loginStyle');
const MK = require('react-native-material-kit');
const {
  MKProgress,
  MKButton,
  MKColor,
  MKTextField,
  mdl,
} = MK;

const TextfieldWithFloatingLabel = MKTextField.textfieldWithFloatingLabel()
	.withPlaceholder('Username')
	.withHighlightColor(MKColor.Lime)
	.withStyle(styles.textfieldWithFloatingLabel)
	.withKeyboardType('default')
	.build();

const PasswordInput = mdl.Textfield.textfieldWithFloatingLabel()
  .withPassword(true)
  .withPlaceholder('Password')
  .withHighlightColor(MKColor.Lime)
  .withStyle(styles.textfieldWithFloatingLabel)
  .build();

  const ColoredRaisedButton = MKButton.coloredButton()
  .withBackgroundColor(MKColor.Green)
  .withText("Login")
  .withStyle(styles.btnLogin)
  .build();


class LoginComponent extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		username: '',
    		password: '',
        loginEnable: true,
        showProgress: false
    	};
    }

	 handleUserNameChange(event) {
    	this.setState({
        username: event.nativeEvent.text
      });
   }

   handlePasswordChange(event) {
    	this.setState({
        password: event.nativeEvent.text
      });
   }

   getAuthString() {
      return base64.encode(this.state.username + ':' + this.state.password);
   }

   checkAllowRequestLogin() {
      if (this.state.loginEnable === false) {
        console.log("do nothing");
        return false;
      }

      if (this.state.username === '' || this.state.password === '') {
        console.log("do nothing");
        return false;
      }

      return true;
   }

   requestLogin() {
    if (this.checkAllowRequestLogin()) {
      var self = this;
      self.setState({
          loginEnable: false,
          showProgress: true
      });

      fetch('https://api.github.com/user', {
        method: 'GET',
        headers: {
          "Authorization": "Basic " + self.getAuthString(),
          "Accept": "application/json ",
          "Content-Type": "application/json;charset=UTF-8"
        }
      }).then(function(response) {
          return response.json();
      }).then(function(json) {
          console.log(self.state.btnLoginText);
          self.setState({
            loginEnable: true,
            showProgress: false
          });

          setTimeout(function() {
              self.props.navigator.push({
                title: "Github Profile",
                component: profileComponent,
                leftButtonTitle: ' ',
                passProps: {
                  profile: json
                }
              });
          }, 500);
      }).catch((error) => {
          console.error(error);
      }).done(function() {
        console.log("finish network")  
      });
    }
  }

	render() {
     var progress = this.state.showProgress ? <MKProgress.Indeterminate progressColor={'#6cc644'} /> : null;
		 return (
		 	<View style={styles.container}>
		 		<View style={styles.horizContainer}>
				 	<Image 
				 		style={styles.logo}
				 		source={require('../../res/img/logo.png')}/>
			 	</View>

				<TextfieldWithFloatingLabel
              value={this.state.username}
              onChange={this.handleUserNameChange.bind(this)}
					/>

				<PasswordInput 
              value={this.state.password}
              onChange={this.handlePasswordChange.bind(this)}
					/>

				<View style={styles.horizContainer}>
					<ColoredRaisedButton
						onPress={this.requestLogin.bind(this)}/>
      	</View>

       {progress}
        
      </View>
   );
	}
}

module.exports = LoginComponent;

