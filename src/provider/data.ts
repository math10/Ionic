import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { UserData } from './user-data';
import xml2js from 'xml2js';
let parseString = xml2js.parseString;

@Injectable()
export class Data {
  constructor() {}
}
