import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import NavBar from './NavBar';

const meta = {
	title: 'widgets/NavBar',
	component: NavBar,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],

} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
	},
};
