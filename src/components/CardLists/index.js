import TicketCard from "./TicketCard"
import "./index.css"
import addIcon from "../../assets/add.svg"
import moreIcon from "../../assets/3 dot menu.svg"
import doneIcon from "../../assets/Done.svg"
import {getPriorityObject, getStatusObject} from "../../utils"
import {UserAvatar} from "./UserAvatar"
import {GROUPINGS, PRIORITIES, STATUS} from "../../constants"

const getHeadingIcon = (data, grouping) => {
  switch (grouping.groupBy) {
    case "status":
      const statusObject = getStatusObject(data.value)
      return statusObject.headerIcon
    case "priority":
      const priorityObject = getPriorityObject(data.value)
      return priorityObject.headerIcon
    default:
      return null
  }
}

const CardList = ({data, grouping}) => {
  return (
    <div className="card-list-container">
      <div className="card-list-heading">
        <div className="grouping-info">
          {grouping != GROUPINGS.GROUP_BY_USER && (
            <img src={getHeadingIcon(data, grouping)}></img>
          )}
          {grouping == GROUPINGS.GROUP_BY_USER && (
            <UserAvatar
              name={data.list[0].user_name}
              isOnline={data.list[0].user_available}
            />
          )}
          <p className="value">
            {grouping == GROUPINGS.GROUP_BY_USER
              ? data.list[0].user_name
              : grouping == GROUPINGS.GROUP_BY_PRIORITY
              ? grouping.displayName
              : data.value}
          </p>
          <p className="count">{data.count}</p>
        </div>
        <div className="action-button-containers">
          <img src={addIcon} alt="Add Icon" />
          <img src={moreIcon} alt="Menu Icon" />
        </div>
      </div>
      <div className="card-list">
        {data.list.map((ticket) => (
          <TicketCard ticket={ticket} grouping={grouping} />
        ))}
      </div>
    </div>
  )
}

const getGroupedData = (data, grouping, ordering) => {
  const grouped = {}
  if (!data.tickets) return []

  const userLookup = Object.fromEntries(
    data.users.map((user) => [user.id, user])
  )

  data.tickets.forEach((ticket) => {
    const user = userLookup[ticket.userId]
    const enrichedTicket = {
      ...ticket,
      user_name: user.name,
      user_available: user.available,
    }

    const groupValue = enrichedTicket[grouping.groupBy]

    if (!grouped[groupValue]) {
      grouped[groupValue] = []
    }
    grouped[groupValue].push(enrichedTicket)
  })
  let allGroupValues = []
  if (grouping == GROUPINGS.GROUP_BY_PRIORITY) {
    allGroupValues = Object.values(PRIORITIES).map((p) => p.code)
  } else if (grouping == GROUPINGS.GROUP_BY_STATUS) {
    allGroupValues = Object.values(STATUS).map((s) => s.status)
  } else {
    allGroupValues = Object.keys(grouped)
  }

  return allGroupValues.map((groupValue) => ({
    value: groupValue,
    count: grouped[groupValue]?.length || 0,
    list: (grouped[groupValue] || []).sort((a, b) => {
      const valA = a[ordering.orderBy]
      const valB = b[ordering.orderBy]
      if (typeof valA === "string") return valA.localeCompare(valB)
      return valA - valB
    }),
  }))
}

export default function CardsList({data, grouping, ordering}) {
  const groupedData = getGroupedData(data, grouping, ordering)

  return (
    <div className="card-lists-container">
      {groupedData.length > 0 &&
        groupedData.map((group) => (
          <CardList key={group.value} data={group} grouping={grouping} />
        ))}
    </div>
  )
}
