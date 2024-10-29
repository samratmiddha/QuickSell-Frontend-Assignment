import "./index.css"
import {GROUPINGS} from "../../../constants"
import {getStatusObject, getPriorityObject} from "../../../utils"
const AvatarWithStatus = ({name, isOnline}) => {
  const getInitials = (name) => {
    const names = name.split(" ")
    return names.map((n) => n.charAt(0).toUpperCase()).join("")
  }

  const getColorFromName = (name) => {
    let hash = 0
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash)
    }
    const color = `#${((hash >> 24) & 0xff).toString(16).padStart(2, "0")}${(
      (hash >> 16) &
      0xff
    )
      .toString(16)
      .padStart(2, "0")}${((hash >> 8) & 0xff).toString(16).padStart(2, "0")}`
    return color
  }
  const initials = getInitials(name)
  const backgroundColor = getColorFromName(name)

  return (
    <div className="avatar-container" style={{backgroundColor}}>
      <span className="initials">{initials}</span>
      <span
        className={`status-indicator ${isOnline ? "online" : "offline"}`}
      ></span>
    </div>
  )
}

export default function TicketCard({ticket, grouping}) {
  return (
    <div className="card">
      <div className="id-avatar-container">
        <p className="ticket-id">{ticket.id}</p>
        <AvatarWithStatus
          name={ticket.user_name}
          isOnline={ticket.user_available}
        />
      </div>
      <div className="status-title-container">
        {grouping != GROUPINGS.GROUP_BY_STATUS && (
          <img
            src={getStatusObject(ticket.status).icon}
            class="status-icon"
          ></img>
        )}
        <p className="ticket-title">{ticket.title}</p>
      </div>
      <div className="priority-tags-container">
        {grouping != GROUPINGS.GROUP_BY_PRIORITY && (
          <img
            src={getPriorityObject(ticket.priority).icon}
            class="priority-icon"
          ></img>
        )}
        {ticket.tag.map((tag) => (
          <div className="tag">
            <div className="circle" />
            <p>{tag}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
