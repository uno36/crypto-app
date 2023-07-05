import filteredCategories from './filterUtils';
import { test, expect } from 'vitest';

test('should filter categories based on the filter value', () => {
  const categories = [
    { id: '1', name: 'Bitcoin' },
    { id: '2', name: 'Ethereum' },
    { id: '3', name: 'Litecoin' },
  ];
  const filter = 'bit';

  const filteredResult = filteredCategories(categories, filter);

  expect(filteredResult.length).toBe(1);
  expect(filteredResult[0].name).toBe('Bitcoin');
});

test('should handle case-insensitive filtering', () => {
  const categories = [
    { id: '1', name: 'Bitcoin' },
    { id: '2', name: 'Ethereum' },
    { id: '3', name: 'Litecoin' },
  ];
  const filter = 'ETH';

  const filteredResult = filteredCategories(categories, filter);

  expect(filteredResult.length).toBe(1);
  expect(filteredResult[0].name).toBe('Ethereum');
});

test('should return an empty array when no matching categories found', () => {
  const categories = [
    { id: '1', name: 'Bitcoin' },
    { id: '2', name: 'Ethereum' },
    { id: '3', name: 'Litecoin' },
  ];
  const filter = 'Ripple';

  const filteredResult = filteredCategories(categories, filter);

  expect(filteredResult.length).toBe(0);
});
