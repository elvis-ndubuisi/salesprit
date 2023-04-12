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

## Notes

-   App first loads `/` route with the `Splash` screen on display (via React Suspense).
-   While still displaying the `Splash` screen, app checks if User is logged in.
-   If logged in, user is redirected to the protected `/pos` route which displays the content.
-   If user is not logged in, user is redirected to `Login` screen from which they can register.

## UI Designed By

The UI used for this project was made avaliable as a freebie on [ui8]() by [name]()
