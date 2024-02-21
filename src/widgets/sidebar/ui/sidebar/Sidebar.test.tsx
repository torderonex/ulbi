import {fireEvent, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Sidebar} from 'widgets/sidebar/';
import renderWithTranslation from 'shared/lib/tests/renderWithTranlation';

describe('sidebar', () => {
	
	test('render test', () => {
		renderWithTranslation(<Sidebar/>);
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});

	test('collapse test', () => {
		renderWithTranslation(<Sidebar/>);
		fireEvent.click(screen.getByTestId('collapse-btn'));
		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
	});

});