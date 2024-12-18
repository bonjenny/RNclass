import React, { useState, useRef } from 'react';
import styled from 'styled-components/native';

export default function TodoInput({ store, list }) {
  const [inputTodo, setInputTodo] = useState('');
  const inputRef = useRef(null);

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
    <InputContainer>
      <Input ref={inputRef} value={inputTodo} onChangeText={(value) => setInputTodo(value)} onSubmitEditing={onPressHandler} />
      <Button title="전송" onPress={onPressHandler} />
    </InputContainer>
  );
}

const InputContainer = styled.View`
  flex-direction: row;
  padding: 8px 24px;
`;

const Input = styled.TextInput`
  border: 1px solid #e5e5e5;
  flex: 1;
`;

const Button = styled.Button``;
