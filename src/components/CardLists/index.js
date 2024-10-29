import TicketCard from "./TicketCard"
import "./index.css"

const CardList = ({data, grouping}) => {
  return (
    <div className="card-list-container">
      <h3>
        {grouping.groupBy}: {data.value}
      </h3>
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

  // Create a user lookup object for quick access
  const userLookup = Object.fromEntries(
    data.users.map((user) => [user.id, user])
  )

  // Enrich tickets with user data and group them
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

  // Convert grouped object into an array with count and sorted list
  return Object.entries(grouped).map(([groupValue, tickets]) => ({
    value: groupValue,
    count: tickets.length,
    list: tickets.sort((a, b) => {
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
