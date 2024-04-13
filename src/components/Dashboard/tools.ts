interface IStatus {
  commingSoon: number;
  active: number;
  inactive: number;
  wip: number;
}

interface ITools {
  id: number;
  label: string;
  description: string;
  status: number;
}

const status: IStatus = {
  commingSoon: 0,
  active: 1,
  inactive: 2,
  wip: 3,
};

export const tools: Array<ITools> = [
  {
    id: 1,
    label: "File explorer",
    description:
      "The frontend file explorer presents a hierarchical tree structure for folder navigation and a list of files with basic operations like opening, renaming, deleting, and creating new folders. It supports drag-and-drop functionality, keyboard shortcuts, and search features for efficient file management across various devices with responsive design considerations.",
    status: status.commingSoon,
  },
  {
    id: 2,
    label: "Todo List",
    description:
      "The frontend Todo List features task addition, editing, and deletion with checkboxes for completion status. It supports sorting tasks by priority, deadline, or category, and offers filtering options. Users can mark tasks as complete and benefit from keyboard shortcuts for efficient task management, ensuring a streamlined user experience.",
    status: status.commingSoon,
  },
  {
    id: 3,
    label: "Pagination",
    description:
      "The frontend pagination component divides content into pages, displaying a limited number of items per page with navigation controls. It allows users to adjust items per page and shows indicators like total item count and current page number for efficient navigation through large datasets or content lists, enhancing user interaction.",
    status: status.commingSoon,
  },
  {
    id: 4,
    label: "Throttling",
    description:
      "Frontend throttling limits the rate of function execution to prevent performance issues or resource overload. It's commonly used in scenarios like user input handling and network requests, ensuring optimal application performance by consolidating rapid invocations or enforcing delays between consecutive executions.",
    status: status.commingSoon,
  },
  {
    id: 5,
    label: "Carousal",
    description:
      "The frontend carousel component displays a series of images or content items in a slideshow format, allowing users to navigate through them manually or automatically. It supports features like navigation controls, indicators, and autoplay options, providing an engaging way to showcase content on websites or applications.",
    status: status.commingSoon,
  },
  {
    id: 6,
    label: "Sticky Notes",
    description:
      "The frontend sticky notes feature allows users to create, edit, and delete notes, which persist across sessions. Users can customize notes with colors and drag them to reposition. It offers a simple and intuitive interface for organizing tasks, reminders, or ideas.",
    status: status.commingSoon,
  },
  {
    id: 7,
    label: "Select Grid",
    description:
      "The frontend select grid component presents a grid layout of selectable items, often used for filtering or categorizing content. Users can interactively select multiple items, triggering actions or displaying relevant information. It provides an efficient way to navigate and interact with data sets or options.",
    status: status.commingSoon,
  },
];
