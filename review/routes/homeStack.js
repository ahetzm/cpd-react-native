import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "../screens/home";
import About from "../screens/about";
import ReviewDetail from "../screens/reviewDetail";

export const HomeStack = createNativeStackNavigator();

export default function HomeStackNavigation() {
  return (
    <HomeStack.Navigator initialRouteName="Home" screenOptions={
      {
        headerStyle: {
          backgroundColor: "#282a36",
        },
        headerTintColor: "#bd93f9",
        headerTitleStyle: {
          fontFamily: 'SourceCodePro-Bold',
          textAlign: 'center',
          fontSize: 20,
          color: '#bd93f9',
        }
      }
    }>
      <HomeStack.Screen name="Home" component={Home}/>
      <HomeStack.Screen name="About" component={About}/>
      <HomeStack.Screen name="ReviewDetail" component={ReviewDetail} options={
        ({route}) => ({title: route.params.title})
      }/>
    </HomeStack.Navigator>
  );
}