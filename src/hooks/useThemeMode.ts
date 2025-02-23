const PreferredTheme = {
  LIGHT: "light",
  DARK: "dark"
} as const

type PreferredThemeType = (typeof PreferredTheme)[keyof typeof PreferredTheme]

const LocalStorageThemeKey = "theme"

export const useThemeMode = () => {
  const updateDataTheme = (theme: PreferredThemeType) => {
    switch (theme) {
      case PreferredTheme.LIGHT:
        document.documentElement.setAttribute("data-theme", PreferredTheme.LIGHT)
        localStorage.setItem(LocalStorageThemeKey, theme)
        break
      case PreferredTheme.DARK:
        document.documentElement.setAttribute("data-theme", PreferredTheme.DARK)
        localStorage.setItem(LocalStorageThemeKey, theme)
        break
    }
  }

  const getLocalStorageTheme = (): PreferredThemeType | null => {
    return localStorage.getItem(LocalStorageThemeKey) as (PreferredThemeType | null)
  }

  const getPreferredTheme = (): PreferredThemeType => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? PreferredTheme.DARK : PreferredTheme.LIGHT
  }

  const toggleTheme = () => {
    const currentTheme = getLocalStorageTheme() ?? getPreferredTheme()
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