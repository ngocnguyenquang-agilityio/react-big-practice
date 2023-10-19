import type { Preview } from '@storybook/react';
import 'tailwindcss/tailwind.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'custom',
      values: [
        { 
          name: 'custom', 
          value: '#171717' 
        },
        {
          name: 'white',
          value: '#FFF'
        }
      ],
    },
  },
};

export default preview;
