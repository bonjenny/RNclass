import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';
import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Platform, TextInput } from 'react-native';
import { Button, NativeBaseProvider } from 'native-base';
import styled from 'styled-components/native';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

const image = { uri: 'https://picsum.photos/1280/1280' };

export default function DiaryDetail({ navigation, route }) {
  const { item } = route.params;

  return (
    <NativeBaseProvider>
      <Container source={image} resizeMode="cover">
        <Text>{item.date}</Text>
        <KeyboardAvoidingView behavior={() => (Platform.OS === 'ios' ? 'padding' : 'height')}>
          <Contents>
            <TextContainer style={{ height: '300px' }}>
              <Text>{item.content}</Text>
            </TextContainer>
            <Button onPress={onSaveHandler}>저장</Button>
          </Contents>
        </KeyboardAvoidingView>
      </Container>
    </NativeBaseProvider>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Constants.statusBarHeight}px;
`;

const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
`;

const Contents = styled.ScrollView`
  flex: 1;
  padding: 8px 24px;
`;

const Title = styled.Text`
  padding: 10px;
  font-weight: bold;
`;

const TextContainer = styled.View`
  flex-direction: row;
  padding: 8px 24px;
`;

const Text = styled.Text`
  flex: 1;
`;
