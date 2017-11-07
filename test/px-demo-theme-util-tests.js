describe('px-demo-theme-util ', () => {
  describe('PxDemo.ThemeUtil.extractThemeProperties', () => {
    it('extracts the default theme CSS variables', () => {
      const defaultThemeCSSVars = PxDemo.ThemeUtil.extractThemeProperties('px-theme-styles');
      expect(defaultThemeCSSVars !== null).to.be.true;
      expect(typeof defaultThemeCSSVars === 'object').to.be.true;
       /* smoke test, this color val might change as the design system changes */
      expect(defaultThemeCSSVars['--px-base-text-color']).to.equal('#2c404c');
    });

    it('extracts the dark theme CSS variables', () => {
      const darkThemeCSSVars = PxDemo.ThemeUtil.extractThemeProperties('px-dark-theme-styles');
      expect(darkThemeCSSVars !== null).to.be.true;
      expect(typeof darkThemeCSSVars === 'object').to.be.true;
       /* smoke test, this color val might change as the design system changes */
      expect(darkThemeCSSVars['--px-base-text-color']).to.equal('#b6c3cc');
    });

    it('extracts the dark demo theme CSS variables', () => {
      const darkDemoThemeCSSVars = PxDemo.ThemeUtil.extractThemeProperties('px-dark-demo-theme-styles');
      expect(darkDemoThemeCSSVars !== null).to.be.true;
      expect(typeof darkDemoThemeCSSVars === 'object').to.be.true;
       /* smoke test, this color val might change as the design system changes */
      expect(darkDemoThemeCSSVars['--px-demo-containers-border-color']).to.equal('black');
    });
  });
});
