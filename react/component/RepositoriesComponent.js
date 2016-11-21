import React, { Component } from 'react';

import {
  AppRegistry,
  ListView,
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';

const styles = require('../style/repositoriesStyle');
class RepositoriesComponent extends Component {
  constructor(props) {
    super(props);

    var repositoryArray = [];
    const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      isLoading:true,
      dataSource: dataSource.cloneWithRows(repositoryArray),
    };
  }

  getRepositories() {
    var self = this;
    fetch(self.props.repositoryUrl, {
        method: 'GET'
      }).then(function(response) {
          return response.json();
      }).then(function(json) {
        self.setState({
          dataSource: self.state.dataSource.cloneWithRows(json),
          isLoading:false
        });
      }).catch((error) => {
          console.error(error);
      }).done(function() {
        console.log("finish network")  
      });
  }

  componentDidMount() {
    this.getRepositories();
  }

  renderRow(rowData) {
    console.log(rowData);
    return (
      <View style={styles.rowContainer}>
        <Image
            source={require('../../res/img/ic_repository.png')}
            style={styles.photo} />
        <Text style={styles.text}>
          {rowData.full_name}
        </Text>
      </View>
    );
  }
  
  render() {
    var listView = (this.state.isLoading)?<View/>:<ListView 
                                                      dataSource={this.state.dataSource} 
                                                      renderRow={this.renderRow.bind(this)}
                                                      automaticallyAdjustContentInsets={false}
                                                      />
    return(
      <View style={{flex: 1, marginTop: 75}}>
      {listView}
      </View>
    );
  }
};


module.exports = RepositoriesComponent;