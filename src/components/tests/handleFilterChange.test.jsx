import { handleFilterChange } from './handleFilterChange';
import { assert } from 'chai';
import { test } from 'vitest';

test('should update the filter state correctly', () => {
  const setFilterMock = (value) => {
    assert.equal(value, 'ethereum');
  };

  const event = {
    target: {
      value: 'ethereum',
    },
  };

  handleFilterChange(event, setFilterMock);
});
