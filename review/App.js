import {View} from 'react-native';
import {useFonts} from "expo-font";
import {useCallback} from "react";
import {hideAsync} from "expo-splash-screen";
import {globalStyles} from "./assets/styles/global-styles";
import TabNavigation from "./routes/tab";

export default function App() {
  const [fontsLoaded] = useFonts({
    'SourceCodePro-Regular': require('./assets/fonts/SourceCodePro-Regular.ttf'),
    'SourceCodePro-Bold': require('./assets/fonts/SourceCodePro-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={globalStyles.container} onLayout={onLayoutRootView}>
      <TabNavigation/>
    </View>
  );
}