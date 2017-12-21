import React, { Component } from 'react';
import { View, Text, ScrollView, Image, Button } from 'react-native';
import axios from 'axios';
import DogItemShow from './DogItemShow';
import Geoloc from './GeolocationExample';
import { MapView } from 'expo';
import { Actions } from 'react-native-router-flux';

export default class DogShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dog: { name: '', breed_id: 1, photo: { url: './dog_thumb.png' }},
      user: { name: '', since: '', photo: './dog_thumb.png', description: '' },
      mapLoaded: false,
      region: {
        longitude: -122,
        latitude: 37,
        longitudeDelta: 0.01,
        latitudeDelta: 0.03
      },
      reviews: [ { photo: './dog_thumb.png', user: '', date: '', description: '', id: '' } ]
    }
  }

  componentDidMount() {
    axios.get( `http://localhost:3000/api/dog?id=${this.props.id}` )
      .then(response => {
        this.setState({dog: response.data.dog, user: response.data.user, region: response.data.address, reviews: response.data.reviews })
        console.log(this.state.reviews)
      })
      .catch(error => console.log(error))
  }

  book() {
    Actions.bookModal()
  }

  render(){

    return (
      <View style={{flex: 1}}>
        <ScrollView style={{height: '100%', flex: 1}}>
          <DogItemShow
            elem={this.state.dog.id}
            name={this.state.dog.name.toUpperCase()}
            breed={this.state.dog.breed_id.toString()}
            uri={this.state.dog.photo.url.replace("/upload", "/upload/f_auto,q_auto,w_1000")}
            />
          <View style={styles.viewStyle}>
            <Text style={{color: '#9aa7af', marginBottom: 10, fontSize: 18}}>
              { this.state.user.last_sign_in_at }
            </Text>
            <Text style={styles.title}>
              Description
            </Text>
            <Text style={styles.text}>
              { this.state.dog.description }
            </Text>
            <Text style={styles.title}>
              Personality
            </Text>
            <View style={styles.personalityContainer}>
              <Text style={styles.personality}>
                { this.state.dog.personnality1 }
              </Text>
              <Text style={styles.personality}>
                { this.state.dog.personnality2 }
              </Text>
              <Text style={styles.personality}>
                { this.state.dog.personnality3 }
              </Text>
              <Text style={styles.personality}>
                { this.state.dog.personnality4 }
              </Text>
            </View>
            <Text style={styles.title}>
              Favorite Places
            </Text>
            <MapView scrollEnabled={false} region={this.state.region} style={{ flex: 1, borderRadius: 10, height: 300, width: null, marginBottom: 15 }}>
              <MapView.Marker
                coordinate={{latitude: this.state.region.latitude, longitude: this.state.region.longitude}}
                image={require('./dog.png')}
              />
            </MapView>
            <View style={{flexDirection: 'row', marginBottom: 15 }}>
              <View style={{flex: 2 }}>
                <Text style={styles.ownerName}>
                  Owned by {this.state.user.name}
                </Text>
                <Text style={{color: '#9aa7af', marginBottom: 10, fontSize: 18}}>
                  Member since {this.state.user.since}
                </Text>
              </View>
              <View style={{flex: 1, alignItems: 'flex-end' ,justifyContent: 'flex-end' }}>
                <Image source={{uri: this.state.user.photo }} style={styles.imageStyle}/>
              </View>
            </View>
            <Text style={styles.text}>
              { this.state.user.description }
            </Text>
            <Text style={styles.title}>
              Reviews
            </Text>
            <View>
            {this.state.reviews.map((review) => {
              if(this.state.reviews[0]) {
                return(
                  <View key={review.id}>
                    <View style={{flexDirection: 'row', marginBottom: 10 }}>
                      <View style={{flex: 1, alignItems: 'flex-start' ,justifyContent: 'flex-start' }}>
                        <Image source={{uri: review.photo }} style={styles.imageReviewStyle}/>
                      </View>
                      <View style={{flex: 2 }}>
                        <Text >
                          {review.user}
                        </Text>
                        <Text style={{color: '#9aa7af', marginBottom: 10, fontSize: 18}}>
                          {review.date}
                        </Text>
                      </View>
                    </View>
                    <Text style={styles.text}>
                      {review.description}
                    </Text>
                  </View>
                )
              } else {
                return (
                  <Text style={styles.text}>
                    No reviews yet
                  </Text>
                )
              }
            })}
            </View>

          </View>
          <Button title="Book" style={styles.button} onPress={this.book.bind(this)}/>
        </ScrollView>
      </View>
    )
  }
}

const styles = {
  viewStyle: {
    margin: 20,
    borderRadius:  10,
    flexDirection: 'column',
    marginBottom: 100
  },
  title: {
    fontSize: 28,
    fontWeight: '500',
    marginBottom: 15
  },
  ownerName: {
    fontSize: 24
  },
  text: {
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 15
  },
  personality: {
    fontSize: 16,
    padding: 5,
    color: '#64C7E3',
    borderColor: '#64C7E3',
    borderRadius: 5,
    borderWidth: 2,
    marginRight: 10,
  },
  personalityContainer: {
    flexDirection: 'row',
    marginBottom: 15
  },
  imageStyle: {
    borderRadius: 37,
    height: 75,
    width: 75,
    backgroundColor: 'white'
  },
  imageReviewStyle: {
    borderRadius: 27,
    height: 55,
    width: 55,
    backgroundColor: 'white'
  },
  button: {
    color: 'red',
    backgroundColor: 'red'
  }
}
