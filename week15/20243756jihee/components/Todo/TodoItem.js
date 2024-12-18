import AsyncStorage from '@react-native-async-storage/async-storage';
import { produce } from 'immer';
import _ from 'lodash';
import React, { useState } from 'react';
import styled from 'styled-components/native';

export default function TodoItem({ store, list, item, index }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(item.todo);

  const handleSaveEdit = () => {
    store(
      produce(list, (draft) => {
        draft[index].todo = editedText;
      })
    );
    setIsEditing(false);
  };

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

      {isEditing ? (
        <TextInput
          value={editedText}
          onChangeText={setEditedText}
          onBlur={handleSaveEdit}
          autoFocus
        />
      ) : (
        <TodoItemText onPress={() => setIsEditing(true)}>
          {item.todo}
        </TodoItemText>
      )}

      <TodoItemButton
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

const TodoItemText = styled.Text`
  font-size: 20px;
  flex: 1;
`;

const TextInput = styled.TextInput`
  font-size: 20px;
  flex: 1;
  background-color: #f0f0f0;
  padding: 5px;
  border-radius: 5px;
`;

const TodoItemButton = styled.Button``;
