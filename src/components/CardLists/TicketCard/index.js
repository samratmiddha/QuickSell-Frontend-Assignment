import "./index.css"
import {GROUPINGS} from "../../../constants"
import {getStatusObject, getPriorityObject} from "../../../utils"
import {UserAvatar} from "../UserAvatar"

export default function TicketCard({ticket, grouping}) {
  return (
    <div className="card">
      <div className="id-avatar-container">
        <p className="ticket-id">{ticket.id}</p>
        {grouping !== GROUPINGS.GROUP_BY_USER && (
          <UserAvatar
            name={ticket.user_name}
            isOnline={ticket.user_available}
          />
        )}
      </div>
      <div className="status-title-container">
        {grouping !== GROUPINGS.GROUP_BY_STATUS && (
          <img
            src={getStatusObject(ticket.status).icon}
            alt="status-icon"
            className="status-icon"
          ></img>
        )}
        <p className="ticket-title">{ticket.title}</p>
      </div>
      <div className="priority-tags-container">
        {grouping !== GROUPINGS.GROUP_BY_PRIORITY && (
          <img
            src={getPriorityObject(ticket.priority).icon}
            alt="priority-icon"
            className="priority-icon"
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
