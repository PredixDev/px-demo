v3.1.2
==========================
* Give min/max bounds for code editor height, fixes #18 and #10

v3.1.1
==========================
* Give min/max bounds for code editor height, fixes #18 and #10

v3.1.0
==========================
* Add property to configure Github org in px-demo-header

v3.0.26
==========================
* Removed px-overlay from bower

==========================
* Add in px-demo-design to content-helper CSS.

v3.0.24
==========================
* Add spacing and headers to demo helpers CSS.

v3.0.23
==========================
* Rebuild CSS and check it in from v3.0.19

v3.0.22
==========================
* reduce icon-set imports

v3.0.21
==========================
* add box sizing to helpers

v3.0.20
==========================
* Add centre layout class

v3.0.19
==========================
* Add demo helper css, for use when styling demo page buttons/forms etc.

v3.0.18
==========================
* Added setProperties option to demo-configs

v3.0.17
==========================
* Bump to use new px-demo-design with container size fix, re-build sass

v3.0.16
==========================
* Use Github tag for latest version shields.io image

v3.0.15
==========================
* remove unused scss/css file.

v3.0.14
==========================
* Re-add function to parse plain old JSON to string

v3.0.13
==========================
* Add EvaluatedJavaScript code editor for demo props

v3.0.12
==========================
* Updates to use new version of px-code-editor

v3.0.11
==========================
* Make sure Object.assign polyfill is loaded

v3.0.10
==========================
* Fix code editor bug in Polymer 2

v3.0.9
==========================
* use hybrid version of px-view-header

v3.0.8
==========================
* change GH links to work in Canary

v3.0.7
==========================
* Fix initial load heights of shield badges and tab area.

v3.0.6
==========================
* Use the corresponding slot for px-deck-selector

v3.0.5
==========================
* fixing dependency versions

v3.0.4
==========================
* fixing dependency versions

v3.0.3
==========================
* more dependency updates

v3.0.2
==========================
* fix demo sync for polymer 2

v3.0.1
==========================
* Update to released dependencies

v3.0.0
==========================
* Migrate to Polymer 1.x/2.x hybrid component

v2.4.0
==========================
* add indicators for device sizes

v2.3.5
==========================
* calculate urls to avoid errors in safari

v2.3.4
==========================
* pass through `hide-codepen` for snippet

v2.3.3
==========================
* updated css to pick up properties panel to display full width change

v2.3.2
==========================
* Updated properties layout, added scrolling

v2.3.1
==========================
* Updated footer styles

v2.3.0
==========================
* Add ability to configure api source file and element name

v2.2.1
==========================
* Pick up new px-tabs version and API

v2.2.0
==========================
* Added noIndentation prop to turn off the demo snippet indentation

v2.1.2
==========================
* fix shields.io url for GH issues

v2.1.1
==========================
* updated css to pick up new forms-design change

v2.1.0
==========================
* Adding suppressPropertyValues property

v2.0.7
==========================
* add new theme switcher helper to work inside iframes

v2.0.6
==========================
* rebuild sass to pick up button style fix for chrome canary

v2.0.5
==========================
* disable clearing of prop dropdown

v2.0.4
==========================
* fix monogram wordmark for all browsers

v2.0.3
==========================
* add ability to disable toggles

v2.0.2
==========================
* update GE link

v2.0.1
==========================
* Open links in footer in new tab/window with target="_blank". Without this the links will break if they are inside an iFrame.

v2.0.0
==========================
* updated dependencies for design refresh
* removed unused code: px-input-group-design
* updated to work with new dropdown api
* cutover from px-toggle-design to px-toggle
* added new icons

v1.5.10
==========================
* Fix JavaScript function scope errors for code editor converter callback to solve IE11 bug
* Fix CSS visibility errors to ensure code editor shows up on IE11

v1.5.9
==========================
* Fix issue where configs could re-apply over input values and override them if two properties were set in a row. Now, instead of watching and _userConfigs path for a change, we only watch the object itself changing. Seems to still trigger all the right observers.

v1.5.8
==========================
* update dependencies

v1.5.7
==========================
* fix GH link logic

v1.5.5
==========================
* update dependencies

v1.5.4
==========================
* accessibility improvements

