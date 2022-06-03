'use strict';

/**
 * kuli-user service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::kuli-user.kuli-user');
