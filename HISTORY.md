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
