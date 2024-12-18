import AsyncStorage from '@react-native-async-storage/async-storage';
import { produce } from 'immer';
import _ from 'lodash';
import React from 'react';
import styled from 'styled-components/native';

export default function DiaryItem({ store, list, item, index }) {
  return (
    <Item key={item.id}>
      <Check
        onPress={() => {
          store(
            produce(list, (draft) => {
              draft[index].done = !draft[index].done;
            })
          );
        }}
      >
        <CheckIcon>{item.done ? '☑' : '☐'}</CheckIcon>
      </Check>
      <DiaryItemText>{item.todo}</DiaryItemText>
      <DiaryItemButton
        title="삭제"
        onPress={() => {
          store(_.reject(list, (element) => element.id === item.id));
        }}
      />
    </Item>
  );
}

const Item = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 10px;
`;

const Check = styled.TouchableOpacity`
  margin-right: 4px;
`;

const CheckIcon = styled.Text`
  font-size: 20px;
`;

const DiaryItemText = styled.Text`
  font-size: 20px;
  flex: 1;
`;

const DiaryItemButton = styled.Button``;
