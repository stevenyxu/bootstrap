import { render, screen } from '@testing-library/react';
import SelectAllNone from './SelectAllNone';

let selectAll: HTMLInputElement;
let apples: HTMLInputElement;
let bananas: HTMLInputElement;
let carrots: HTMLInputElement;

beforeEach(() => {
  render(<SelectAllNone />);
  selectAll = screen.getByLabelText(/Select all/) as HTMLInputElement;
  apples = screen.getByLabelText(/Apples/) as HTMLInputElement;
  bananas = screen.getByLabelText(/Bananas/) as HTMLInputElement;
  carrots = screen.getByLabelText(/Carrots/) as HTMLInputElement;
})

test('starts with nothing checked', () => {
  expect(selectAll.checked).toBe(false);
  expect(selectAll.indeterminate).toBe(false);
  expect(apples.checked).toBe(false);
  expect(bananas.checked).toBe(false);
  expect(carrots.checked).toBe(false);
});

test('checks a checkbox and sets indeterminate', () => {
  apples.click();
  expect(selectAll.indeterminate).toBe(true);
  expect(apples.checked).toBe(true);
  expect(bananas.checked).toBe(false);
  expect(carrots.checked).toBe(false);
});

test('checks and unchecks a checkbox', () => {
  apples.click();
  expect(selectAll.indeterminate).toBe(true);
  expect(apples.checked).toBe(true);
  apples.click();
  expect(selectAll.indeterminate).toBe(false);
  expect(apples.checked).toBe(false);
  expect(bananas.checked).toBe(false);
  expect(carrots.checked).toBe(false);
});

test('can select all', () => {
  selectAll.click();
  expect(selectAll.checked).toBe(true);
  expect(selectAll.indeterminate).toBe(false);
  expect(apples.checked).toBe(true);
  expect(bananas.checked).toBe(true);
  expect(carrots.checked).toBe(true);
});

test('can select none', () => {
  selectAll.click();
  expect(selectAll.checked).toBe(true);
  selectAll.click();
  expect(selectAll.checked).toBe(false);
  expect(selectAll.indeterminate).toBe(false);
  expect(apples.checked).toBe(false);
  expect(bananas.checked).toBe(false);
  expect(carrots.checked).toBe(false);
});

test('selects all and unchecks one', () => {
  selectAll.click();
  apples.click();
  expect(selectAll.indeterminate).toBe(true);
  expect(apples.checked).toBe(false);
  expect(bananas.checked).toBe(true);
  expect(carrots.checked).toBe(true);
});

test('toggles select all when all selected', () => {
  apples.click();
  bananas.click();
  carrots.click();
  expect(selectAll.checked).toBe(true);
  expect(selectAll.indeterminate).toBe(false);
  expect(apples.checked).toBe(true);
  expect(bananas.checked).toBe(true);
  expect(carrots.checked).toBe(true);
})