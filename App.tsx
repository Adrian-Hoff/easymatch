// import { useFonts } from 'expo-font'
import { Center, NativeBaseProvider, Spinner, StatusBar } from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AuthProvider } from './src/contexts/AuthContext'
import Routes from './src/routes'
import theme from './src/theme'

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   Poppins_400Regular: require('@assets/fonts/Poppins/Poppins-Regular.ttf'),
  //   Poppins_500Medium: require('@assets/fonts/Poppins/Poppins-Medium.ttf'),
  //   Poppins_600SemiBold: require('@assets/fonts/Poppins/Poppins-SemiBold.ttf'),
  //   Poppins_700Bold: require('@assets/fonts/Poppins/Poppins-Bold.ttf'),
  // })

  return (
    <NativeBaseProvider theme={theme}>
      <AuthProvider>
        <StatusBar
          translucent
          backgroundColor={'transparent'}
          barStyle={'dark-content'}
        />
        <SafeAreaView style={{ flex: 1 }}>
            <Routes />
        </SafeAreaView>
      </AuthProvider>
    </NativeBaseProvider>
  )
}