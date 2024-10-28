import {useEffect, useState} from "react"
import {GROUPINGS, ORDERINGS, DATA_URL} from "./constants"
import {fetchData} from "./utils"
import DisplayButton from "./components/DisplayButton"
import CardsList from "./components/CardLists"
import "./App.css"
function App() {
  const [data, setData] = useState({})
  const [isDataLoading, setIsDataLoading] = useState(true)
  const [grouping, setGrouping] = useState(GROUPINGS.GROUP_BY_STATUS)
  const [ordering, setOrdering] = useState(ORDERINGS.ORDER_BY_PRIORITY)

  useEffect(() => {
    fetchData(DATA_URL, setData)
  }, [])
  return (
    <div className="app">
      <header className="app-header">
        <DisplayButton
          setGrouping={setGrouping}
          setOrdering={setOrdering}
          ordering={ordering}
          grouping={grouping}
        />
      </header>
      <main>
        <CardsList
          data={data}
          grouping={grouping}
          ordering={ordering}
        ></CardsList>
      </main>
    </div>
  )
}

export default App
