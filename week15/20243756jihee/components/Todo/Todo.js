import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';
import React, { useEffect, useState } from 'react';
import { Platform, Text } from 'react-native';
import styled from 'styled-components/native';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

const image = { uri: 'https://picsum.photos/1280/1280' };

export default function Todo({ navigation }) {
  const [list, setList] = useState([]);

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

  return (
    <Container source={image} resizeMode="cover">
      <KeyboardAvoidingView behavior={() => (Platform.OS === 'ios' ? 'padding' : 'height')}>
        <Text>20243756 엄지희</Text>
        <Contents>
          {list.map((item, index) => {
            return <TodoItem key={item.id} store={store} list={list} item={item} index={index} />;
          })}
        </Contents>
        <TodoInput store={store} list={list} />
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
