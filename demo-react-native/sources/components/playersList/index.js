import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  View,
  Text
} from 'react-native';
import deleteImage from '../../../assets/images/delete.png';
import { Button, Card, Title, Paragraph } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  contentContainer: {
    flexGrow: 1
  },
  listItem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15
  },
  text: {
    flex: 1,
    marginLeft: 5,
    fontWeight: 'bold'
  },
  textDone: {
    color: '#aaa',
    textDecorationLine: 'line-through',
    fontWeight: 'normal'
  },
  icon: {
    width: 20,
    height: 20
  },
  delete: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    width: '70%'
  }
});

const PlayersList = ({ players, onDelete }) => {
  const renderPlayer = player => {
    return (
      <View style={styles.listItem}>
        <Card style={styles.card}>
          <Card.Content>
            <Title>{player.item.name}</Title>
            <Paragraph>{player.item.alias}</Paragraph>
          </Card.Content>
          <Card.Cover source={player.item.image} />
          <Card.Actions>
            <Button
              style={{
                flex: 0,
                alignItems: 'center',
                justifyContent: 'center',
                width: '50%'
              }}
            >
              <Text style={{ textAlign: 'center' }}>Editar</Text>
            </Button>
            <Button style={{ flex: 1 }} onPress={() => onDelete(player)}>
              <Image style={styles.icon} source={deleteImage}></Image>
            </Button>
          </Card.Actions>
        </Card>
      </View>
    );
  };

  return (
    <FlatList
      data={players}
      renderItem={player => renderPlayer(player)}
      keyExtractor={player => player.id}
      style={styles.container}
      contentContainerStyle={{ justifyContent: 'center' }}
    ></FlatList>
  );
};

export default PlayersList;
