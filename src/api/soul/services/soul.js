'use strict';

/**
 * soul service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::soul.soul');
