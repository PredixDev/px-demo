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
Creates a header for Predix UI demo pages.

##### Usage

    <px-demo-header
        module-name="px-calendar-picker"
        description="The px-calendar-picker component includes various elements used for structuring responsive layouts. This component allows the user to select a date or date range. The main use of this component is to be used in the px-range-panel.">
    </px-demo-header>

@element px-demo-header
@blurb Creates a header for Predix UI demo pages.
@homepage index.html
@demo index.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'px-api-viewer/px-api-viewer.js';
import './css/px-demo-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <style include="px-demo-styles"></style>

    <div class="demo-background--api">
      <div class="flex flex--col demo-layout--center u-pt++ u-pb++">
        <div>
          <px-api-viewer api-source-file-path="[[apiSourceFilePath]]" source="{{source}}" mark-read-only="{{markReadOnly}}" mark-private="{{markPrivate}}" hide="{{hide}}" change-description="{{changeDescription}}" filter-tag-by-prefix="px-"></px-api-viewer>
        </div>
      </div>
    </div>
`,

  is: 'px-demo-api-viewer',

  properties: {

    /**
     * Name of the source file to analyze to generate the API viewer.
     *
     * @property source
     */
    source: {
      type: String,
      value: ''
    },
    /*
    * A string holding the path of the api source file e.g. px-tabs/px-tabs-api.json
    *x
    * @property apiSourceFileName
    * @type String
    */
    apiSourceFilePath: {
      type: String,
      value: ''
    },
    /**
     * An array which contains the names of properties which will be removed
     * from the hydrolysis object
     * @type {Array}
     */
    hide: {
      type: Array,
      value: function() {
        return [];
      }
    },
    /**
     * An array which contains the names of properties which will be marked
     * as private
     * @type {Array}
     */
    markPrivate: {
      type: Array,
      value: function() {
        return [];
      }
    },
    /**
     * An array which contains the names of properties which will be marked
     * as readonly
     * @type {Array}
     */
    markReadOnly: {
      type: Array,
      value: function() {
        return [];
      }
    },
    /**
     * an array which contains the names and new descriptions of
     * properties we want to change the deccription of.
     * @type {Array}
     */
     changeDescription: {
       type: Array,
       value: function() {
         return [];
       }
     },
    /**
     * represents a prefix that we filter the elements by when we mutate the hydrolysis object.
     * @type {String}
     */
    filterTagByPrefix: {
      type: String,
      value: ''
    }
  }
});
