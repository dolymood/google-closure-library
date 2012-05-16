// Copyright 2007 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview This is a stub for backward compatibility.
 * For actual documentation, please see {@link goog.ui.ac.RichRemote}.
 *
 * @see ../../demos/autocompleterichremote.html
 */

goog.provide('goog.ui.AutoComplete.RichRemote');

goog.require('goog.ui.AutoComplete');
goog.require('goog.ui.ac.RichRemote');



//TODO(user): Deprecate/remove this after known usages are replaced.
/**
 * This is a stub for backward compatibility.
 * For actual documentation, please see {@link goog.ui.ac.RichRemote}.
 * @param {string} url A url.
 * @param {Element} input An input.
 * @param {boolean=} opt_multi Opt_multi.
 * @param {boolean=} opt_useSimilar Opt_useSimilar.
 * @constructor
 * @extends {goog.ui.ac.Remote}
 */
goog.ui.AutoComplete.RichRemote = goog.ui.ac.RichRemote;
