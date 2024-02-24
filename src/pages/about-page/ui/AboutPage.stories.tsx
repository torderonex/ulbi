import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import AboutPage from './AboutPage';

const meta = {
	title: 'pages/AboutPage',
	component: AboutPage,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],

} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
	},
};
