import { render, screen, fireEvent } from '@testing-library/react';
import ListItem from './ListItem';

test('ListItem displays content and reacts to the button', () => {
  const id = 123;
  const text = 'random text';
  const deleteHandler = jest.fn();

  render(<ListItem text={text} id={id} deleteHandler={deleteHandler} />);
  expect(screen.getByText(text)).toBeInTheDocument();

  const button = screen.getByTestId('delete_button');
  expect(button).toBeInTheDocument();
  fireEvent.click(button);

  expect(deleteHandler).lastCalledWith(id);
});
test('List Item display selected checkbox ', () => {
  const index = '1';
  const item = 'Забыть спросить хохла';
  render(<ListItem index={index} isChecked={true} item={item} />)

  const checker = screen.getByTestId('check');
  expect(checker).toBeInTheDocument();
  expect(checker).toHaveAttribute('checked');
})

test('List Item display empty checkbox ', () => {
  const index = '1';
  const item = 'Забыть спросить хохла';
  render(<ListItem index={index} isChecked={false} item={item} />)

  const checker = screen.getByTestId('check');
  expect(checker).toBeInTheDocument();
  expect(checker).not.toHaveAttribute('checked');
})
