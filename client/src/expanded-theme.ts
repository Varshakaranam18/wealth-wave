// Import the required types from MUI
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Palette, PaletteColor } from "@mui/material/styles/createPalette";

// Declare module augmentation
declare module "@mui/material/styles/createPalette" {
  // Extend the PaletteColor interface to include an index signature
  interface PaletteColor {
    [key: number]: string;
  }

  // Extend the Palette interface to include the new tertiary color
  interface Palette {
    tertiary: PaletteColor;
  }
}

