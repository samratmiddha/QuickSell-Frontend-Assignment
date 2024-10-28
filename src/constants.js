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
  },
  HIGH: {
    displayName: "High",
    code: 3,
  },
  MEDIUM: {
    displayName: "Medium",
    code: 2,
  },
  LOW: {
    displayName: "Low",
    code: 1,
  },
  NO_PRIORITY: {
    displayName: "No priority",
    code: 0,
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
