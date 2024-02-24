import type { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonTheme } from './Button';
import "app/styles/index.scss"
const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
  args: {
    theme : ButtonTheme.CLEAR,
    children : 'text'
},
};

export const Outlined: Story = {
    args: {
      theme : ButtonTheme.OUTLINED,
      children : 'text'
  },
  };
  