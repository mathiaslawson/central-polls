import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        black: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },
        blue: {
          100: "#d0d1d5",
          200: "#a1a4ab",
          300: "#727681",
          400: "#1F2A40",
          500: "#141b2d",
          600: "#101624",
          700: "#0c101b",
          800: "#080b12",
          900: "#040509",
        },
        green: {
          100: "#dbf5ee",
          200: "#b7ebde",
          300: "#94e2cd",
          400: "#70d8bd",
          500: "#4cceac",
          600: "#3da58a",
          700: "#2e7c67",
          800: "#1e5245",
          900: "#0f2922",
        },
        red: {
          100: "#f8dcdb",
          200: "#f1b9b7",
          300: "#e99592",
          400: "#e2726e",
          500: "#db4f4a",
          600: "#af3f3b",
          700: "#832f2c",
          800: "#58201e",
          900: "#2c100f",
        },
        blueAccent: {
          100: "#e1e2fe",
          200: "#c3c6fd",
          300: "#a4a9fc",
          400: "#868dfb",
          500: "#6870fa",
          600: "#535ac8",
          700: "#3e4396",
          800: "#2a2d64",
          900: "#151632",
        },
        orange: {
          100: "#ffe5d0",
          200: "#fecba1",
          300: "#feb272",
          400: "#fd9843",
          500: "#fd7e14",
          600: "#ca6510",
          700: "#984c0c",
          800: "#653208",
          900: "#331904"
        },
      }
    : {
      black: {
          100: "#323131",
          200: "#636262",
          300: "#959493",
          400: "#c6c5c4",
          500: "#f8f6f5",
          600: "#f9f8f7",
          700: "#fbfaf9",
          800: "#fcfbfb",
          900: "#fefdfd",
      },

      blue: {
          100: "#131a1a",
          200: "#273335",
          300: "#3a4d4f",
          400: "#4e666a",
          500: "#618084",
          600: "#81999d",
          700: "#a0b3b5",
          800: "#c0ccce",
          900: "#dfe6e6",
},
        
      orange: {
          100: "#fdefdc",
          200: "#fadeb8",
          300: "#f8ce95",
          400: "#f5bd71",
          500: "#f3ad4e",
          600: "#c28a3e",
          700: "#92682f",
          800: "#61451f",
          900: "#312310"
},


        green: {
          100: "#0f2922",
          200: "#1e5245",
          300: "#2e7c67",
          400: "#3da58a",
          500: "#4cceac",
          600: "#70d8bd",
          700: "#94e2cd",
          800: "#b7ebde",
          900: "#dbf5ee",
        },
        red: {
          100: "#2c100f",
          200: "#58201e",
          300: "#832f2c",
          400: "#af3f3b",
          500: "#db4f4a",
          600: "#e2726e",
          700: "#e99592",
          800: "#f1b9b7",
          900: "#f8dcdb",
        },
        blueAccent: {
          100: "#202226",
          200: "#40434c",
          300: "#606573",
          400: "#808699",
          500: "#a0a8bf",
          600: "#b3b9cc",
          700: "#c6cbd9",
          800: "#d9dce5",
          900: "#eceef2",
},
        
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.green[500],
            },
            secondary: {
              main: colors.blue[500],
              default: colors.orange[500]
            },
            neutral: {
              dark: colors.blueAccent[700],
              main: colors.red[500],
              light: colors.black[100],
            },
            background: {
              default: colors.blue[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.blue[100],
            },
            secondary: {
              main: colors.green[500],
              default: colors.orange[500]
            },
            neutral: {
              dark: colors.blueAccent[700],
              main: colors.blue[500],
              light: colors.black[100],
            },
            background: {
              default: "#f8f9fa",
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = 
  useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
