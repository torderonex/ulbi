import { Story, StoryFn } from '@storybook/react';
import { BrowserRouter} from 'react-router-dom';

export const RouterDecorator = (Story :any) => {
    return (
        <BrowserRouter>
            <Story/>
        </BrowserRouter>
        );
};