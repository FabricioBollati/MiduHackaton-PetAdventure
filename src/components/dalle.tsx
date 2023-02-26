import axios from "axios";

export const generateImage = async (prompt: any) => {
    const response = await axios.post("API_URL", {
      prompt,
      model: 'image-alpha-001',
      api_key:" API_KEY"
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    const imageData = response.data.image;
  
    // Do something with the image data, such as display it in your React Native app
    // using a library like react-native-image-picker or react-native-image-zoom-viewer.
  
    return imageData;
  };
  