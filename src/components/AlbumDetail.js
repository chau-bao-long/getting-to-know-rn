// @flow
import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const styles = {
  contentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  titleStyle: {
    fontSize: 20,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
};

export default function AlbumDetail({ album }) {
  const {
    thumbnail_image, title, artist, image, url,
  } = album;

  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainer}>
          <Image style={styles.thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={styles.contentStyle}>
          <Text style={styles.titleStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image 
          style={styles.imageStyle}
          source={{ uri: image }}
        />
      </CardSection>

      <CardSection>
        <Button onPress={() =>{ Linking.openURL(url); }}>Buy now</Button>
      </CardSection>
    </Card>
  );
}
