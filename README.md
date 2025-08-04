Welcome to your new TanStack app!

# Getting Started

To run this application:

```bash
npm install
npm run start
```

# Building For Production

To build this application for production:

```bash
npm run build
```

## Testing

This project uses [Vitest](https://vitest.dev/) for testing. You can run the tests with:

```bash
npm run test
```

# Plan

One of the core requirements is to use the SWAPI API.
One of the core requirements is to use search by name - SWAPI does not support this.
We'll fetch everything and filter locally. Using Tanstack Query to cache the results.

## MVP (Must-Have Features)

✅ Fetch and Display People
✅ Show basic info (name, gender, birth year).
✅ Character Detail Page
✅ Clicking a character shows detailed info (homeworld).
✅ Fetch related data (e.g., planet name and residents of planet).

✅ Search by Name
✅ Responsive Layout
✅ Empty States

## Bonus (Nice-to-Haves)

✅ Dark Theme

- "I'm Feeling Lucky"
- Search by Planet
  - Add a dropdown or autocomplete to filter characters by their homeworld.
- Favorites
  - Allow marking characters as favorite (persist with Zustand or localStorage).

## Fluff (Extra Polish)

- Autocomplete for Search
- Extra Filters
- Animations & Transitions
- Smooth page transitions or hover effects for better UX.
