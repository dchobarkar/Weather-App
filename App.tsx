import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import Navigation from "./navigation";

function App() {
  return (
    <SafeAreaProvider>
      <Navigation />

      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

export default App;
