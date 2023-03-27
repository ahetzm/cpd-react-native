import {createNativeStackNavigator} from "@react-navigation/native-stack";
import About from "../screens/about";

export const AboutStack = createNativeStackNavigator();

export default function AboutStackNavigation() {
  return (
    <AboutStack.Navigator initialRouteName="About" screenOptions={
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
      <AboutStack.Screen name="About" component={About}/>
    </AboutStack.Navigator>
  );
}