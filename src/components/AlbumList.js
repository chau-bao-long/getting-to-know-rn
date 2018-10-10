// @flow
import React from 'react';
import { Text, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

type Props = {
};

type State = {
	albums: Array,
};

export default class AlbumList extends React.Component<Props, State> {
	state = {
		albums: [],
	}

	componentWillMount() {
		axios.get('http://rallycoding.herokuapp.com/api/music_albums').then((res) => {
      this.setState({ albums: res.data });
		});
	}

  render() {
    const { albums } = this.state;
    return (
      <ScrollView>
        {
          albums.map(a => <AlbumDetail key={a.title} album={a} />)
        }
      </ScrollView>
    );
  }
}
