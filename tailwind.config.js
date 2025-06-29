/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", 
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      // Design System Colors (60-30-10 rule)
      colors: {
        // 60% - Neutral colors (primary background)
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        // 30% - Supporting colors
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        // 10% - Accent colors (orange primary) - Synced with constants
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa', 
          300: '#fdba74',
          400: '#FF8A65', // From constants primaryLight
          500: '#FF6B35', // Main orange - From constants
          600: '#ea580c',
          700: '#E65100', // From constants primaryDark
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        // Secondary colors - From constants
        secondary: {
          50: '#e3f2fd',
          100: '#bbdefb',
          200: '#90caf9',
          300: '#64B5F6', // From constants secondaryLight
          400: '#42a5f5',
          500: '#2196F3', // From constants secondary
          600: '#1e88e5',
          700: '#1976D2', // From constants secondaryDark
          800: '#1565c0',
          900: '#0d47a1',
          950: '#0a2e5c',
        },
        // Supporting accent colors - Synced with constants
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#81C784', // From constants successLight
          400: '#4ade80',
          500: '#4CAF50', // From constants success
          600: '#16a34a',
          700: '#388E3C', // From constants successDark
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#FFB74D', // From constants warningLight
          400: '#fbbf24',
          500: '#FF9800', // From constants warning
          600: '#d97706',
          700: '#F57C00', // From constants warningDark
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        danger: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#E57373', // From constants errorLight
          400: '#f87171',
          500: '#F44336', // From constants error
          600: '#dc2626',
          700: '#D32F2F', // From constants errorDark
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        // Info colors - From constants (same as secondary)
        info: {
          50: '#e3f2fd',
          100: '#bbdefb',
          200: '#90caf9',
          300: '#64B5F6', // From constants infoLight
          400: '#42a5f5',
          500: '#2196F3', // From constants info
          600: '#1e88e5',
          700: '#1976D2', // From constants infoDark
          800: '#1565c0',
          900: '#0d47a1',
          950: '#0a2e5c',
        },
      },
      // Typography system based on modular scale (Golden Ratio: 1.618)
      fontSize: {
        'xs': ['12px', { lineHeight: '16px', letterSpacing: '0.025em' }],
        'sm': ['14px', { lineHeight: '20px', letterSpacing: '0.025em' }],
        'base': ['16px', { lineHeight: '24px', letterSpacing: '0em' }],
        'lg': ['18px', { lineHeight: '28px', letterSpacing: '0em' }],
        'xl': ['20px', { lineHeight: '32px', letterSpacing: '-0.025em' }],
        '2xl': ['24px', { lineHeight: '36px', letterSpacing: '-0.025em' }],
        '3xl': ['30px', { lineHeight: '45px', letterSpacing: '-0.025em' }],
        '4xl': ['36px', { lineHeight: '54px', letterSpacing: '-0.05em' }],
        '5xl': ['48px', { lineHeight: '72px', letterSpacing: '-0.05em' }],
      },
      // Spacing system based on Golden Ratio
      spacing: {
        '0.5': '2px',
        '1': '4px',
        '1.5': '6px',
        '2': '8px',
        '2.5': '10px',
        '3': '12px',
        '3.5': '14px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '7': '28px',
        '8': '32px',
        '9': '36px',
        '10': '40px',
        '11': '44px',
        '12': '48px',
        '14': '56px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
        '28': '112px',
        '32': '128px',
        '36': '144px',
        '40': '160px',
        '44': '176px',
        '48': '192px',
        '52': '208px',
        '56': '224px',
        '60': '240px',
        '64': '256px',
        '72': '288px',
        '80': '320px',
        '96': '384px',
      },
      // Border radius system
      borderRadius: {
        'none': '0px',
        'sm': '4px',
        'DEFAULT': '6px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '20px',
        '3xl': '24px',
        'full': '9999px',
      },
      // Shadow system
      boxShadow: {
        'xs': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'sm': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'DEFAULT': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'md': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'lg': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        'xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      },
      // Font family system
      fontFamily: {
        'sans': ['Inter', 'SF Pro Display', 'Roboto', 'system-ui', 'sans-serif'],
        'mono': ['SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
} 