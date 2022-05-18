/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import ColoredView from 'example-component/src/index';
import Calculator from 'example-library/src/index';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSafeAreaFrame} from 'react-native-safe-area-context';
import PagerView from 'react-native-pager-view';

const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Autolinking Example" component={HomeScreen} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
        <Stack.Screen name="Screen4" component={Screen4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function Screen2() {
  const {navigate} = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={{textAlign: 'center', paddingBottom: 20}}>Screen 2</Text>
      <Button
        title="Navigate to Screen 3"
        onPress={async () => {
          navigate('Screen3');
        }}
      />
    </View>
  );
}
function Screen3() {
  const {navigate} = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={{textAlign: 'center', paddingBottom: 20}}>Screen 3</Text>
      <Button
        title="Navigate to Screen 4"
        onPress={async () => {
          navigate('Screen4');
        }}
      />
    </View>
  );
}

function Screen4() {
  const {navigate} = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={{textAlign: 'center'}}>Screen 4</Text>
      <Button
        title="Navigate to HomeScreen"
        onPress={async () => {
          navigate('Autolinking Example');
        }}
      />
    </View>
  );
}

function HomeScreen() {
  const isDarkMode = useColorScheme() === 'dark';
  const {navigate} = useNavigation();
  const [currentResult, setResult] = React.useState<number | null>(null);
  const frame = useSafeAreaFrame();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Section title="ColoredView Fabric component">
        <ColoredView color="#123fff" style={{width: 100, height: 100}} />
        <ColoredView color="#51f201" style={{width: 100, height: 100}} />
      </Section>
      <Section title="Calculator TurboModule">
        <View>
          <Button
            title="Compute"
            onPress={async () => {
              const result = await Calculator.add(3, 7);
              setResult(result);
            }}
          />
          <Text>3+7={currentResult ?? '??'}</Text>
        </View>
      </Section>
      <Section title="SafeAreaContext data">
        <View>
          <Text>Frame height: {frame.height}</Text>
          <Text>Frame width: {frame.width}</Text>
          <Text>Frame x: {frame.x}</Text>
          <Text>Frame y: {frame.y}</Text>
        </View>
      </Section>
      <Section title="NativeStack navigation">
        <Button
          title="Navigate to Screen 2"
          onPress={async () => {
            navigate('Screen2');
          }}
        />
      </Section>
      <Section title="Not-yet Fabric ready lib">
        <PagerView style={{width: 50, height: 50}} initialPage={0}>
          <View key="1">
            <Text>First page</Text>
          </View>
        </PagerView>
      </Section>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
