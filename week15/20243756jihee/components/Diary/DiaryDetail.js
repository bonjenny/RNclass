import Constants from 'expo-constants';
import _ from 'lodash';
import { NativeBaseProvider } from 'native-base';
import { z } from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';

const image = { uri: 'https://picsum.photos/1280/1280' };

export default function DiaryDetail({ navigation, route }) {
  const { store, list, item, index } = route.params;

  return (
    <NativeBaseProvider>
      <Container source={image} resizeMode="cover">
        <Text>{item.date}</Text>
        <KeyboardAvoidingView behavior={() => (Platform.OS === 'ios' ? 'padding' : 'height')}>
          <Contents>
            <TextContainer style={{ height: '300px' }}>
              <Text>{item.content}</Text>
            </TextContainer>
            <DeleteButton
              title="삭제"
              onPress={() => {
                store(_.reject(list, (element) => element.id === item.id));
                alert('삭제되었습니다!');
              }}
            />
          </Contents>
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

const Title = styled.Text`
  padding: 10px;
  font-weight: bold;
`;

const TextContainer = styled.View`
  flex-direction: row;
  padding: 8px 24px;
`;

const Text = styled.Text`
  flex: 1;
`;

const DeleteButton = styled.Button``;
