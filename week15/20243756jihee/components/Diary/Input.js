import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';
import React, { useEffect, useState } from 'react';
import { Platform, Text } from 'react-native';
import styled from 'styled-components/native';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

const image = { uri: 'https://picsum.photos/1280/1280' };

export default function Input({ navigation }) {
  const [inputDate, setInputDate] = useState('');
  const [inputContent, setInputContent] = useState('');

  const onSaveHandler = useCallback(() => {
    //
  }, [])

  return (
    <Container source={image} resizeMode="cover">
      <Text>20243756 엄지희</Text>
      <KeyboardAvoidingView behavior={() => (Platform.OS === 'ios' ? 'padding' : 'height')}>
        <Contents>
          <Title>날짜</Title>
          <InputContainer>
            <Input value={inputDate} onChangeText={(value) => setInputDate(value)} />
          </InputContainer>
          <Title>내용</Title>
          <InputContainer>
            <Input value={inputContent} onChangeText={(value) => setInputContent(value)} />
          </InputContainer>
          <Button title="저장" onPress={onSaveHandler} />
        </Contents>
      </KeyboardAvoidingView>
    </Container>
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
