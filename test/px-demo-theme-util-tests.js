/**
 * @license
 * Copyright (c) 2018, General Electric
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
