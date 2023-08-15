import { RollingText } from '../app/components/ui/textDisplays/rollingText/RollingText';

export default {
  title: 'RollingText',
  component: RollingText,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
};
export const Basic = {
  args: {
    displayText: 'TEST',
    fontSize: `1rem`
  },
};

export const Medium = {
  args: {
    displayText: 'TEST',
    fontSize: `2rem`
  },
};

export const Large = {
  args: {
    displayText: 'TEST',
    fontSize: `3rem`
  },
};

export const XL = {
  args: {
    displayText: 'TEST',
    fontSize: `4rem`
  },
};