import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Drawer} from 'expo-router/drawer';
import { useEffect } from 'react';
import { useRouter } from 'expo-router';

export default function Layout() {
    const router = useRouter();
    const INITIAL_PAGE = './Dashboard';


    useEffect(() => {
        router.push(INITIAL_PAGE);
    }, []);
    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <Drawer>
               
                <Drawer.Screen
                    name="settings"
                    options={{drawerLabel: 'Settings', title: 'Settings Title'}}
                />

            </Drawer>
        </GestureHandlerRootView>
    );
}
