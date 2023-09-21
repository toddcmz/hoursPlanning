# Time Tracking Project Design Document
## User-Centric Goals
What is the value proposition to the user? How will using this application improve their lives?

Gives management the ability to make project and staffing decisions based on real data. 

Help avoid under/over staffing, or committing to unrealistic projects. 

Provide a structured framework for time tracking that lets management more easily see exactly where the most hours are spent. Answer the question “what do staff end up having to spend their time doing?” without a lot of manual investigation.

Strong focus on useability and non-technical accessibility. Eschew’s “whole world of possible analyses” for some ideal medium between generalizable and flexible analysis. 

Allows full project life-cycle hours analysis by centralizing project/staff hours planning with traditional time tracking. Using consistent metrics on both ends allows flexible, custom analysis and visualization for better hours planning across projects and staff. 

## Use Cases & Functionality
A high level list of what the users can do and why each one is useful.

Four main functional areas: user/account management, project/staff hours planning, staff time tracking, and analysis/output

User/Accounts:
- organization level admin powers
- admin role - adjust all staff/project categorizations/other options
- user role - enter any data

Planning side:
- by flexible time period
- by staff member, position, role, and pay rate
- by project task, where tasks are more generalized than specialized
- has some reasonable degree of “custom” entry by project
- in progress aggregate views for assisting hours entry - see what we’re changing - on the whole as hours get added

Time tracking side:
- uses same categories as on the planning side, with clever design to avoid too much entry headache. anti hib mentality
- staff picks projects, task, role, day, hours spent
- give total summary while entering, marginal totals, but also at aggregate/project level
- anything to make this process more appealing/fun to use is helpful. grow a plant. cook a dinner.

Analysis and Output:
- flexible planning and tracked hours summaries individually by our range of project/staff/hours categorizations
- especially options for comparing planned vs actual hours
- most summaries happen within app dashboard with option to output data
- output files in several “useful” formats (flat file, etc)

## Data Model

| Organization | col | type |
| ---- | ---- | ----|
|  | org_id | pk, int |
|  | org_name | string |
|  | logo | blob |
|  | timezone | string |
|  | currency | string |

| User_Account | col | type |
| ---- | ---- | ----|
| | auth_id | pk, int |
| | staff_id | fk, int |
| | username | string |
| | pass | string |
| | permissions | string |

| Staff | col | type |
| ---- | ---- | ----|
| | staff_id | pk, int |
| | fname | string |
| | lname | string |
| | email | string |
| | pay_rate | float |
| | org_id | fk, int |
| | pos_id | fk, int |

| Position | col | type |
| ---- | ---- | ----|
| | pos_id | pk, int |
| | pos_name | string |
| | org_id | fk, int |

| Role | col | type |
| ---- | ---- | ----|
| | role_id | pk, int |
| | role_name | string |
| | org_id | fk, int |

| Task | col | type |
| ---- | ---- | ----|
| | task_id | pk, int |
| | task_name | string |
| | org_id | fk, int |

| Project | col | type |
| ---- | ---- | ----|
| | project_id | pk, int |
| | project_name | string |
| | org_id | fk, int |
| | planning_time_chunk | string |
| | start_date | datetime |
| | end_date | datetime |

| Hours_Planning | col | type |
| ---- | ---- | ----|
| | hours_planning_id | pk, int |
| | project_id | fk, int |
| | staff_id | fk, int |
| | role_id | fk, int |
| | task_id | fk, int |
| | hours_value | float |
| | start_date | datetime |

| Hours_Actual | col | type |
| ---- | ---- | ----|
| | hours_actual_id | pk, int |
| | project_id | fk, int |
| | staff_id | fk, int |
| | role_id | fk, int |
| | task_id | fk, int |
| | hours_value | float |
| | start_date | datetime |

## UI Mockups
- set up organization page
- enter new project details page
- enter planned hours for one project page, plus aggregate real time summary
- enter actual hours spent for staffer page, plus aggregate real time summary
- analysis page
  - planning summaries
  - hours spent summaries
  - comparison summaries

## Technologies
- Front end
  - Next.js
  - React.js
  - Tailwind.css
- Back end
  - Node.js
  - Next.js
  - Prisma - ORM
- Database
  - SQL
