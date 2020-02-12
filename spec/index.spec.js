describe('shebang', () => {
  beforeEach(() => {
    spyOn(console, 'log');
  });

  it('shows that shebang causes parsing error', () => {
    require('../index');
    expect(console.log).toHaveBeenCalledWith('Success');
  });
});
