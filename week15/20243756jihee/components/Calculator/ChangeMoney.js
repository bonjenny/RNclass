import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';
import React, { useState } from 'react';
import { Platform, Button, Text, TextInput, View, StyleSheet, Alert } from 'react-native';
import styled from 'styled-components/native';

export default function ChangeMoney({ navigation }) {
  const [exchangeRate, setExchangeRate] = useState('');
  const [thbAmount, setThbAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(null);

  const handleConvert = () => {
    if (isNaN(thbAmount)) {
      alert('입력 오류', '변환할 바트 금액을 정확히 입력해주세요.');
      return;
    }

    if (isNaN(exchangeRate)) {
      alert('입력 오류', '환율을 정확히 입력해주세요.');
      return;
    }

    const converted = thbAmount * exchangeRate;
    setConvertedAmount(converted.toFixed(2));
  };

  const handleReset = () => {
    setThbAmount('');
    setConvertedAmount(null);
    setExchangeRate('');
    AsyncStorage.removeItem('exchangeRate');
  };

  return (
    <Container resizeMode="cover">
      <Header>
        <HeaderText>오늘의 환율 계산기</HeaderText>
      </Header>

      <TextInputContainer>
        <TextInput
          style={styles.textInput}
          placeholder="오늘의 환율 (THB -> KRW)"
          value={exchangeRate}
          onChangeText={(value) => setExchangeRate(value)}
          keyboardType="numeric"
        />
        <Text>THB -{'>'} KRW</Text>
      </TextInputContainer>

      <TextInputContainer>
        <TextInput
          style={styles.textInput}
          placeholder="변환할 바트 금액 입력"
          value={thbAmount}
          onChangeText={(value) => setThbAmount(value)}
          keyboardType="numeric"
        />
      </TextInputContainer>

      <ButtonContainer>
        <Button title="환전" onPress={handleConvert} />
        <Button title="초기화" onPress={handleReset} color="red" />
      </ButtonContainer>

      {convertedAmount && (
        <Result>
          <Text>환산된 원화 금액: {convertedAmount} 원</Text>
        </Result>
      )}
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Constants.statusBarHeight}px;
  align-items: center;
`;

const Header = styled.View`
  width: 100%;
  padding: 10px;
  align-items: flex-start;
`;

const HeaderText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const TextInputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  width: 80%;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  margin-top: 20px;
  justify-content: space-evenly;
  width: 80%;
`;

const Result = styled.View`
  margin-top: 20px;
`;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: 'silver',
    flex: 1,
    height: 40,
    paddingLeft: 10,
    marginRight: 10,
  },
});
