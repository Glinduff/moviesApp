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
        {this.state.cinemas.map(cinema => (
          <Text>{cinema.name}</Text>
        ))}
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
