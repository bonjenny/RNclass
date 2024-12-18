import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';
import React, { useEffect, useState, useCallback, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, Text, TextInput, SafeAreaView, View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import ChangeMoney from './ChangeMoney';

export default function Calculator() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>20243756 엄지희</Text>
      <ChangeMoney />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
    flex: 1,
  },
});
