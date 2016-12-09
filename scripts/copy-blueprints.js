#!/usr/bin/env node

'use strict';

var ncp = require('ncp');

ncp(`${__dirname}/../src/blueprints`, `${__dirname}/../dist/blueprints`);