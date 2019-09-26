# project2
Database

Tables
- users
- schedule (fk users)
- notes (fk users)   
- approval (fk users, fk schedule) 
- employee information (could be user table?)


1. Login in page
    - Tables
        - users (fk positions)
            - columns:

        - positions
        -  
2. Tasks / duties page
    - Tables
        - Tasks (fk user)
            - columns:
                - Task id
                - Task name
                - Comments
                - Completed? (boolean 0, 1)
3. Shifts page
    - Tables
        - Shift id (fk users)
        - Dates (to conform with the data plugin)
4. Employer Page for approvals and to see how things are going
    - Only employers can create users (employees)
    - Employer would "POST" to the table -- create new entry
    - Be able to see employees
5. Employees Page / Contact Page
6. Calendar tab


Handle the routes
- get: Employer page, Tasks page, Shift page, 
- post: Create user, create task, create schedule 
- put: Update task, update shift, update shift approval


Employer Page:
- Can create user
- Can see shifts, approve shifts, see calendar
- See tasks (user and the task(s))

Task Page:
- Employee can see list of tasks with comments
- Employee can add comments
- Employee can create a task, reassign a task
- Once an employee creates a task, when the shift for theat employee ends, the task should show up. 
- 