import CoffeeForm from "./components/CoffeeForm";
import Hero from "./components/Hero";
import History from "./components/History";
import Layout from "./components/Layout";
import Stats from "./components/Stats";
import { useAuth } from "./context/AuthContext";
import { coffeeConsumptionHistory } from "./utils";

function App() {
  const { globalUser, globalData, isLoading } = useAuth()
  const isAuthenticated = globalUser
  const isData = globalData && Object.keys(globalData || {}).length>0

  const authenticatedContent = (
    <>
      < Stats />
      <History />

    </>
  )
  return (
    <Layout>
      < Hero />
      < CoffeeForm isAuthenticated={isAuthenticated}/>
      {(isAuthenticated && isLoading) && (
        <p>Loading data...</p>
      )}
      {(isAuthenticated && isData) && (authenticatedContent)}
    </Layout>
  )
}

export default App
