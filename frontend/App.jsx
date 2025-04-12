import { useState } from 'react'
import Header from './Header/Header'
import ChartArea from './ChartArea/ChartArea'
import AlertsArea from './AlertsArea/AlertsArea'
import AlertCreationPrompt from './AlertCreationPrompt/AlertCreationPrompt'

function App() {
  const [showAlertCreationPrompt, setShowAlertCreationPrompt] = useState(false)
  const [alertsRefresh, setAlertsRefresh] = useState(false) // Toggle whenever I want to refresh displayed alerts, i.e. when a new alert is created

  return (
    <>
      <Header />
      <div id='main-area'>
        <ChartArea />
        <AlertsArea onNewAlert={() => setShowAlertCreationPrompt(true)} alertsRefresh={alertsRefresh} />
      </div>
      {showAlertCreationPrompt && (
        <AlertCreationPrompt onClose={() => setShowAlertCreationPrompt(false)} setAlertsRefresh={setAlertsRefresh}/>
      )}
    </>
  )
}

export default App