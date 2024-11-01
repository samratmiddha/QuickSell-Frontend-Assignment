import displayIcon from "../../assets/Display.svg"
import downIcon from "../../assets/down.svg"
import "./index.css"
import {useState, useRef} from "react"
import Popover from "./PopOver"
import {GROUPINGS, ORDERINGS} from "../../constants"

export default function DisplayButton({
  grouping,
  ordering,
  setGrouping,
  setOrdering,
}) {
  const [isPopOverVisible, setIsPopOverVisisble] = useState(false)
  const [groupingInputVal, setGroupingInputVal] = useState(grouping.groupBy)
  const [orderingInputVal, setOrderingInputVal] = useState(ordering.orderBy)
  const buttonRef = useRef(null)
  const popoverRef = useRef(null)

  const togglePopover = () => {
    setIsPopOverVisisble((prev) => !prev)
  }
  const onGroupingChange = (e) => {
    const value = e.target.value
    setGroupingInputVal(value)

    const newGrouping = Object.entries(GROUPINGS).find(
      ([key, group]) => group.groupBy === value
    )

    if (newGrouping) {
      setGrouping(newGrouping[1])
    }
  }
  const onOrderingChange = (e) => {
    const value = e.target.value
    setOrderingInputVal(value)

    const newOrdering = Object.entries(ORDERINGS).find(
      ([key, group]) => group.orderBy === value
    )

    if (newOrdering) {
      setOrdering(newOrdering[1])
    }
  }
  const popOverContent = (
    <div className="pop-over-content">
      <div className="text-input-container">
        <label htmlFor="grouping">Grouping</label>
        <select
          value={groupingInputVal}
          name="grouping"
          onChange={onGroupingChange}
        >
          {Object.entries(GROUPINGS).map(([key, group]) => (
            <>
              <option id={key} value={group.groupBy}>
                {group.displayName}{" "}
              </option>
            </>
          ))}
        </select>
      </div>
      <div className="text-input-container">
        <label htmlFor="ordering">Ordering</label>
        <select
          value={orderingInputVal}
          name="ordering"
          onChange={onOrderingChange}
        >
          {Object.entries(ORDERINGS).map(([key, group]) => (
            <>
              <option id={key} value={group.orderBy}>
                {group.displayName}{" "}
              </option>
            </>
          ))}
        </select>
      </div>
    </div>
  )
  return (
    <div className="container">
      <button id="display-button" ref={buttonRef} onClick={togglePopover}>
        <img src={displayIcon} className="icon" alt="display-icon"></img>
        <p className="text">Display</p>
        <img src={downIcon} className="icon" alt="down-arrow-icon"></img>
      </button>
      <Popover
        content={popOverContent}
        buttonRef={buttonRef}
        isVisible={isPopOverVisible}
        setIsVisible={setIsPopOverVisisble}
        popoverRef={popoverRef}
        placement="bottom"
      />
    </div>
  )
}
