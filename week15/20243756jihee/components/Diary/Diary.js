import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';
import { Button, NativeBaseProvider } from 'native-base';
import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import TodoItem from './TodoItem';
import DiaryItem from './DiaryItem';

const image = { uri: 'https://picsum.photos/1280/1280' };

export default function Diary({ navigation }) {
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
    <NativeBaseProvider>
      <Container source={image} resizeMode="cover">
        <KeyboardAvoidingView behavior={() => (Platform.OS === 'ios' ? 'padding' : 'height')}>
          <Contents>
            {list.map((item, index) => {
              return <DiaryItem key={item.id} store={store} list={list} item={item} index={index} />;
            })}
          </Contents>
          <Button onPress={() => navigation.navigate('다이어리 작성', { store, list })}>새 일기 작성</Button>
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
