import {parseFromString} from './utils.js';
import {HTMLDocument} from './html-document.js';
import {SVGDocument} from './svg-document.js';
import {XMLDocument} from './xml-document.js';

/**
 * @implements globalThis.DOMParser
 */
export default class DOMParser {
  /**
   * @param {string} markupLanguage 
   * @param {string} mimeType
   * @returns {Document}
   */
  parseFromString(markupLanguage, mimeType) {
    let isHTML = false, document;
    if (mimeType === 'text/html') {
      isHTML = true;
      document = new HTMLDocument;
    }
    else if (mimeType === 'image/svg+xml')
      document = new SVGDocument;
    else
      document = new XMLDocument;
    return parseFromString(document, isHTML, markupLanguage);
  }
}
