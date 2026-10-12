# Meal Planner

A React app that turns your food preferences into a daily, weekly, or monthly meal plan. Choose your meals per day, diet, cuisine, dish type, and calorie range, then explore recipes fetched from Edamam.

## Features

- **Flexible schedules:** plan for 1, 7, or 30 days with 2, 3, or 5 meals per day.
- **Diet preferences:** balanced, low-carb, low-fat, low-sodium, and high-protein options.
- **Health filters:** vegan, alcohol-free, and peanut-free options.
- **Cuisine and dish choices:** select from 10 cuisines and 5 dish types.
- **Calorie range:** enter a daily minimum and maximum; the app divides this range across meal slots when searching for recipes.
- **Recipe cards:** view recipe images, sources, cuisine, diet labels, and health labels, with links to the original recipes.

## Tech stack

| Purpose | Technology |
| --- | --- |
| User interface | React 18, JavaScript, CSS, Bootstrap 5 |
| Navigation | React Router 6 |
| API requests | Axios |
| Recipe data | Edamam Recipe API |
| Development and builds | Create React App / React Scripts 5 |

## Getting started

### Prerequisites

- Node.js and npm compatible with React Scripts 5.
- An Edamam application ID and key with access to the recipe search endpoint used by this project.

### Install

```bash
git clone https://github.com/Abhishek12105021/Meal-Planner.git
cd Meal-Planner
npm ci
```

Run these commands from the repository root. The root `package.json` defines the app's development and production scripts.

### Configure recipe access

The current implementation reads its API configuration from `src/utils/edamam.js`. Replace the `***` placeholders with your own application ID and key for local development:

```js
const RECIPE_API = {
    ID: "YOUR_EDAMAM_APP_ID",
    KEY: "YOUR_EDAMAM_APP_KEY",
    URL: "https://api.edamam.com/search?",
};

export default RECIPE_API;
```

Keep real credentials out of commits. This app currently sends requests from the browser, so credentials included in its frontend are visible to users. For a public deployment, move authenticated API requests to a backend that keeps the key on the server.

### Run locally

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000). Recipe searches require network access and working API credentials.

### Build

```bash
npm run build
```

The production bundle is written to `build/`. If you deploy it, configure your host to serve `index.html` for client-side routes such as `/recipe`.

## Using the planner

1. Choose the number of meals per day and the plan duration.
2. Select your diet, cuisine, and dish type.
3. Enable any health filters and set the daily calorie range.
4. Click **Submit** to fetch recipes and open the plan.
5. Browse meals grouped by day and follow a recipe's title to its original source.

The app searches for recipes for each meal slot, then randomly selects from the returned results for each day. Recipes can repeat across a plan. The calorie range is a recipe search filter; the app does not calculate or optimize the combined nutrition of a day's selected meals.

## Project structure

```text
Meal-Planner/
├── public/                 # HTML template and static assets
├── src/
│   ├── components/          # Planner form, day views, recipe cards, navigation
│   ├── utils/
│   │   ├── data.js          # Meal slots and filter options
│   │   ├── edamam.js        # Recipe API configuration
│   │   └── getPlan.js       # Query construction and recipe requests
│   ├── App.js              # Routes for the planner and recipe results
│   ├── index.js            # React entry point
│   └── style.css           # Shared styles
├── built-in/               # Original Create React App starter files
└── package.json            # Main dependencies and npm scripts
```

The nested `src/package.json`, `src/webpack.config.js`, and `src/README.md` are retained starter files. Use the root package and the setup instructions above for this app.
