import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import uuid from 'react-uuid';
import Header from './src/components/Header/Header';
import Jokes from './src/components/Jokes/Jokes';
import AddJokes from './src/components/AddJokes/AddJokes';
import styles from './src/components/styles/main';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

export default function App() {

  const [jokes, setJokes] = useState(
    [
    {
      id: uuid(),
      description: "Joke 1",
      done: true
    },
    {
      id: uuid(),
      description: "Joke 2",
      done: false
    },
    {
      id: uuid(),
      description: "Joke 3",
      done: false
  },
]);

const handleStatusChange = (id) => {
  const updatedJokes = jokes.map((joke) => {
  if (joke.id === id) {
  joke.done = !joke.done;
  }
  return joke;
  });
  setJokes(updatedJokes);
  }

  const handleAddJoke = (jokeDescription, jokeDone) => {
    const updatedJokes = [...jokes];
        updatedJokes.push(
          {
            id: uuid(),
            description: jokeDescription,
            done: jokeDone
          }
        );
        setJokes(updatedJokes);
  }

  const handleJokeRemoval = (id) => {
    const updatedJokes = jokes.filter(
    (joke) => joke.id !== id
    );
    setJokes(updatedJokes);
    }

  return (
    <NavigationContainer>
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Header/>
            {/* <Tab.Navigator screenOptions={{ headerShown: false }}> */}

            <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'List') {
              iconName = focused
                ? 'ios-list'
                : 'ios-list-outline';
            } else if (route.name === 'Add') {
              iconName = focused ? 'ios-add' : 'ios-add-outline';
            }
           else if (route.name === 'Settings') {
            iconName = focused ? 'ios-cog' : 'ios-cog-outline';
          }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#FAD02C',
          tabBarInactiveTintColor: 'gray',
        })
        

      }
      >
                <Tab.Screen name='List' options={{headerShown: false}}>
                {(props) => (
                    <Jokes {...props} jokes={jokes} 
                      onStatusChange={handleStatusChange}
                      onJokeRemoval={handleJokeRemoval}
                    />
                    )}
                </Tab.Screen>
                <Tab.Screen name='Add' options={{headerShown: false}}>
                    {(props) => (
                    <AddJokes {...props} onAddJoke={handleAddJoke} />
                    )}
                </Tab.Screen>
                <Tab.Screen name='Settings' options={{headerShown: false}}>
                    {(props) => (
                    <AddJokes {...props} onAddJoke={handleAddJoke} />
                    )}
                </Tab.Screen>
          </Tab.Navigator>
         </View>
    </NavigationContainer>
  );
}


