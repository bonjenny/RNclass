// ./components/LottoGenerator.js
import React from 'react';
import { SafeAreaView, View, Button, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import _ from 'lodash';
import styled from 'styled-components/native'

const numbers = [];
_.times(45, (n) => numbers.push(n + 1));

export default function LottoGenerator() {
  const [displayNumbers, setNumbers] = React.useState(
    _.take(_.shuffle(numbers), 6)
  );

  return (
    <Container>
      <Row>
        {displayNumbers.map((number) => (
          <Ball value={number}>
            <Text>{number}</Text>
          </Ball>
        ))}
      </Row>
      <Button
        title="다시하기"
        onPress={() =>
          setNumbers(_.take(_.shuffle(numbers), 6))
        }></Button>
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: ${ Constants.statusBarHeight }px;
  justify-content: center;
  align-items: center;
`;

const Row = styled.View`
  flex-direction: row;
  margin-bottom: 24px;
`;

const Ball = styled.View`
  width: 50px;
  height: 50px;
  background-color: ${ props => {
    if (props.value < 11) return '#e5e251';
    else if (props.value < 21) return '#517ef5';
    else if (props.value < 31) return '#e54036';
    else if (props.value < 41) return '#e5e5e5';
    else return '#43bf74';
  }};
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  border-color: black;
  font-size: 20px;
  font-weight: bold;
`;