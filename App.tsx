import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Navigation from './src/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const queryClient = new QueryClient()

function App(): React.JSX.Element {

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <Navigation />
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}

export default App;
