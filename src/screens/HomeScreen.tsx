import React from 'react';
import {View, TextInput, StyleSheet, Button, Text} from 'react-native';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

export const HomeScreen = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [color, setColor] = useState('');
  const [raza, setRaza] = useState('');
  const [personality, setPersonality] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Generate a Funny Story about Your Pet!</Text>
      <Text style={styles.subtitle}>
        Fill out the form below to get started.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Name of Pettt"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Type of Pet (e.g. dog, cat, fish, etc.)"
          value={type}
          onChangeText={setType}
        />
        <TextInput
          style={styles.input}
          placeholder="Raza?"
          value={raza}
          onChangeText={setRaza}
        />
        <TextInput
          style={styles.input}
          placeholder="Color of Pet's Hair"
          value={color}
          onChangeText={setColor}
        />

        <TextInput
          style={styles.input}
          placeholder="Type of Personality (e.g. silly, adventurous, grumpy, etc.)"
          value={personality}
          onChangeText={setPersonality}
        />

        <Button
          title="Generate Funny Story"
          onPress={() =>
            navigation.navigate('StoryScreen', {
              color: color,
              type: type,
              name: name,
              personality: personality,
              raza: raza,
            })
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 32,
  },
  form: {
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingLeft: 8,
  },
});
