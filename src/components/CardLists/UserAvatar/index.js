import "./index.css"

export const UserAvatar = ({name, isOnline}) => {
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
