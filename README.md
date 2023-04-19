# Salesprite POS

## Overview

A fullstack Point-Of-Sales web app with elegant UI, well structured user experience and more; ready to be deployed on any POS machine.

## Stacks/Notable Packages

-   Tailwindcss : UI styling
-   react-router : handling routes
-   ReactJs: frontend UI framework
-   Typescript: JS type-safety
-   Eslint: Code linting
-   Google Analytics: Tracking activities on salesprit web app

**Testing**

-   Vitest
-   @testing-library/react
-   @testing-library/jest-dom

## Notes

-   key notes

## Authentication & Authorization Flow

-   **When a user first loads the app i.e `AppLayout`**

    -   Root `loader` sends a request to fetch user profile using information provided inside the credentials. This if only possible is user had previously logged in.
    -   App component displays `Splash` screen while it awaits response from server.
    -   If response comes with the user's credentials, the `Auth state` is set and the `<Outlet` is used to load the pages.
    -   If an Authentication error occurs, the user is navigated to the `Login` page.

-   **Pos Page**
    All routes not related to login and authentication are private

-   **When user logs in, registers or logs out**

    -   When a user logs-in or registers, the `auth state` is set and user gets `redirected` to the private `home` page which required the `auth state` in order to be accessed.

    -   When a user logs-out, the `auth state` is set to replect changes and user is redirected to the `Login` route.

## UI Designed By

The UI used for this project was made avaliable as a freebie on [ui8]() by [name]()
