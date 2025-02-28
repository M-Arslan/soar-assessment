# Vite + React Project

This README provides instructions on how to set up, run, and build a **Vite + React** project.

## Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (version 16 or later recommended) - [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

## Installation

1. **Clone the repository:**
   ```sh
   git clone <repository-url>
   cd <project-folder>
   ```

2. **Install dependencies:**
   Using npm:
   ```sh
   npm install
   ```
   OR using yarn:
   ```sh
   yarn install
   ```

## Running the Development Server

Start the development server with:

Using npm:
```sh
npm run dev
```
OR using yarn:
```sh
yarn dev
```

After running this command, you should see output similar to:
```
VITE vX.X.X  ready in XXms
➜  Local: http://localhost:5173/
```
Now, open your browser and visit **http://localhost:5173/** to view the application.

## Project Structure

```
├── src/            # Source files
│   ├── assets/     # Static assets
│   ├── components/ # Reusable components
    ├── context/    # Profile Context
│   ├── pages/      # Page components
│   ├── App.jsx     # Main application component
│   ├── main.jsx    # React entry point
├── public/         # Static public assets (e.g., index.html)
├── .gitignore      # Git ignore file
├── package.json    # Dependencies and scripts
├── vite.config.js  # Vite configuration
└── README.md       # Project documentation
```

## Building for Production

To create an optimized production build, run:
```sh
npm run build
```
OR
```sh
yarn build
```
This will generate a `dist/` folder containing the production-ready code.

## Preview the Production Build

To preview the production build locally:
```sh
npm run preview
```
OR
```sh
yarn preview
```
This serves the built project at `http://localhost:4173/`.

## Linting & Formatting

To check for linting issues:
```sh
npm run lint
```
OR
```sh
yarn lint
```

To automatically fix linting issues:
```sh
npm run lint --fix
```

If using Prettier for formatting:
```sh
npm run format
```

## Environment Variables

Environment variables are stored in `.env` files. Create a `.env` file in the root directory and define variables as needed:
```
VITE_API_URL=https://api.example.com
```

Access these variables in your code using:
```js
import.meta.env.VITE_API_URL;
```

## Additional Configuration

For further configuration, check the **`vite.config.js`** file.

## Troubleshooting

- If you encounter errors while installing dependencies, try deleting `node_modules` and `package-lock.json` (or `yarn.lock`) and running `npm install` or `yarn install` again.
  ```sh
  rm -rf node_modules package-lock.json
  npm install
  ```
- If the application does not start on the default port (5173), check for conflicts or manually specify a different port:
  ```sh
  npm run dev -- --port=3000
  ```

## License

This project is licensed under the MIT License
