const PreferredTheme = {
  LIGHT: "light",
  DARK: "dark"
} as const

type PreferredThemeType = (typeof PreferredTheme)[keyof typeof PreferredTheme]

const LOCAL_STORAGE_THEME_KEY = "theme"
const DATA_THEME_ATTRIBUTE_KEY = "data-theme"

export const useThemeMode = () => {
  const updateDataTheme = (themeToApply: PreferredThemeType) => {
    switch (themeToApply) {
      case PreferredTheme.LIGHT:
        document.documentElement.setAttribute(DATA_THEME_ATTRIBUTE_KEY, PreferredTheme.LIGHT)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, themeToApply)
        break
      case PreferredTheme.DARK:
        document.documentElement.setAttribute(DATA_THEME_ATTRIBUTE_KEY, PreferredTheme.DARK)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, themeToApply)
        break
    }
  }

  const getDocumentDataTheme = (): PreferredThemeType | null => {
    const currentDataTheme = document.documentElement.getAttribute(DATA_THEME_ATTRIBUTE_KEY) ?? PreferredTheme.LIGHT
    switch (currentDataTheme) {
      case PreferredTheme.LIGHT:
        return PreferredTheme.LIGHT
      case PreferredTheme.DARK:
        return PreferredTheme.DARK
      default:
        return null
    }
  }

  const toggleTheme = () => {
    const currentTheme = getDocumentDataTheme()
    switch (currentTheme) {
      case PreferredTheme.LIGHT:
        updateDataTheme(PreferredTheme.DARK)
        break
      case PreferredTheme.DARK:
        updateDataTheme(PreferredTheme.LIGHT)
        break
    }
  }

  return {
    toggleTheme
  }
}