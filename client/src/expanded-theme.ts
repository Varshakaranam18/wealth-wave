// Import the required types from MUI
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Palette, PaletteColor } from "@mui/material/styles/createPalette";

// Declare module augmentation
declare module "@mui/material/styles/createPalette" {
  // Extend the PaletteColor interface to include an index signature
  interface PaletteColor {
    [key: number]: string; // Add this to include numeric keys
  }

  // Extend the Palette interface to include the new tertiary color
  interface Palette {
    tertiary: PaletteColor;
  }
}

// Define color tokens
export const tokens = {
  grey: {
    50: "#f0f0f3",
    100: "#e1e2e7",
    200: "#d1d3da",
    300: "#c2c5ce",
    400: "#b3b6c2",
    500: "#a3a6b2",
    600: "#8f929b",
    700: "#6b6d74",
    800: "#48494e",
    900: "#242427",
  },
  primary: {
    // purple
    100: "#f3e6ff",
    200: "#e6ccff",
    300: "#d9b3ff",
    400: "#cc99ff",
    500: "#bf80ff",
    600: "#9966cc",
    700: "#734d99",
    800: "#4d3366",
    900: "#261a33",
  },
  secondary: {
    // white
    100: "#ffffff",
    200: "#f2f2f2",
    300: "#e6e6e6",
    400: "#d9d9d9",
    500: "#cccccc",
    600: "#b3b3b3",
    700: "#999999",
    800: "#808080",
    900: "#666666",
  },
  tertiary: {
    // purple
    500: "#8884d8",
  },
  background: {
    default: "#1f2026",
    paper: "#2d2d34",
  },
};

// Explicit usage of Palette and PaletteColor to avoid unused import error
const examplePaletteColor: PaletteColor = {
  light: "#8884d8",
  main: "#8884d8",
  dark: "#8884d8",
  contrastText: "#ffffff",
  500: "#8884d8",
};

const examplePalette: Palette = {
  primary: examplePaletteColor,
  secondary: examplePaletteColor,
  tertiary: examplePaletteColor,
  grey: {
    50: "#f0f0f3",
    100: "#e1e2e7",
    200: "#d1d3da",
    300: "#c2c5ce",
    400: "#b3b6c2",
    500: "#a3a6b2",
    600: "#8f929b",
    700: "#6b6d74",
    800: "#48494e",
    900: "#242427",
  },
  background: {
    default: "#1f2026",
    paper: "#2d2d34",
  },
};

// This example usage ensures that the types are recognized as used
export { examplePalette, examplePaletteColor };


