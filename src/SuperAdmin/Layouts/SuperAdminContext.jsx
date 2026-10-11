
// import { createContext, useContext, useState } from "react";

// const SuperAdminContext = createContext();

// export function SuperAdminProvider({ children }) {
//   const [users, setUsers] = useState([]);

// const [tasks, setTasks] = useState([
//   {
//     id: 1,
//     title: "Complete User Profile",
//     description: "Review and complete all user profile information.",
//     priority: "High",
//     assignedTo: null,
//     status: "Pending",
//   },
//   {
//     id: 2,
//     title: "Review New Users",
//     description: "Check newly registered users and verify their details.",
//     priority: "High",
//     assignedTo: null,
//     status: "Pending",
//   },
//   {
//     id: 3,
//     title: "Update Dashboard UI",
//     description: "Improve dashboard layout and responsive design.",
//     priority: "Medium",
//     assignedTo: null,
//     status: "Pending",
//   },
//   {
//     id: 4,
//     title: "Prepare Monthly Report",
//     description: "Prepare a report of user activity and task progress.",
//     priority: "Medium",
//     assignedTo: null,
//     status: "Pending",
//   },
//   {
//     id: 5,
//     title: "Fix Reported Bugs",
//     description: "Review and resolve reported application issues.",
//     priority: "High",
//     assignedTo: null,
//     status: "Pending",
//   },
//   {
//     id: 6,
//     title: "Test Application",
//     description: "Test the main features and check for errors.",
//     priority: "Low",
//     assignedTo: null,
//     status: "Pending",
//   },
// ]);

//   return (
//     <SuperAdminContext.Provider
//       value={{ users, setUsers, tasks, setTasks }}
//     >
//       {children}
//     </SuperAdminContext.Provider>
//   );
// }

// // eslint-disable-next-line react-refresh/only-export-components
// export function useSuperAdmin() {
//   return useContext(SuperAdminContext);
// }



import { createContext, useContext, useState } from "react";

const SuperAdminContext = createContext(null);

export function SuperAdminProvider({ children }) {
  const [users, setUsers] = useState([
    { id: 1, name: "Admin User", email: "admin@gmail.com", role: "admin", status: "Active" },
    { id: 2, name: "Manager One", email: "manager@gmail.com", role: "manager", status: "Active" },
  ]);

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
  const context = useContext(SuperAdminContext);
  if (!context) {
    throw new Error("useSuperAdmin must be used within a SuperAdminProvider");
  }
  return context;
}