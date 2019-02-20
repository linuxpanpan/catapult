/* Copyright 2019 The Chromium Authors. All rights reserved.
   Use of this source code is governed by a BSD-style license that can be
   found in the LICENSE file.
*/
'use strict';
tr.exportTo('cp', () => {
  class RecentBugsRequest extends cp.RequestBase {
    constructor() {
      super({});
      this.method_ = 'POST';
    }

    get url_() {
      return '/api/bugs/recent';
    }

    postProcess_(json) {
      return json.bugs;
    }
  }

  return {RecentBugsRequest};
});
