// import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useMemo } from 'react';
import Constants from 'expo-constants';
import styled from 'styled-components/native';
import _ from 'lodash';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { produce } from 'immer';

const image = { uri: 'https://picsum.photos/1280/1280' };

export default function Diary({ navigation }) {
  const [list, setList] = useState([]);
  const [inputTodo, setInputTodo] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('list')
      .then((data) => {
        if (data !== null) {
          setList(JSON.parse(data));
        }
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
      <KeyboardAvoidingView behavior={() => (false ? 'padding' : 'height')}>
        <Contents>
          {list.map((item) => {
            return (
              <TodoItem>
                <Check
                  onPress={() => {
                    store(
                      produce(list, (draft) => {
                        const index = list.indexOf(item);
                        draft[index].done = !list[index].done;
                      })
                    );
                  }}>
                  <CheckIcon>{item.done ? '체크' : '체크안됨'}</CheckIcon>
                </Check>
              </TodoItem>
            );
          })}
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

const TodoItem = styled.View`
    flex-direction: row;
    align-items: center;
  `;

const TodoItemText = styled.Text`
    font-size: 20px;
    flex: 1;
  `;

const TodoItemButton = styled.Button``;

const InputContainer = styled.View`
    flex-direction: row;
    padding: 8px 24px;
  `;

const Input = styled.TextInput`
    border: 1px solid #e5e5e5;
    flex: 1;
  `;

const Button = styled.Button`
  `;

const Check = styled.TouchableOpacity`
    margin-right: 4px;
  `;

const CheckIcon = styled.Text`
    font-size: 20px;
  `;
