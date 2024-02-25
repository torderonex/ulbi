import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Sidebar } from 'widgets/sidebar/';
import appRender from 'shared/lib/tests/appRender';

describe('sidebar', () => {
	
	test('render test', () => {
		appRender(<Sidebar/>);
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});

	test('collapse test', () => {
		appRender(<Sidebar/>);
		fireEvent.click(screen.getByTestId('collapse-btn'));
		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
	});

});