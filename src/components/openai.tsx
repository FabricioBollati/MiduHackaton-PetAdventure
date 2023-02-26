import axios from 'axios';
import {useState} from 'react';
import Loading from '../components/isLoading';

const API_URL = 'https://api.openai.com/v1/engines/davinci/completions';
const API_KEY = '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';

export const generateText = async (prompt?: any) => {
  // const {isLoading, setIsLoading} = Loading();

  const response = await axios.post(
    API_URL,
    {
      prompt,
      temperature: 0.8,
      max_tokens: 300,
      top_p: 1,
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

  const generatedText = await response.data.choices[0].text;
  // setIsLoading(false);
  return {generatedText, prompt};
};
