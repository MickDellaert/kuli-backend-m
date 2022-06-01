'use strict';

/**
 * mick service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mick.mick');
