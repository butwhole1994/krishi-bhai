import "@/global.css";
import {GluestackUIProvider} from "@/components/ui/gluestack-ui-provider";
import { NavigationContainer, DarkTheme, DefaultTheme } from "@react-navigation/native";
import MainNavigator from './navigation';

export default function App() {
    return (
        <GluestackUIProvider mode="light">
            <NavigationContainer theme={DefaultTheme}>
                <MainNavigator />
            </NavigationContainer>
        </GluestackUIProvider>
    );
}
