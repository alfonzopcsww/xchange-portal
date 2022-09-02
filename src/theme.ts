import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  colors: {
    xchange_gray: {
      100: "#212529",
    },
    brand: {
      100: "rgb(135, 149, 222)",
      200: "rgb(115, 132, 217)",
      300: "rgb(95, 114, 211)",
      400: "rgb(75, 97, 206)",
      500: "#364FC7",
      600: "rgb(49, 71, 180)",
      700: "rgb(44, 63, 160)",
      800: "rgb(38, 55, 140)",
      900: "rgb(33, 47, 120)",
    },
  },
});
