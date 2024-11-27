// KeyboardAvoidingView (공식 홈: 예제)
import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard
} from 'react-native';

const KeyboardAvoidingComponent = () => {
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS==='ios'?'padding':'height'}
    style={styles}>

    </KeyboardAvoidingView>
  )
}

export default KeyboardAvoidingComponent