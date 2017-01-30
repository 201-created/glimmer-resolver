"use strict";

const build = require('@glimmer/build');
const buildVendorPackage = require('@glimmer/build/lib/build-vendor-package');

let buildOptions = {};

if (process.env.BROCCOLI_ENV === 'tests') {
  buildOptions.vendorTrees = [
    buildVendorPackage('@glimmer/util', { external: ['babel-helpers'] }),
    buildVendorPackage('@glimmer/di', { external: ['@glimmer/util', 'babel-helpers'] })
  ];
}

module.exports = build(buildOptions);
