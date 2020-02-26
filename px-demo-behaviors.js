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
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
var PxDemoBehaviors = PxDemoBehaviors || {};

/*
  Name:
  PxDemoBehaviors.manageProps

  Description:
  Common methods for dealing with props.

  @polymerBehavior PxDemoBehaviors.manageProps
*/
PxDemoBehaviors.manageProps = [{
  /**
   * On first run, copy each prop's `defaultValue` to its `value`. If you
   * need to add props dynamically, you can call this method manually on the
   * `px-demo-props` instance. Passing `overwriteValue` as `true` will reset
   * the props to their default value.
   *
   * @method applyPropDefaults
   * @param {Boolean} overwriteValue - If `true`, will write the default to value even if the value is already defined
   * @return null
   */
  applyPropDefaults: function(overwriteValue) {
    overwriteValue = overwriteValue || false;
    var props = this.props;
    var propKeys = Object.keys(this.props);

    for (var i = 0; i < propKeys.length; i++) {
      var prop = props[propKeys[i]];
      var pathTo = function(key) { return 'props.' + propKeys[i] + '.' + key; };
      var defaultValue = this.get(pathTo('defaultValue'));
      var value = this.get(pathTo('value'));

      if ((typeof defaultValue !== 'undefined') && ((typeof value === 'undefined') || overwriteValue)) {
        this.set(pathTo('value'), defaultValue);
      }
    }
  }
}];

export {PxDemoBehaviors};