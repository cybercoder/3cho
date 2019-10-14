import React, {Component} from 'react';
import {View, Text, TouchableHighlight, FlatList} from 'react-native';
import Realm from '../db';

class Conversation extends Component {
  constructor() {
    super();
    this.query = Realm.objects('messages');
    this.state = {
      messages: [],
      page: 0,
    };
  }
  loadMessages(page) {
    !page && (page = 0);

    if (page <= Math.ceil(this.query.length / 25)) {
      return this.setState({
        messages: this.state.messages.concat(
          Array.prototype.slice.call(
            Realm.objects('messages').sorted('createdAt', true),
            page * 25 + 1,
            page * 25 + 25,
          ),
        ),
        page: this.state.page + 1,
      });
    }
  }
  componentWillUnmount() {
    this.query.removeAllListeners();
  }
  componentDidMount() {
    this.loadMessages();
    this.query.addListener(
      n =>
        n.length > 0 &&
        this.setState({
          messages: n
            .sorted('createdAt', true)
            .slice(0, 1)
            .concat(this.state.messages),
        }),
    );
  }
  renderItem = ({item}) => {
    return (
      <TouchableHighlight onPress={() => {}}>
        <Text>{item.content}</Text>
      </TouchableHighlight>
    );
  };
  render() {
    console.log('render');

    return (
      <FlatList
        style={{flex: 1}}
        data={this.state.messages}
        inverted
        removeClippedSubviews={true}
        renderItem={this.renderItem}
        keyExtractor={item => item._id}
        onEndReached={() => {
          this.loadMessages(this.state.page);
        }}
        onEndReachedThreshold={0}
      />
    );
  }
}

export default Conversation;
