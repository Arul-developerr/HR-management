# Workforce360 HRMS demo

A responsive, frontend-only HRMS prototype built from the supplied Workforce360 reference images. The interface uses React, TypeScript, Vite, React Router, Recharts, Lucide icons, Motion, and Animate UI motion utilities.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Run `npm run build` for a production build and `npm run preview` to inspect it.

## Routes

| Route | Screen |
| --- | --- |
| `/dashboard` | Workforce overview |
| `/employees` | Employee directory |
| `/employees/:employeeId` | Employee profile |
| `/attendance` | Attendance management |
| `/leave` | Leave management |
| `/learning` | Learning and courses |
| `/performance` | Performance and promotions |
| `/payroll` | Payroll and payslips |
| `/recruitment` | Recruitment |
| `/reports` | Analytics and reports |
| `/notifications` | Notifications center |
| `/settings` | Settings and audit logs |
| `/login`, `/forgot-password`, `/verify-identity`, `/reset-password`, `/auth-success` | Demo authentication flow |

## Demo interactions

Directory search, filters, sorting, paging, employee creation and profile navigation work locally. Check-in, leave submission and approval, course enrollment and progress, candidate stage changes, notification read state, and several preferences update browser-local demo state. Reports export a CSV of the visible sample employee records. The payslip preview can be printed. Reset the demo data in **Settings → System**.

The password recovery flow displays the demo code `123456`. Sign-in accepts any valid email and nonempty password, then opens the dashboard. Social sign-in buttons show an explicit simulated response.

## Data and limits

All names, employee records, salaries, approvals, jobs, and metrics are fictional. The directory contains a small sample from the larger fictional organization represented by summary cards. Some summary figures are illustrative to match the supplied visual references and are not computed from the sample rows. The app has no backend, real authentication, authorization, salary processing, email, or external integrations. Browser-local data is saved in `localStorage` and can be reset.

The office illustration in `public/images/office-dusk.webp` was generated for this project from the prompt: “A premium editorial architectural photograph for a modern enterprise HR software interface: contemporary glass-and-steel office headquarters at dusk, dramatic low angle from a landscaped plaza, warm golden interior lights against deep midnight navy sky, subtle violet reflections, clean geometric facade, sophisticated corporate atmosphere, realistic photography, no people close-up, no logos, no lettering.”

## Verification

`npm run build` runs the TypeScript check and Vite production build. `node scripts/qa.mjs` launches a local Vite server and installed Chrome through Playwright Core, checks all routes at desktop and mobile widths, captures key screenshots in `qa/`, and exercises representative interactions. On this Windows environment, the QA script may need local browser/network permissions for Chrome to connect to the temporary Vite server.
# HR-management
