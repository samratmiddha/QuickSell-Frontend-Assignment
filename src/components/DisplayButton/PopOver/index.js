import React, {useLayoutEffect, useEffect, useState, useCallback} from "react"
import "./index.css"

const Popover = ({
  content,
  buttonRef,
  isVisible,
  setIsVisible,
  popoverRef,
  placement = "bottom",
}) => {
  const [position, setPosition] = useState({top: 0, left: 0})
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsVisible(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [buttonRef, popoverRef, setIsVisible])

  const calculatePosition = useCallback(() => {
    if (!buttonRef.current) return

    const buttonRect = buttonRef.current.getBoundingClientRect()

    let newPosition = {}
    switch (placement) {
      case "top":
        newPosition = {
          top: buttonRect.top - 8,
          left: buttonRect.left,
        }
        break
      case "right":
        newPosition = {
          top: buttonRect.top,
          left: buttonRect.right + 8,
        }
        break
      case "left":
        newPosition = {
          top: buttonRect.top,
          left: buttonRect.left - 8,
        }
        break
      case "bottom":
      default:
        newPosition = {
          top: buttonRect.bottom + 10,
          left: buttonRect.left,
        }
        break
    }
    setPosition(newPosition)
  }, [placement, buttonRef])
  useLayoutEffect(() => {
    if (isVisible) calculatePosition()
  }, [isVisible, calculatePosition])

  return (
    <div className="popover-container">
      {isVisible && (
        <div
          ref={popoverRef}
          style={{...position, position: "absolute", zIndex: 10}}
          className="popover-content-container"
        >
          {content}
        </div>
      )}
    </div>
  )
}

export default Popover
