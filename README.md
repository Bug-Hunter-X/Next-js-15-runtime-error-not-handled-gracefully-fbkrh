# Next.js 15 Runtime Error Handling

This repository demonstrates a Next.js 15 application that throws a runtime error when navigating to a specific page. The error is not gracefully handled by Next.js, resulting in a poor user experience.

## Issue
The `about.js` file contains a runtime error that is not caught. This causes Next.js to render a blank page or a 500 error instead of displaying a user-friendly error message.

## Solution
The `aboutSolution.js` file demonstrates a solution for handling the runtime error. By using a try-catch block, the error can be captured, and a custom error message can be displayed.

## Setup
1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`

Navigate to `/about` to see the issue, and then switch to `aboutSolution.js` to see the solution.