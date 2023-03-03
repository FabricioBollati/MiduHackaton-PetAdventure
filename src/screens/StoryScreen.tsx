import {
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import {useEffect, useState} from 'react';
import Loading from '../components/isLoading';
import {generateText} from '../components/openai';
import {generateImage} from '../components/dalle';

export const StoryScreen = ({route}: any) => {
  const {color, type, name, personality, raza} = route.params;
  const [story, setStory] = useState('');
  const [imageData, setImageData] = useState('');
  const {isLoading, setIsLoading} = Loading();

  const generateFunnyStory = async () => {
    const prompt = `Generate a very short but funny story no more than one paragraph that talks about a ${color} ${raza} ${type} named ${name}. ${name} was known for being ${personality}.One day, ${name} went on an adventure and ended up getting into some hilarious situations. Here's what happened:\n\n`;
    const promptDalle = `A ${type} ${raza}, skin color ${color} named ${name} with a personality ${personality} doing funny things and being dumb`;
    try {
      setIsLoading(true);
      const {generatedText} = await generateText(prompt);
      setStory(generatedText);
      // const paragraphs = generatedText.split('\n\n');
      // const firstParagraph = paragraphs[0];
      // console.log(firstParagraph);
      setIsLoading(false);

      setIsLoading(true);
      const imageData = await generateImage(promptDalle);
      setImageData(imageData);
      setIsLoading(false);

      // console.log(imageData);
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    generateFunnyStory();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.pet}>
          Pet<Text style={styles.adventure}>Adventure</Text>
        </Text>
      </View>

      {isLoading ? (
        <View style={styles.loadingIndicator}>
          <ActivityIndicator color="black" size={50} />
        </View>
      ) : (
        story && (
          <View style={styles.output}>
            <Text style={styles.outputTitle}>Here's Your Funny Story!</Text>
            <Text style={styles.outputText}>{story}</Text>

            {isLoading ? (
              <View style={styles.loadingIndicator}>
                <ActivityIndicator color="black" size={50} />
              </View>
            ) : (
              imageData && (
                <View style={styles.imageContainer}>
                  <Image source={{uri: imageData}} style={styles.outputImage} />
                </View>
              )
            )}
          </View>
        )
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  pet: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#524571',
  },
  adventure: {
    color: '#8F78C6',
    fontWeight: 'bold',
    fontSize: 30,
  },
  output: {
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
  outputTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#1d173d',
  },
  outputText: {
    fontSize: 16,
    color: '#382b78',
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outputImage: {
    height: 200,
    width: 170,
    borderRadius: 10,
  },
  imageContainer: {
    shadowColor: '#000',
    marginTop: 12,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 10,
  },
});
