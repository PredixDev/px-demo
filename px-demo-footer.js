/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/*
    Relative paths assume component is being run from inside an app or another component, where dependencies are flat
    siblings. When this component is run from its own repo (e.g. tests, examples), we assume the server is started with
    'gulp serve' (or similar server setup) to enable correct finding of bower dependencies for local runs.
*/
/* Import style module */
/**
Creates a footer for Predix UI demo pages.

##### Usage

    <px-demo-footer></px-demo-footer>

@element px-demo-footer
@blurb Creates a footer for Predix UI demo pages.
@homepage index.html
@demo index.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import './css/px-demo-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <style include="px-demo-styles"></style>

    <footer class="demo-background--footer flex flex--center">
      <div class="demo-footer__container u-pv">
        <div>
          <a href="https://www.ge.com/digital"><img src="[[importPath]]monogram-wdmk.png" alt="GE Monogram" class=""></a>
        </div>
        <div class="demo-footer__list">
          <template is="dom-if" if="{{_showCookiesLink}}">
            <ul class="list-inline list-inline--delimited">
              <li><a on-click="_openCookiesLink" class="actionable actionable--secondary">Cookies</a></li>
              <li><a href="https://predix.io/legal" class="actionable actionable--secondary" target="_blank">Legal</a></li>
              <li><a href="https://www.predix.io/support/article/KB0012081" class="actionable actionable--secondary" target="_blank">Contact Us</a></li>
              <li>Copyright © General Electric Company. All rights reserved.</li>
            </ul>
          </template>
          <template is="dom-if" if="{{!_showCookiesLink}}">
            <ul class="list-inline list-inline--delimited">
              <li><a href="https://predix.io/legal" class="actionable actionable--secondary" target="_blank">Legal</a></li>
              <li><a href="https://www.predix.io/support/article/KB0012081" class="actionable actionable--secondary" target="_blank">Contact Us</a></li>
              <li>Copyright © General Electric Company. All rights reserved.</li>
            </ul>            
          </template>
        </div>
      </div>
    </footer>
`,

  is: 'px-demo-footer',

  properties: {
    /**
     * Shows the cookies link, which opens up the Evidon config dialog to opt in/out of tracking cookies
     *
     * @property _showCookiesLink
     * @type {Boolean}
     * @default false
     * @private
     */
    _showCookiesLink: {
      type: Boolean,
      value: false
    }
  },

  ready: function() {
    // Enable cookies link if global evidon object is present or if we're on www.predix-ui.com
    if (window.location.hostname.indexOf('predix-ui.com') >= 0 || window.evidon)
      this._showCookiesLink = true
  },

  _openCookiesLink: function() {
    try {
      window.evidon.notice.showConsentTool();
    } catch(err) {
      console.warn('Evidon notice tool is not available.', err)
    }
  }
});
