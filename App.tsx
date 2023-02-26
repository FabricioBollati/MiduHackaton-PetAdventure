import React, {useEffect, useState} from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  ActivityIndicator,
} from 'react-native';
import {generateText} from './src/components/openai';
import {generateImage} from './src/components/dalle';
import Loading from './src/components/isLoading';

export default function App() {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [color, setColor] = useState('');
  const [personality, setPersonality] = useState('');
  const [story, setStory] = useState('');
  const [imageData, setImageData] = useState('');
  const {isLoading, setIsLoading} = Loading();

  const generateFunnyStory = async () => {
    const prompt = `Generate a very short but funny story that talks about Once upon a time, there was a ${color} ${type} named ${name}. ${name} was known for being ${personality}. One day, ${name} went on an adventure and ended up getting into some hilarious situations. Here's what happened:\n\n`;

    try {
      setIsLoading(true);
      const {generatedText} = await generateText(prompt);
      setStory(generatedText);
      setIsLoading(false);
      // const imageData = await generateImage(generatedText);
      // setImageData(imageData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
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

        <Button title="Generate Funny Story" onPress={generateFunnyStory} />
      </View>

      {isLoading ? (
        <View style={styles.loadingIndicator}>
          <ActivityIndicator color="black" size={50} />
        </View>
      ) : story !== '' ? (
        <View style={styles.output}>
          <Text style={styles.outputTitle}>Here's Your Funny Story!</Text>
          <Text style={styles.outputText}>{story}</Text>

          {/* {imageData !== '' && (
           <Image source={{ uri: imageData }} style={styles.outputImage} />
         )} */}
        </View>
      ) : null}
    </View>
  );
}

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
  output: {
    marginTop: 32,
    alignItems: 'center',
  },
  outputTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  outputText: {
    fontSize: 16,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
