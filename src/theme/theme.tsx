/* eslint-disable prettier/prettier */

export interface MyTheme {
  colors: {
    primary: {
      100: string
      200: string
      300: string
      400: string
      500: string
      600: string
      700: string
      800: string
      900: string
      1000: string
      [key: string]: string
    }
    secondary: {
      100: string
      200: string
      300: string
      400: string
      500: string
      600: string
      700: string
      800: string
      900: string
      1000: string
      [key: string]: string
    }
    neutral: {
      100: string
      200: string
      300: string
      400: string
      500: string
      600: string
      700: string
      800: string
      900: string
      1000: string
      [key: string]: string
    }
    support: {
      info: {
        light: string
        main: string
        dark: string
        [key: string]: string
      }
      error: {
        light: string
        main: string
        dark: string
        [key: string]: string
      }
      warning: {
        light: string
        main: string
        dark: string
        [key: string]: string
      }
      success: {
        light: string
        main: string
        dark: string
        [key: string]: string
      }
    }
  }
}
