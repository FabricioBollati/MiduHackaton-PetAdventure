import {Text, View, ActivityIndicator, StyleSheet} from 'react-native';
import {useEffect, useState} from 'react';
import Loading from '../components/isLoading';
import {generateText} from '../components/openai';

export const StoryScreen = ({route}: any) => {
  const {color, type, name, personality} = route.params;
  const [story, setStory] = useState('');
  //   const [imageData, setImageData] = useState('');
  const {isLoading, setIsLoading} = Loading();

  const generateFunnyStory = async () => {
    const prompt = `Generate a very short but funny story no more than one paragraph that talks about a ${color} ${type} named ${name}. ${name} was known for being ${personality}.One day, ${name} went on an adventure and ended up getting into some hilarious situations. Here's what happened:\n\n`;

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

  useEffect(() => {
    generateFunnyStory();
  }, []);

  return (
    <View>
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
};

const styles = StyleSheet.create({
  output: {
    marginTop: 6,
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
