import { extendTheme } from '@chakra-ui/react';

const colors = {
  // Tailwind neutral grey
  gray: {
    50: '#F7FAFC',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
};

export const theme = extendTheme({ colors });
