# Getting Started

To run this application:

```bash
npm install
npm run start
```

## Tech Stack

- React
- Tanstack Router
- Tanstack Query
- Tailwind CSS

# Overview

This is a simple app that allows you to search for Star Wars characters using the SWAPI API.
For documentation, see [SWAPI](https://swapi.dev/documentation).

## Features

- Search for characters by name
- View character details
- View planet details
- Add characters to favorites
- View favorites

# Initial Plan

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
✅ Favorites

- "I'm Feeling Lucky"
- Search by Planet
  - Add a dropdown or autocomplete to filter characters by their homeworld.

## Fluff (Extra Polish)

✅ Animations & Transitions
✅ Hover effects for better UX.

- Autocomplete for Search
- Extra Filters

# Future Improvements & Notes

Currently, the app fetches all characters on the home page, stores them in React Query’s cache, and filters locally.
This keeps things simple and avoids unnecessary complexity for now. While cache invalidation could be added, it feels like overkill at this stage. An alternative approach would be to fetch everything once, store it in Zustand for global state, and use it to populate pages.
Add search params to the URL to persist the search and filter state.

The “I’m Feeling Lucky” feature would be easy to implement, but with the current small dataset, it’s not very useful.

If this were a real-world app, here are some ideas to enhance functionality:

✅ Potential Features
• Authentication & Personalization
• Save favorite characters for each user.
• Share favorites with friends.
• Allow users to leave comments on characters.
• Search & Filtering
• Add more filters (e.g., gender: male, female).
• Implement autocomplete for search (e.g., typing “luke” suggests “Luke Skywalker”).
• Display favorite characters at the top of search results.
• Enable comparison of multiple characters.
• Additional Pages for:
• Planets
• Movies
• Vehicles
• Species
• Starships

“I’m Feeling Lucky” just for fun, although not very useful with the current dataset.
I spend more time on the design and animations so the app is more engaging and feels really good to use.
Currently implementation is missing tests - I would add unit tests and use hooks to tests it.
There is currently no backend or proper error handling, we can improte the UI with better loading and empty states, and add E2E tests.
