import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, Button, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import styled from 'styled-components/native';

const image = { uri: 'https://picsum.photos/1280/1280' };

export default function Currency({ navigation }) {
  return (
    <Container source={image} resizeMode="cover">
    </Container>
  );
}

const Container = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-itmes: center;
`;

const TimeText = styled.Text`
  font-size: 64px;
  font-weight: bold;
  background: rgba(255, 255, 255, 0.5);
`;

const Second = styled.Text`
  font-size: 30px;
  font-weight: bold;
  margin-top: 12px;
  background: rgba(255, 255, 255, 0.5);
`;
