import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';
import React, { useEffect, useState, useRef } from 'react';
import { Platform, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import TodoItem from './TodoItem';

const image = { uri: 'https://picsum.photos/1280/1280' };

export default function Diary({ navigation }) {
  const [list, setList] = useState([]);
  const [inputTodo, setInputTodo] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    AsyncStorage.getItem('list')
      .then((data) => {
        setList(JSON.parse(data));
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);

  const store = (newList) => {
    setList(newList);
    AsyncStorage.setItem('list', JSON.stringify(newList));
  };

  const onPressHandler = () => {
    if (inputTodo === '') {
      return;
    }
    const newItem = {
      id: `${inputTodo}_${new Date().getTime().toString()}`,
      todo: inputTodo,
      done: false,
    };
    store([...list, newItem]);
    setInputTodo('');
    inputRef.current.focus();
  };

  return (
    <Container source={image} resizeMode="cover">
      <KeyboardAvoidingView behavior={() => (Platform.OS === 'ios' ? 'padding' : 'height')}>
        <Contents>
          {list.map((item, index) => {
            return <TodoItem key={item.id} store={store} list={list} item={item} index={index} />;
          })}
        </Contents>
        <InputContainer>
          <Input ref={inputRef} value={inputTodo} onChangeText={(value) => setInputTodo(value)} onSubmitEditing={onPressHandler} />
          <Button title="전송" onPress={onPressHandler} />
        </InputContainer>
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

const InputContainer = styled.View`
  flex-direction: row;
  padding: 8px 24px;
`;

const Input = styled.TextInput`
  border: 1px solid #e5e5e5;
  flex: 1;
`;

const Button = styled.Button``;
