import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers([
  'trigger',
  'backdrop',
  'positioner',
  'content',
  'title',
  'description',
  'closeTrigger',
])

export const Dialog = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    backdrop: {
      backdropFilter: 'blur(4px)',
      background: { base: 'white.a10', _dark: 'black.a10' },
      height: '100vh',
      left: '0',
      position: 'fixed',
      top: '0',
      width: '100vw',
      zIndex: 'overlay',
      _open: { animation: 'backdrop-in' },
      _closed: { animation: 'backdrop-out' },
    },
    positioner: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      left: '0',
      overflow: 'auto',
      position: 'fixed',
      top: '0',
      width: '100vw',
      height: '100dvh',
      zIndex: 'modal',
    },
    content: {
      background: 'bg.default',
      borderRadius: 'l3',
      boxShadow: 'lg',
      minW: 'sm',
      position: 'relative',
      _open: { animation: 'dialog-in' },
      _closed: { animation: 'dialog-out' },
    },
    title: { fontWeight: 'semibold', textStyle: 'lg' },
    description: { color: 'fg.muted', textStyle: 'sm' },
  }),
  defaultProps: { colorScheme: 'accent' },
  sizes: {},
  variants: {},
})
