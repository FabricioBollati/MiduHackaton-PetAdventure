import React, {Children} from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import {useState} from 'react';

export const Loading = () => {
  const [isLoading, setIsLoading] = useState(false);

  return {
    isLoading,
    setIsLoading,
  };
};

export default Loading;
