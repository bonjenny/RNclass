// ./screens/HomeS.js
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Button, NativeBaseProvider } from 'native-base';
import Constants from 'expo-constants';
import styled from 'styled-components/native';

export default function HomeS({ navigation }) {
  return (
    <NativeBaseProvider>
      <View>
        <Text>20243756 엄지희</Text>
      </View>
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
  addressSearch: {
    backgroundColor: 'blue',
  },
  diary: {
    backgroundColor: 'green'
  },
  currency: {
    backgroundColor: 'purple'
  }  
});

const screenList = [
  { key: 'addressSearch', title: '주소검색', link: 'AddressSearch' },
  { key: 'diary', title: '일기', link: 'Diary' },
  { key: 'currency', title: '환율 계산기', link: 'Currecy' },
];
