// Copyright 2015 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {ActionBarController} from 'persistentvolumeclaimdetail/actionbar_controller';
import module from 'persistentvolumeclaimdetail/persistentvolumeclaimdetail_module';

describe('Action Bar controller', () => {
  /** @type {!ActionBarController} */
  let ctrl;
  let details = {};

  beforeEach(() => {
    angular.mock.module(module.name);

    angular.mock.inject(($controller) => {
      ctrl = $controller(ActionBarController, {persistentVolumeClaimDetail: details});
    });
  });

  it('should initialize details', () => {
    expect(ctrl.details).toBe(details);
  });
});
