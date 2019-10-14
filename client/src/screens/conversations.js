import React, {Component} from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {insertMessage} from '../db';

import {TEMP} from '../graphql/subscriptions';

class Conversations extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.client
      .subscribe({
        query: TEMP,
        fetchPolicy: 'network-only',
      })
      .subscribe({
        next(received) {
          insertMessage(received.data.tempSub)
            .then(message => {
              // this.setState({
              //   messages: this.state.messages.concat(message.data.tempSub),
              // });
            })
            .catch(e => console.log(e));
        },
      });
  }
  renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          Navigation.push(this.props.componentId, {
            component: {
              name: 'Conversation',
              passProps: {
                _id: item._id,
              },
              options: {
                topBar: {
                  title: {
                    text: item.content,
                  },
                },
              },
            },
          })
        }>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  render() {
    console.log(this.props.componentId);
    return (
      <FlatList
        data={[{_id: 1, name: 'c1'}]}
        renderItem={this.renderItem}
        keyExtractor={item => item._id.toString()}
      />
    );
  }
}

export default Conversations;
