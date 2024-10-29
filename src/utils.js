import {STATUS, PRIORITIES, GROUPINGS, ORDERINGS} from "./constants"

export const fetchData = (url, setData) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => window.alert("Error  while Fetching data"))
}

export const getStatusObject = (status) => {
  const statusObject = Object.values(STATUS).find((s) => s.status === status)
  return statusObject
}
export const getPriorityObject = (priority) => {
  const priorityObject = Object.values(PRIORITIES).find(
    (s) => s.code === priority
  )
  return priorityObject
}
export const getGroupingObject = (groupBy) => {
  const groupingObject = Object.values(GROUPINGS).find(
    (s) => s.groupBy === groupBy
  )
  return groupingObject
}
export const getOrderingObject = (orderBy) => {
  const orderingObject = Object.values(ORDERINGS).find(
    (s) => s.orderBy === orderBy
  )
  return orderingObject
}
