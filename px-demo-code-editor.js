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
/**
Wraps around `px-code-editor` to provide a code editor instance that can be
used to edit complex props.

##### Usage

    <px-demo-code-editor></px-demo-code-editor>

@element px-demo-code-editor
@blurb Provides a code editor instance to edit complex props.
@homepage index.html
@demo index.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'px-code-editor/px-code-editor.js';
import 'px-modal/px-modal.js';
import './beautify-import.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <style>
      .code-editor {
        width: 800px;
        min-height: 150px;
        height: 500px;
        max-height: calc(100vh - 300px); /* 120px is a magic number that cause the editor to fill the modal body but not overflow */
      }
      .code-editor-container {
        padding-bottom: 1rem;
      }
    </style>

    <px-modal header-text="[[title]]" accept-text="Save" reject-text="Cancel" opened="{{enabled}}" on-px-modal-accepted="_handleEditorSaved" on-px-modal-rejected="_handleEditorCanceled" on-px-modal-dismissed="_handleEditorCanceled">
      <div slot="body" class="code-editor-container">
        <px-code-editor id="editor" class="code-editor" mode="javascript" value="[[_code]]"></px-code-editor>
      </div>
    </px-modal>
`,

  is: 'px-demo-code-editor',

  properties: {
    /**
     * Makes the editor visible to the user.
     */
    enabled: {
      type: Boolean,
      value: false,
      reflectToAttribute: true,
      notify: true
    },

    /**
     * Title to show over the top of the editor.
     */
    title: {
      type: String,
      value: ''
    },

    /**
     * The element to attach the `px-demo-props-code-edit-request` event
     * listener to. Defaults to this element's parent node.
     */
    target: {
      type: HTMLElement,
      observer: '_bindTargetListener'
    }
  },

  created: function() {
    this._handleEditRequest = this._handleEditRequest.bind(this);
  },

  attached: function() {
    if (!this.target) {
      this.target = this.parentNode;
    }
  },

  detached: function() {
    this.target = null;
  },

  _bindTargetListener(target, oldTarget) {
    if (oldTarget) {
      oldTarget.removeEventListener('px-demo-props-code-edit-request', this._handleEditRequest);
    }
    if (target) {
      target.addEventListener('px-demo-props-code-edit-request', this._handleEditRequest)
    }
  },

  /**
   * When another element requests an editor instance, configure the instance
   * and make it visible.
   */
  _handleEditRequest: function(evt) {
    const {value, mode, title, save} = evt.detail;

    // Convert code
    let code = '';
    if (mode === 'code:JSON') {
      try {
        code = beautifyJavaScript(JSON.stringify(value));
      } catch (e) {}
    }
    if (mode === 'code:EvaluatedJavaScript') {
      code = stringifyJavaScript(value);
    }

    this._code = code;
    this._codeType = mode;
    this._editorSaveCallback = save;
    this.title = title;
    this.enabled = true;
  },

  _handleEditorSaved: function(evt) {
    if (this._editorSaveCallback && this._codeType) {
      let parsedCode = '';
      if (this._codeType === 'code:JSON')  {
        parsedCode = parseStringToJSON(this.$.editor.value);
      }
      if (this._codeType === 'code:EvaluatedJavaScript') {
        parsedCode = dangerousEvalToJavaScript(this.$.editor.value);
      }
      this._editorSaveCallback(parsedCode);
      this._code = null;
      this._codeType = null;
      this._editorSaveCallback = null;
      this.enabled = false;
    }
  },

  _handleEditorCanceled: function(evt) {
    this._code = null;
    this._codeType = null;
    this._editorSaveCallback = null;
    this.enabled = false;
  }
});

function parseStringToJSON(str) {
  let parsed;
  // First, try a JSON.parse()
  try {
    parsed = JSON.parse(str);
  }
  // Fall back to eval
  catch (err) {
    parsed = eval(str);
  }
  return parsed || '';
}

function beautifyJavaScript(str) {
  return js_beautify(str);
}

function stringifyJavaScriptArray(arr) {
  if (Array.isArray(arr)) {
    if (arr.length === 0) return '[]';
    const parsedEntries = arr.map(a => {
      if (Array.isArray(a)) {
        return stringifyJavaScriptArray(a);
      }
      return stringifyJavaScriptObject(a);
    }).join(',');
    return `[${parsedEntries}]`;
  }
}

function stringifyJavaScriptObject(obj) {
  const keys = Object.keys(obj);
  let str = '';
  str += '{';
  for (var i = 0; i < keys.length; i++) {
    let key = keys[i];
    let val = obj[key];
    str += key + ':';

    if (typeof val === 'function') {
      str += val.toString();
    }
    else if (Array.isArray(val)) {
      str += stringifyJavaScriptArray(val);
    }
    else if (typeof val === 'object') {
      str += stringifyJavaScriptObject(val);
    }
    else {
      str += JSON.stringify(val);
    }

    if (i !== (keys.length - 1)) str += ',';
  }
  str += '}';
  return str;
}

function stringifyJavaScript(o) {
  if (Array.isArray(o)) {
    return stringifyJavaScriptArray(o);
  }
  if (o && typeof o === 'object') {
    return stringifyJavaScriptObject(o);
  }
  return o + '';
}

function dangerousEvalToJavaScript(str) {
  return eval('(function() { return ' + str + ' })()');
}
