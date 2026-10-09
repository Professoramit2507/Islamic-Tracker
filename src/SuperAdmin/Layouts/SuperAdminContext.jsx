
import { createContext, useContext, useState } from "react";

const SuperAdminContext = createContext();

export function SuperAdminProvider({ children }) {
  const [users, setUsers] = useState([]);

const [tasks, setTasks] = useState([
  {
    id: 1,
    title: "Complete User Profile",
    description: "Review and complete all user profile information.",
    priority: "High",
    assignedTo: null,
    status: "Pending",
  },
  {
    id: 2,
    title: "Review New Users",
    description: "Check newly registered users and verify their details.",
    priority: "High",
    assignedTo: null,
    status: "Pending",
  },
  {
    id: 3,
    title: "Update Dashboard UI",
    description: "Improve dashboard layout and responsive design.",
    priority: "Medium",
    assignedTo: null,
    status: "Pending",
  },
  {
    id: 4,
    title: "Prepare Monthly Report",
    description: "Prepare a report of user activity and task progress.",
    priority: "Medium",
    assignedTo: null,
    status: "Pending",
  },
  {
    id: 5,
    title: "Fix Reported Bugs",
    description: "Review and resolve reported application issues.",
    priority: "High",
    assignedTo: null,
    status: "Pending",
  },
  {
    id: 6,
    title: "Test Application",
    description: "Test the main features and check for errors.",
    priority: "Low",
    assignedTo: null,
    status: "Pending",
  },
]);

  return (
    <SuperAdminContext.Provider
      value={{ users, setUsers, tasks, setTasks }}
    >
      {children}
    </SuperAdminContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useSuperAdmin() {
  return useContext(SuperAdminContext);
}
