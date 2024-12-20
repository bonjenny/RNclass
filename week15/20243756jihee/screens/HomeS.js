// ./screens/HomeS.js
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Button, NativeBaseProvider } from 'native-base';
import Constants from 'expo-constants';
import styled from 'styled-components/native';

export default function HomeS({ navigation }) {
  return (
    <NativeBaseProvider>
      <Text>20243756 엄지희</Text>
      <ScrollView style={{ height: 150 }}>
        {screenList.map((screen) => (
          <Button
            size="sm"
            variant="solid"
            style={{ ...styles.button, ...styles[screen.key] }}
            onPress={() => navigation.navigate(screen.link)}>
            {screen.title}
          </Button>
        ))}
      </ScrollView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 150,
    margin: 10,
    color: '#000000',
    backgroundColor: '#7eb0ee',
    fontWeight: '15px'
  },
  AddressSearch: {
    backgroundColor: 'blue',
  },
  Diary: {
    backgroundColor: 'green'
  },
  Calculator: {
    backgroundColor: 'purple'
  }  
});

const screenList = [
  { key: 'AddressSearch', title: '주소검색', link: 'AddressSearch' },
  { key: 'Diary', title: '다이어리 목록', link: '다이어리 목록' },
  { key: 'Calculator', title: '환율 계산기', link: '환율 계산기' },
  { key: 'Todo', title: 'Todo', link: 'Todo' },
];
