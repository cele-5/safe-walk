import * as React from 'react';
import { Button, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import * as Facebook from 'expo-auth-session/providers/facebook';
import * as WebBrowser from 'expo-web-browser';

import firebase from 'firebase';
import { ResponseType } from 'expo-auth-session';

var requestInProgress = false;

const permissions = ['public_profile', 'email'];  // Permissions required, consult Facebook docs

WebBrowser.maybeCompleteAuthSession();

export default function TabOneScreen() {
  
  const [request, response, promptAsync] = Facebook.useAuthRequest({
      clientId: process.env.FACEBOOK_APP_ID,
      responseType: ResponseType.Token
    });

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params;
      }
      requestInProgress = false;
  }, [response]);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <Button disabled ={requestInProgress} onPress={() => {requestInProgress = true;promptAsync();}} title="Login with Facebok">Login</Button>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
