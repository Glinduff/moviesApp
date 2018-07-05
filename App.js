import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { fetchNowPlaying } from "./utils/api";

export default class App extends React.Component {

  state = {
    cinemas: []
  }
  componentDidMount() {
    return fetchNowPlaying()
      .then(cinemas => this.setState({
        cinemas
      }))
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          {this.state.cinemas.map(cinema => (
          <View key={cinema.id}>
            <Text >{cinema.name}</Text>
            <View>

              <Text>{JSON.stringify(cinema.movies)}</Text>
            </View>
          </View>
          ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
