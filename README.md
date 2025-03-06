# task-todo
Develop a Redux-powered To-Do List application with filtering capabilities to help users efficiently manage their tasks. The application should allow users to add, mark as completed, delete, and filter tasks based on their status." The goal is to demonstrate state management using Redux Toolkit while integrating Bootstrap for a clean UI experience.
User Stories
User Story 1: Add Tasks
📌 As a user, I want to add a new task to my to-do list, so that I can keep track of things I need to do.
✅ Acceptance Criteria:
The user can enter text into an input field.
Clicking the "Add" button adds the task to the list.
The task should appear in the "All" and "Pending" filter views.
User Story 2: Mark Task as Completed
📌 As a user, I want to mark a task as completed, so that I know which tasks are done.
✅ Acceptance Criteria:
Clicking on a task toggles its status between completed and pending.
A completed task should have a strikethrough effect and a success badge (Completed).
A pending task should have a warning badge (Pending).
🔹 User Story 3: Delete a Task
📌 As a user, I want to delete a task from the list, so that I can remove unnecessary tasks.
✅ Acceptance Criteria:
Clicking the ❌ button next to a task should remove it from the list.
The deleted task should no longer appear in any filter view.
🔹 User Story 4: Filter Tasks by Status
📌 As a user, I want to filter tasks by status (All, Completed, Pending), so that I can view tasks based on their progress.
✅ Acceptance Criteria:
Clicking "All" displays all tasks.
Clicking "Completed" shows only tasks that are marked as done.
Clicking "Pending" shows only tasks that are not completed.
🔹 User Story 5: Responsive UI with Bootstrap
📌 As a user, I want a visually appealing and responsive interface, so that I can easily interact with my to-do list on different devices.
✅ Acceptance Criteria:
The layout should be responsive on desktops, tablets, and mobile screens.
Bootstrap buttons, forms, and list groups should be used for styling.
The UI should be clean and intuitive.
