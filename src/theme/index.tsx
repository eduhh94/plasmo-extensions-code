import CssBaseline from "@mui/material/CssBaseline"
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  ThemeOptions
} from "@mui/material/styles"
import { useMemo } from "react"

import { customShadows } from "./custom-shadows"
import { componentsOverrides } from "./overrides"
import { palette } from "./palette"
import { shadows } from "./shadows"
import { typography } from "./typography"

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode
}

export default function ThemeProvider({ children }: Props) {
  const memoizedValue = useMemo(
    () => ({
      palette: palette("light"),
      customShadows: customShadows("light"),
      shadows: shadows("light"),
      shape: { borderRadius: 8 },
      typography
    }),
    []
  )

  const theme = createTheme(memoizedValue as ThemeOptions)

  theme.components = componentsOverrides(theme)

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}
