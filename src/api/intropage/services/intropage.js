'use strict';

/**
 * intropage service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::intropage.intropage');
