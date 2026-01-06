import { createTheme } from '@mui/material/styles'

// Professional SaaS color palette
const colors = {
  primary: {
    main: '#2563EB', // Professional Blue
    light: '#60A5FA', // Light Blue
    dark: '#1E40AF', // Darker Blue
    contrastText: '#FFFFFF'
  },
  secondary: {
    main: '#6366F1', // Indigo
    light: '#818CF8',
    dark: '#4F46E5',
    contrastText: '#FFFFFF'
  },
  accent: {
    main: '#6366F1', // Indigo Accent
    light: '#A5B4FC',
    dark: '#4F46E5'
  },
  background: {
    default: '#F8FAFC', // Light Gray
    paper: '#FFFFFF', // White
    hero: '#EFF6FF' // Very Light Blue
  },
  text: {
    primary: '#0F172A', // Neutral Dark
    secondary: '#64748B'
  }
}

// Mobile-first theme configuration
export const theme = createTheme({
  palette: {
    primary: colors.primary,
    secondary: colors.secondary,
    background: colors.background,
    text: colors.text
  },
  typography: {
    fontFamily: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'].join(','),
    
    // Mobile-first typography with better hierarchy
    h1: {
      fontSize: '2rem', // 32px
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      '@media (min-width:600px)': {
        fontSize: '2.5rem' // 40px on tablet+
      },
      '@media (min-width:960px)': {
        fontSize: '3rem' // 48px on desktop
      }
    },
    h2: {
      fontSize: '1.75rem', // 28px
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
      '@media (min-width:600px)': {
        fontSize: '2rem' // 32px on tablet+
      },
      '@media (min-width:960px)': {
        fontSize: '2.25rem' // 36px on desktop
      }
    },
    h3: {
      fontSize: '1.5rem', // 24px
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
      '@media (min-width:600px)': {
        fontSize: '1.75rem' // 28px on tablet+
      },
      '@media (min-width:960px)': {
        fontSize: '2rem' // 32px on desktop
      }
    },
    h6: {
      fontSize: '1.125rem', // 18px
      fontWeight: 500,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem', // 16px
      lineHeight: 1.6,
      letterSpacing: '0.00938em'
    },
    body2: {
      fontSize: '0.875rem', // 14px
      lineHeight: 1.57,
      letterSpacing: '0.00714em'
    },
    button: {
      fontSize: '1rem',
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '0.02em'
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: '0.00938em'
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.57,
      letterSpacing: '0.00714em'
    }
  },
  breakpoints: {
    values: {
      xs: 0,     // Mobile
      sm: 600,   // Tablet
      md: 960,   // Small desktop
      lg: 1280,  // Large desktop
      xl: 1920   // Extra large
    }
  },
  components: {
    // Enhanced button styles
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
          fontWeight: 600,
          transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
          '@media (max-width:600px)': {
            padding: '12px 20px', // Larger touch targets on mobile
            fontSize: '0.9375rem'
          }
        },
        contained: {
          boxShadow: '0 2px 8px rgba(37, 99, 235, 0.25)',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(37, 99, 235, 0.35)',
            transform: 'translateY(-2px)'
          },
          '&:active': {
            transform: 'translateY(0)',
            boxShadow: '0 2px 6px rgba(37, 99, 235, 0.3)'
          }
        },
        outlined: {
          borderWidth: '1.5px',
          '&:hover': {
            borderWidth: '1.5px',
            backgroundColor: 'rgba(37, 99, 235, 0.04)'
          }
        },
        text: {
          '&:hover': {
            backgroundColor: 'rgba(37, 99, 235, 0.04)'
          }
        },
        sizeLarge: {
          padding: '12px 32px',
          fontSize: '1.0625rem'
        },
        sizeSmall: {
          padding: '6px 16px',
          fontSize: '0.875rem'
        }
      }
    },
    // Enhanced card styles
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)'
          }
        }
      }
    },
    // Enhanced icon button styles
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: 'all 0.2s ease',
          '@media (max-width:600px)': {
            padding: '10px' // Better touch targets on mobile
          },
          '&:hover': {
            transform: 'scale(1.05)'
          }
        }
      }
    },
    // Chip styles for consistency
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          borderRadius: 6
        }
      }
    },
    // TextField improvements
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(37, 99, 235, 0.5)'
            }
          }
        }
      }
    }
  }
})
