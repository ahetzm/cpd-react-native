import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeStackNavigation from "./homeStack";
import AboutStackNavigation from "./aboutStack";
import {NavigationContainer} from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";

export const Tab = createBottomTabNavigator();

export default function TabNavigation() {


  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" screenOptions={
        (props) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (props.route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (props.route.name === 'About') {
              iconName = focused ? 'information-circle' : 'information-circle-outline';
            }
            return <Ionicons name={iconName} size={size} color={color}/>;
          },
          headerShown: false,
          tabBarActiveTintColor: "#bd93f9",
          tabBarInactiveTintColor: "#f8f8f2",
          tabBarStyle: {
            backgroundColor: "#282a36",
          }
        })
      }>
        <Tab.Screen name="Home" component={HomeStackNavigation} options={{headerShown: false}}/>
        <Tab.Screen name="About" component={AboutStackNavigation} options={{headerShown: false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}