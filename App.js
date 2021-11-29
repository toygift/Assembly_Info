import React, {useState, useEffect} from "react";
import AppLoading from "expo-app-loading";
import {NavigationContainer} from "@react-navigation/native";
import Roots from "./Navigation/Roots";
import {QueryClient, QueryClientProvider} from "react-query";
const queryClient = new QueryClient();

export default function App() {
    const [ready, setReady] = useState(false);
    useEffect(() => {
        setReady(true);
    }, []);

    if (!ready) {
        return <AppLoading></AppLoading>;
    }
    return (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                <Roots></Roots>
            </NavigationContainer>
        </QueryClientProvider>
    );
}
