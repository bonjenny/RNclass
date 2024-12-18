import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';
import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Platform, Text, TextInput } from 'react-native';
import { Button, NativeBaseProvider } from 'native-base';
import styled from 'styled-components/native';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

const image = { uri: 'https://picsum.photos/1280/1280' };

export default function DiaryInput({ navigation, store, list }) {
  const [inputDate, setInputDate] = useState('');
  const [inputContent, setInputContent] = useState('');
  const inputDateRef = useRef(null);
  const inputContentRef = useRef(null);

  useEffect(() => {
    inputDateRef.current.focus();
  }, []);

  const onSaveHandler = useCallback(() => {
    if (inputDate === '') {
      return;
    }
    const newItem = {
      id: new Date().getTime().toString(),
      date: inputDate,
      content: inputContent,
    };
    store([...list, newItem]);
    setInputDate('');
    setInputContent('');
    navigation.navigate('다이어리 목록');
  }, []);

  return (
    <NativeBaseProvider>
      <Container source={image} resizeMode="cover">
        <Text>20243756 엄지희</Text>
        <KeyboardAvoidingView behavior={() => (Platform.OS === 'ios' ? 'padding' : 'height')}>
          <Contents>
            <Title>날짜</Title>
            <InputContainer style={{ height: '100px' }}>
              <Input ref={inputDateRef} value={inputDate} onChangeText={(value) => setInputDate(value)} />
            </InputContainer>
            <Title>내용</Title>
            <InputContainer style={{ height: '300px' }}>
              <Input ref={inputContentRef} value={inputContent} onChangeText={(value) => setInputContent(value)} />
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