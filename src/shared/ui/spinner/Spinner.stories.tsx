import type { Meta, StoryObj } from '@storybook/react';
import "app/styles/index.scss"
import Spinner from './Spinner';
const meta = {
  title: 'shared/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
},
};
