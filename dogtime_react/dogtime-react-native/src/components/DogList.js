import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import DogItem from './DogItem';

export default class DogList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return fetch('http://localhost:3000/api/dogs')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.dogs),
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <DogItem
              elem={rowData.id}
              name={rowData.name.toUpperCase()}
              breed={rowData.breed_id.toString()}
              uri={rowData.photo.url.replace("/upload", "/upload/f_auto,q_auto,w_1000")}
              />
          }
        />
      </View>
    );
  }
}


