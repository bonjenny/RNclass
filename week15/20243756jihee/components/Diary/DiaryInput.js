import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';
import React, { useEffect, useState, useCallback } from 'react';
import { Platform, Text, TextInput } from 'react-native';
import { Button, NativeBaseProvider } from 'native-base';
import styled from 'styled-components/native';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

const image = { uri: 'https://picsum.photos/1280/1280' };

export default function DiaryInput({ navigation }) {
  const [inputDate, setInputDate] = useState('');
  const [inputContent, setInputContent] = useState('');

  const onSaveHandler = useCallback(() => {
    navigation.navigate('다이어리 작성');
  }, []);

  return (
    <NativeBaseProvider>
      <Container source={image} resizeMode="cover">
        <Text>20243756 엄지희</Text>
        <KeyboardAvoidingView behavior={() => (Platform.OS === 'ios' ? 'padding' : 'height')}>
          <Contents>
            <Title>날짜</Title>
            <InputContainer style={{ height: '100px' }}>
              <Input value={inputDate} onChangeText={(value) => setInputDate(value)} />
            </InputContainer>
            <Title>내용</Title>
            <InputContainer style={{ height: '300px' }}>
              <Input value={inputContent} onChangeText={(value) => setInputContent(value)} />
            </InputContainer>
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

const InputContainer = styled.View`
  flex-direction: row;
  padding: 8px 24px;
`;

const Input = styled.TextInput`
  border: 1px solid #e5e5e5;
  flex: 1;
`;

const Button = styled.Button``;
