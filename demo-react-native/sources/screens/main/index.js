import React, { Component } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import PlayersList from '../../components/playersList/index';
import {
  getPlayers,
  addPlayer,
  deletePlayer,
  updatePlayer
} from '../../data/players';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 25
  },
  addRow: {
    flexDirection: 'row',
    width: '80%'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20
  },
  text: {
    width: '80%',
    borderBottomWidth: 1,
    padding: 5
  },
  loading: {
    flex: 1
  }
});

class MainScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      players: []
    };
  }

  componentDidMount = () => {
    const players = getPlayers();
    this.setState({ players: players });
  };

  handleAdd = () => {
    const { players } = this.state;
    const newList = addPlayer(players);
    this.setState({ players: newList });
  };

  handleUpdate = player => {
    const { players } = this.state;
    const newList = updatePlayer(players, player);
    this.setState({ players: newList });
  };

  handleDelete = player => {
    Alert.alert('¿Quieres eliminar al jugador?', player.text, [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'OK',
        onPress: () => {
          const { players } = this.state;
          const newList = deletePlayer(players, player);
          this.setState({ players: newList });
        }
      }
    ]);
  };

  render() {
    const { players } = this.state;
    return (
      <View style={styles.container}>
        <PlayersList
          players={players}
          onDelete={this.handleDelete}
        ></PlayersList>
      </View>
    );
  }
}

export default MainScreen;
