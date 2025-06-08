import React from 'react';
 


const employees = [
  {
    id: 1,
    firstname: "Aarav",
    email: "e@e.com",
    password: "123",
    taskCounts: {
      active: 2,
      completed: 1,
      failed: 0,
      newTask: 1
    },
    tasks: [
      {
        title: "Update Client Report",
        description: "Prepare monthly report for client X",
        date: "2025-06-07",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Login Bug",
        description: "Resolve authentication failure issue",
        date: "2025-06-06",
        category: "Bug Fixing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Team Meeting",
        description: "Weekly sprint review meeting",
        date: "2025-06-08",
        category: "Meetings",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 2,
    firstname: "Isha",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      completed: 1,
      failed: 1,
      newTask: 2
    },
    tasks: [
      {
        title: "UI Design Draft",
        description: "Design homepage mockup",
        date: "2025-06-07",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Client Feedback",
        description: "Review suggestions from client A",
        date: "2025-06-05",
        category: "Communication",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Code Refactoring",
        description: "Improve code readability in project B",
        date: "2025-06-06",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Performance Optimization",
        description: "Speed up data loading in dashboard",
        date: "2025-06-09",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 3,
    firstname: "Rohan",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      completed: 1,
      failed: 1,
      newTask: 1
    },
    tasks: [
      {
        title: "Data Backup",
        description: "Perform weekly server backup",
        date: "2025-06-06",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "New Feature Planning",
        description: "Plan upcoming dashboard widget",
        date: "2025-06-07",
        category: "Planning",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Code Review",
        description: "Review pull request from team",
        date: "2025-06-07",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Bug Testing",
        description: "QA test for recent bug fixes",
        date: "2025-06-08",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 4,
    firstname: "Meera",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      completed: 2,
      failed: 0,
      newTask: 1
    },
    tasks: [
      {
        title: "Customer Onboarding",
        description: "Guide new users through setup",
        date: "2025-06-07",
        category: "Support",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Analytics Report",
        description: "Generate quarterly performance report",
        date: "2025-06-06",
        category: "Analytics",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "UI Audit",
        description: "Check responsiveness on mobile",
        date: "2025-06-07",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 5,
    firstname: "Karan",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      completed: 2,
      failed: 0,
      newTask: 2
    },
    tasks: [
      {
        title: "Security Check",
        description: "Run vulnerability scan",
        date: "2025-06-07",
        category: "Security",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "System Update",
        description: "Update system software to latest version",
        date: "2025-06-05",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Training Session",
        description: "Conduct training on new tool",
        date: "2025-06-08",
        category: "Training",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Feature Testing",
        description: "Test newly deployed features",
        date: "2025-06-09",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Documentation Update",
        description: "Update internal developer docs",
        date: "2025-06-06",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    firstname: "Priya",
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  return { employees, admin };
};
