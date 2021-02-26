import { future } from '@theme-ui/presets'

const theme = {
  ...future,
  containers: {
    card: {
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      border: '1px solid',
      borderColor: 'muted',
      borderRadius: '4px',
      p: 2,
    },
    page: {
      width: '100%',
      maxWidth: '960px',
      m: 0,
      mx: 'auto',
    },
    box: {
      width: '100%',
      maxWidth: '960px',
      m: 0,
      mx: 'auto',
    },
    grid: {
      width: '100%',
      maxWidth: '960px',
      m: 0,
      mx: 'auto',
    },
    cards: {
      primary: {
        padding: 2,
        borderRadius: 4,
        boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
      },
      compact: {
        padding: 1,
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'muted',
      },
    },
    images: {
      avatar: {
        width: 70,
        height: 70,
        borderRadius: 99999,
      },
      logo: {
        width: 250,
      }
    },
    text: {
      default: {
        color: 'text',
        fontSize: 3,
      },
      caps: {
        textTransform: 'uppercase',
        letterSpacing: '0.2em',
      },
      date: {
        fontStyle: 'italic',
        fontSize: 2,
      },
      heading: {
        fontFamily: 'heading',
        fontWeight: 'heading',
        lineHeight: 'heading',
      },
    },
    buttons: {
      primary: {
        color: 'primary',
        // text: 'secondary',
        outline: 'true',
        bg: 'transparent',
        '&:hover': {
          bg: 'primary',
          color: 'background',
        }
      },
      secondary: {
        color: 'background',
        bg: 'secondary',
      },
      normal: {
        color: 'background',
        bg: 'secondary',
        '&:hover': {
          bg: 'text',
        }
      },
    },
  },
  styles: {
    ...future.styles
  }
}

export default theme
