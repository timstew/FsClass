import React, {Component} from 'react'

import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default class Posts extends Component {
  render(){
    return(
      <View style={styles.container}>
       <Text style={styles.text}>Create Post</Text>
       <Text style={styles.text}>Edit Post</Text>
       <Text style={styles.text}>Delete Post</Text>

     </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'red',
    flex: 1
  },
  text: {
    fontSize: 20
  }
})