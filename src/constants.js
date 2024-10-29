import urgentGreyIcon from "./assets/SVG - Urgent Priority grey.svg"
import urgentColorIcon from "./assets/SVG - Urgent Priority colour.svg"
import lowPriorityIcon from "./assets/Img - Low Priority.svg"
import mediumPriorityIcon from "./assets/Img - Medium Priority.svg"
import highPriorityIcon from "./assets/Img - High Priority.svg"
import noPriorityIcon from "./assets/No-priority.svg"
import backlogIcon from "./assets/Backlog.svg"
import cancelledIcon from "./assets/Cancelled.svg"
import inProgressIcon from "./assets/in-progress.svg"
import todoIcon from "./assets/To-do.svg"
import doneIcon from "./assets/Done.svg"

export const DATA_URL =
  "https://api.quicksell.co/v1/internal/frontend-assignment"

// grouping choices
export const GROUPINGS = {
  GROUP_BY_STATUS: {
    displayName: "Status",
    groupBy: "status",
  },
  GROUP_BY_USER: {
    displayName: "User",
    groupBy: "userId",
  },
  GROUP_BY_PRIORITY: {
    displayName: "Priority",
    groupBy: "priority",
  },
}
//priority choices
export const PRIORITIES = {
  URGENT: {
    displayName: "Urgent",
    code: 4,
    icon: urgentGreyIcon,
    headerIcon: urgentColorIcon,
  },
  HIGH: {
    displayName: "High",
    code: 3,
    icon: highPriorityIcon,
    headerIcon: highPriorityIcon,
  },
  MEDIUM: {
    displayName: "Medium",
    code: 2,
    icon: mediumPriorityIcon,
    headerIcon: mediumPriorityIcon,
  },
  LOW: {
    displayName: "Low",
    code: 1,
    icon: lowPriorityIcon,
    headerIcon: lowPriorityIcon,
  },
  NO_PRIORITY: {
    displayName: "No priority",
    code: 0,
    icon: noPriorityIcon,
    headerIcon: noPriorityIcon,
  },
}
//ordering Choices
export const ORDERINGS = {
  ORDER_BY_PRIORITY: {
    displayName: "Priority",
    orderBy: "priority",
  },
  ORDER_BY_TITLE: {
    displayName: "Title",
    orderBy: "title",
  },
}

export const STATUS = {
  BACKLOG: {
    displayName: "Backlog",
    status: "Backlog",
    icon: backlogIcon,
    headerIcon: backlogIcon,
  },
  TODO: {
    displayName: "Todo",
    status: "Todo",
    icon: todoIcon,
    headerIcon: todoIcon,
  },
  IN_PROGRESS: {
    displayName: "In Progress",
    status: "In progress",
    icon: inProgressIcon,
    headerIcon: inProgressIcon,
  },
  DONE: {
    displayName: "Done",
    status: "Done",
    icon: doneIcon,
    headerIcon: doneIcon,
  },
  CANCELLED: {
    displayName: "Cancelled",
    status: "Cancelled",
    icon: cancelledIcon,
    headerIcon: cancelledIcon,
  },
}
