const rewire = require('rewire');

describe('shebang', () => {
  beforeEach(() => {
    spyOn(console, 'log');
  });

  it('shows that shebang causes parsing error', () => {
    rewire('../index');
    expect(console.log).toHaveBeenCalledWith('Success');
  });
});
