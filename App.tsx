import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Navigation from './src/navigation';

const queryClient = new QueryClient()

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={styles.container}>
      <QueryClientProvider client={queryClient}>
        <Navigation />
      </QueryClientProvider>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
