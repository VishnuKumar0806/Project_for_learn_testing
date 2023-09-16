import { render, screen, cleanup } from '@testing-library/react';
import redderer from 'react-test-renderer';
import Home from '../home.js';

afterEach(() => {
    cleanup()
});

test('should render completed todo comoponent', () => {
    const todo = { id: 1, name: 'learn DSA', completed: true };
    render(<Home todo={todo}/>);
    const element = screen.getByTestId('test-1');
    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent("learn DSA")
})

test('should render not completed todo comoponent', () => {
    const todo = { id: 2, name: 'learn cooking', completed: false };
    render(<Home todo={todo}/>);
    const element = screen.getByTestId('test-2');
    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent("learn cooking")
    expect(element).not.toContainHTML('<strike>')
})

test(('match snapshot'),()=>{
    const todo = { id: 1, name: 'learn DSA', completed: true };
    const tree = redderer.create(<Home todo={todo}/>).toJSON()
    expect(tree).toMatchSnapshot()
})