/*
 * Polkascan Explorer GUI
 *
 * Copyright 2018-2020 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * runtime-event-attribute.service.ts
 */

import { Injectable } from '@angular/core';
import {Autoregister, Service} from "ngx-jsonapi";
import {RuntimeEventAttribute} from "../classes/runtime-event-attribute.class";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
@Autoregister()
export class RuntimeEventAttributeService extends Service<RuntimeEventAttribute> {
    public resource = RuntimeEventAttribute;
    public type = 'runtimeeventattribute';
    public path = 'runtime-event-attribute';

    public jsonApiRootUrl;

    public getPrePath(): string {
      return this.jsonApiRootUrl;
    }
}
