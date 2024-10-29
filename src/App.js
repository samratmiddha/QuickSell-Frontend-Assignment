import {useEffect, useState} from "react"
import {GROUPINGS, ORDERINGS, DATA_URL} from "./constants"
import {fetchData, getGroupingObject, getOrderingObject} from "./utils"
import DisplayButton from "./components/DisplayButton"
import CardsList from "./components/CardLists"
import "./App.css"
import Cookies from "js-cookie"

function App() {
  const [data, setData] = useState({})
  const [isDataLoading, setIsDataLoading] = useState(true)

  const [grouping, setGrouping] = useState(
    Cookies.get("grouping")
      ? getGroupingObject(Cookies.get("grouping"))
      : GROUPINGS.GROUP_BY_STATUS
  )
  const [ordering, setOrdering] = useState(
    Cookies.get("ordering")
      ? getOrderingObject(Cookies.get("ordering"))
      : ORDERINGS.ORDER_BY_PRIORITY
  )

  useEffect(() => {
    Cookies.set("grouping", grouping.groupBy, {expires: 7})
  }, [grouping])

  useEffect(() => {
    Cookies.set("ordering", ordering.orderBy, {expires: 7})
  }, [ordering])

  useEffect(() => {
    const loadData = async () => {
      setIsDataLoading(true)
      await fetchData(DATA_URL, setData)
      setIsDataLoading(false)
    }
    loadData()
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
        {isDataLoading ? (
          <div className="loader"></div>
        ) : (
          <CardsList data={data} grouping={grouping} ordering={ordering} />
        )}
      </main>
    </div>
  )
}

export default App
