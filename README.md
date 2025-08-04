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
I'll store the data locally to cache the results. I'll use zustand to mimic a database.

## MVP (Must-Have Features)

- Fetch and Display People
  - Get data from SWAPI and display a list of characters.
- Show basic info (name, gender, birth year).
- Character Detail Page
  - Clicking a character shows detailed info (height, mass, homeworld, films).
  - Fetch related data (e.g., planet name instead of URL).
- Search by Name
  - Implement input to filter characters locally (case-insensitive).
  - Use state to store fetched characters for quick filtering.
- Responsive Layout
  - Ensure the UI works on mobile and desktop.
- Empty States
  - Show a message for no results when search returns nothing.

## Bonus (Nice-to-Haves)

- Search by Planet
  - Add a dropdown or autocomplete to filter characters by their homeworld.
- Favorites
  - Allow marking characters as favorite (persist with Zustand or localStorage).
- Dark Theme
  - Implement light/dark theme toggle using Tailwind with CSS variables.
- "I'm Feeling Lucky"
  - Randomly navigate to a character detail page.

## Fluff (Extra Polish)

- Autocomplete for Search
- Extra Filters
- Planet Detail Page
- Clicking on a planet name navigates to a planet info page.
- Animations & Transitions
- Smooth page transitions or hover effects for better UX.
