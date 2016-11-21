import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  TextInput,
  View
} from 'react-native';

const styles = require('../style/profileStyle');
var repositoriesComponent = require('./RepositoriesComponent');
var followersComponent = require('./FollowersComponent');

class ProfileComponent extends Component {
	constructor(props) {
    	super(props);
  }

  showRepositories() {
    this.props.navigator.push({
                title: "Repositories",
                component: repositoriesComponent,
                passProps: {
                  repositoryUrl: this.props.profile.repos_url
                }
              });
  }

  showFollowers() {
    this.props.navigator.push({
                title: "Followers",
                component: followersComponent,
                passProps: {
                  url: this.props.profile.followers_url
                }
              });
  }

  showStars() {
    this.props.navigator.push({
                title: "Stars",
                component: repositoriesComponent,
                passProps: {
                  repositoryUrl: "https://api.github.com/users/" + this.props.profile.login + "/starred"
                }
              });
  }

  showFollowing() {
    this.props.navigator.push({
                title: "Following",
                component: followersComponent,
                passProps: {
                  url: "https://api.github.com/users/" + this.props.profile.login + "/following"
                }
              });
  }  
    
	render() {
      return (
          <View style={styles.container}>
             <View style={styles.information}>
                  <View style={styles.horizContainer}>
                    <Image
                      source={{uri: this.props.profile.avatar_url}}
                      style={styles.avatar}
                    />
                  </View>

                  <View style={styles.horizContainer}>
                     <Text style={styles.nameText}> {this.props.profile.name} </Text>
                  </View>

                  <View style={styles.horizContainer}>
                     <Text style={styles.locationText}> {this.props.profile.location} </Text>
                  </View>

              </View>

              <View style={styles.repositories}>
                  <View style={styles.horizContainer}>
                     <Text 
                        style={styles.cateText}
                        onPress={this.showRepositories.bind(this)}
                        > Repositories </Text>
                  </View>
              </View>

              <View style={styles.stars}>
                  <View style={styles.horizContainer}>
                     <Text
                        onPress={this.showStars.bind(this)} 
                        style={styles.cateText}> Stars </Text>
                  </View>
              </View>

              <View style={styles.fllowers}>
                  <View style={styles.horizContainer}>
                     <Text 
                        onPress={this.showFollowers.bind(this)}
                        style={styles.cateText}> Followers </Text>
                  </View>
              </View>

              <View style={styles.following}>
                  <View style={styles.horizContainer}>
                     <Text 
                        onPress={this.showFollowing.bind(this)}
                        style={styles.cateText}> Following </Text>
                  </View>
              </View>
          </View>
      );
	  }
  }



module.exports = ProfileComponent;