// import axios from 'axios';

// const API_URL = 
// const API_KEY = 

// export const generateText = async (prompt: any) => {
//   const response = await axios.post(
//     API_URL,
//     {
//       prompt,
//       temperature: 0.8,
//       max_tokens: 300,
//       top_p: 1,
//       frequency_penalty: 0,
//       presence_penalty: 0,
//     },
//     {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${API_KEY}`,
//       },
//     },
//   );

//   const generatedText = await response.data.choices[0].text;
//   return {generatedText, prompt};
// };

import axios from 'axios';

const API_URL = 'https://api.openai.com/v1/engines/curie/completions';
const API_KEY = 

/**
 * Generates text based on a given prompt using the OpenAI API.
 * @param {string} prompt The text prompt to generate text from.
 * @returns {Promise<{generatedText: string, prompt: string}>} A promise that resolves to an object containing the generated text and the original prompt.
 */
export const generateText = async (prompt: string) => {
  try {
    const response = await axios.post(
      API_URL,
      {
        prompt,
        temperature: 0.7,
        max_tokens: 148,
        top_p: 0.8,
        frequency_penalty: 0,
        presence_penalty: 0,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
      },
    );

    const generatedText = response.data.choices[0].text.trim();
    // .split('\n\n')[0]
    return {generatedText};
  } catch (error) {
    console.error(`Error generating text: ${error}`);
    throw error;
  }
};
