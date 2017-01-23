1.1.6
==========================
* Add ability to pass `inputHelperText` to describe an input
* Add `disabled` to the toggle input type

1.1.5
==========================
* Fix double-quote-string bug that caused px-demo-snippet to fail silently

1.1.4
==========================
* removed async from px-theme-styles import

1.1.3
==========================
* fixed typo in demo/index 

1.1.2
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
