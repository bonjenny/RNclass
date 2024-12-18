import { View, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeS from './screens/HomeS';
import AddressSearch from './components/AddressSearch';
import Diary from './components/Diary/Diary';
import DiaryInput from './components/Diary/DiaryInput';
import DiaryDetail from './components/Diary/DiaryDetail';
import Currency from './components/Currency';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="앱개발실무" component={HomeS} />
        <Stack.Screen name="AddressSearch" component={AddressSearch} />
        <Stack.Screen name="다이어리 목록" component={Diary} />
        <Stack.Screen name="다이어리 작성" component={DiaryInput} />
        <Stack.Screen name="다이어리 상세" component={DiaryDetail} />
        <Stack.Screen name="Currency" component={Currency} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
