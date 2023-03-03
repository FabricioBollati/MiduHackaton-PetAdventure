import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Text,
  TouchableOpacity,
} from 'react-native';
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
      <View style={styles.logo}>
        <Text style={styles.pet}>
          Pet<Text style={styles.adventure}>Adventure</Text>
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Generate a Funny Story about Your Pet!</Text>
        <Text style={styles.subtitle}>
          Fill out the form below to get started.
        </Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Name of Pet"
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

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={() =>
              navigation.navigate('StoryScreen', {
                color: color,
                type: type,
                name: name,
                personality: personality,
                raza: raza,
              })
            }>
            <Text style={styles.buttonText}>Generate Funny Story</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    top: -50,
  },
  pet: {
    fontWeight: 'bold',
    fontSize: 35,
    color: '#524571',
  },
  adventure: {
    color: '#8F78C6',
    fontWeight: 'bold',
    fontSize: 35,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#382b78',

    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: '#382b78',

    marginBottom: 32,
  },
  form: {
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#d4d1e3',
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#b3aaf2',
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  input: {
    height: 40,

    width: '80%',
    color: '#382b78',
    borderColor: '#b3aaf2',
    backgroundColor: '#e0dfe8',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingLeft: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 3,
  },
  button: {
    borderRadius: 10,
    borderWidth: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c5bfe3',
    padding: 8,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    color: '#524571',
  },
});
