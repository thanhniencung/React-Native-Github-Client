import React, { Component } from 'react';
import RepositoryRow from './RepositoryRow';

var data = require('./demodata');

import {
  AppRegistry,
  ListView,
  StyleSheet,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});

class RepositoriesComponent extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  }
  
  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(data) => <RepositoryRow {...data} />}
      />
    );
  }
};


module.exports = RepositoriesComponent;