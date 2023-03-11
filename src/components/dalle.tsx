import axios from 'axios';

const API_URL = 'https://api.openai.com/v1/images/generations';
const API_KEY = 

export const generateImage = async (prompt: any) => {
  const response = await axios.post(
    API_URL,
    {
      prompt,
      n: 1,
      size: '512x512',
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
    },
  );

  const imageData = response.data.data[0].url;

  // console.log(imageData);
  // Do something with the image data, such as display it in your React Native app
  // using a library like react-native-image-picker or react-native-image-zoom-viewer.

  return imageData;
};
