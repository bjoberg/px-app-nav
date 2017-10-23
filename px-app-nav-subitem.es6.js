(function() {
  'use strict';

  Polymer({
    is: 'px-app-nav-subitem',

    behaviors: [PxAppNavBehavior.Item],

    properties: {
      /**
       * Set to `true` if the subitem's parent is selected.
       */
      parentSelected: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        observer: 'updateStyles'
      }
    },

    /**
     * Decided whether or not to show the subitem icon.
     * 
     * @param {* vertical state of the parent app-nav} isVertical
     * @param {* expandWithHover state of the parent app-nav} expandWithHover
     * @param {* app-nav open/collapsed state} verticalOpen
     */
    _showIcon: function(isVertical, exandWithHover, verticalOpen) {
      if (isVertical && exandWithHover === false && verticalOpen === false) { return true; }
      return false;
    },

    /**
     * Get the initials of the subitems label.
     * 
     * 1 word label returns first letter of the word
     * 2 word label returns the first letter of each word
     * 3+ word label return the first letter of the first 2 words
     * 
     * @param {* subitem's label} label
     */
    _getInitials: function(label) {
      if (this._hasWhiteSpaces(label)) {
        let indexOfWhiteSpace = label.indexOf(' ') + 1;
        return label.substring(0, 1).toUpperCase() + label.substring(indexOfWhiteSpace, indexOfWhiteSpace + 1);
      } else {
        return label.substring(0, 1).toUpperCase();
      }
    },

    /**
     * Check to see if a string has white spaces (a.k.a. is more than 1 word)
     * 
     * @param {* the string being validated} val
     */
    _hasWhiteSpaces: function(val) {
      return val.indexOf(' ') >= 0;
    }
  });
})();
