// External imports
import { ThemeProvider } from 'styled-components'

// Internal imports
import { GlobalStyles } from './styles/styled.global'
import PricingPlans from './pages/PricingPlan'
import { theme } from './styles/theme'
import Provider from './provider'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider>
        <GlobalStyles />
        <PricingPlans />
      </Provider>
    </ThemeProvider>
  )
}

export default App
