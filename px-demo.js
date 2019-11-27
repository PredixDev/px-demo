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
/* Import sub-components */
/**
Partials, style modules and helpers for creating demo pages for Predix UI components.

### Usage

    <px-demo counter-value="1"><a href="javascript:" on-click="handleClick">Click here to increment counter:</a><span>{{counterValue}}</span></px-demo>

@element px-demo
@blurb REPLACE THIS TEXT WITH A COMPONENT DESCRIPTION
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
import './px-demo-header.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`

`,

  is: 'px-demo',

  properties: {
    /**
    * This property keeps track of the number of clicks.
    *
    * @property counterValue
    */
    counterValue: {
      type: Number,
      value: 0,
      notify: true
    }
  },

  /**
  * Handles click on the element defined in 'on-click' on the template.
  *
  * @method handleClick
  */
  handleClick: function(event, detail, sender) {
    this.increment();
  },

  /**
  * Increments the counter
  *
  * @method increment
  */
  increment: function() {
    this.counterValue++;
  }
});
