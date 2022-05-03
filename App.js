import { TechApp } from './src'
import { I18nextProvider } from 'react-i18next'
import i18n from './src/lib/lang/translations/i18n'

export default function App() {

  return (
    <I18nextProvider i18n={i18n}>
      <TechApp />
    </I18nextProvider>
  )
}