v1.5.2
==========================
* added ability to debounce inputs (#5)

v1.5.1
==========================
* removed _handleTypeaheadInput to prevent early event firing

v1.5.0
==========================
* Added typeahead option to demo props

v1.4.19
==========================
* fix #6

v1.4.17
==========================
* update px-api-viewer dependency

v1.4.16
==========================
* add disabled toggles

v1.4.15
==========================
* update event fired label in calendar picker demo

v1.4.14
==========================
* make disableInput dynamic
* ensure json editor saves value in shadow dom

v1.4.13
==========================
* fix event fired label behavior for calendar picker

v1.4.12
==========================
* Set `flex-to-size` attribute on px-code-editor to ensure it fits available space

v1.4.11
==========================
* Set `codepenLink` attribute in px-demo-code-snippet to default to an undefined value instead of an Object, which it should have never been. Fixes a bug where CodePen links break because checking `if (this.codeLink)` on an object returns a truthy value, instead of returning falsy like an undefined or empty string.

v1.4.10
==========================
* added theming for collection deck selector

v1.4.9
==========================
* added codepenLink in px-demo-component-snippet & enable-validation-states

v1.4.8
==========================
* added scriptsIncludes & polygitIncludes in px-demo-component-snippet

v1.4.7
==========================
* removed *.png & monogram-wdmk.png from bower ignore because demo pages need this file

v1.4.6
==========================
* fixed issue of text fields setting on-input="_handleNumberInput" causing the field to display 'Nan'

v1.4.5
==========================
* Ensure 'Number' properties are being coerced back to numbers before being passed back to the component
* Use flex on the px-component-demo wrapper

v1.4.4
==========================
* removed safari 8 from gulpfile autoprefixer

v1.4.3
==========================
* compiling sass for v1.2.0 of px-demo-design
* cleaning up some extra code

v1.4.2
==========================
* compiling sass for v1.1.0 of px-demo-design

v1.4.1
==========================
* compiling sass for change in px-demo-design v1.0.7

v1.4.0
==========================
* added the ability to filter out or change description of properties for the api viewer.

v1.3.5
==========================
* Add feature to configure the parent shield name, or hide shields altogether

v1.3.4
==========================
* Remove dead code. Fix import. Add yarn.lock file

v1.3.3
==========================
* Fix alignment for props demo helper text

v1.3.2
==========================
* Tweak spacing in the header to tighten up empty line-break

v1.3.1
==========================
* Add style tweaks for collection deck selector

v1.3.0
==========================
* Add demo collection feature, for multiple demo sub-pages

v1.2.8
==========================
* added flex__item--msfix
* fixed configShowProps to allow an 'configShowProps: []'

v1.2.7
==========================
* Remove extraneous function checking if input is 'text' or 'number'
* Fix bug that showed undefined value for empty text inputs

v1.2.6
==========================
* Add ability to specify which props are/are not shown

v1.2.5
==========================
* Fix single/double quote replacement in px-demo-component-snippet

v1.2.4
==========================
* Added type equal number for input fields

v1.2.3
==========================
* Added buttons and inputs groups to bower and sass

v1.2.2
==========================
* Flex the demo container to be the full height for props

v1.2.1
==========================
* Remove debugger that should not have been checked in

v1.2.0
==========================
* Add `px-demo-code-editor`, which allows for editing complex configuration objects

v1.1.6
==========================
* Add ability to pass `inputHelperText` to describe an input
* Add `disabled` to the toggle input type

v1.1.5
==========================
* Fix double-quote-string bug that caused px-demo-snippet to fail silently

v1.1.4
==========================
* removed async from px-theme-styles import

v1.1.3
==========================
* fixed typo in demo/index

v1.1.2
==========================
* Moved theming includes into index & index-dark-theme

v1.1.1
==========================
* Removes abstraction for toggle input, fixing a bug where Edge browser could not update props

v1.1.0
==========================
* added an event that fires when the light dom is loaded on demo-component, which holds the component that is being demoed.

v1.0.8
==========================
* adding index-dark-theme.html

v1.0.7
==========================
* loads theming links dynamically in the head of index.html

v1.0.6
==========================
* added inputDisabled to props

v1.0.5
==========================
* .demo-component-container changed to overflow visible for datetime panels

v1.0.4
==================
* added demo-container-flex for mobile

v1.0.3
==================
* Updating to cool grays

v1.0.2
==================
* Update chosenConfig when userConfigs are populated

v1.0.1
==================
* updating bower dependencies

v1.0.0
==================
* Initial release
* Demos can be created with minimal markup
* Property configuration fields can be generated through a `props` object
* Pre-set configurations can be generated through a `configs` object
* User changes to a configuration persist
* Styles and theming capability is baked in
