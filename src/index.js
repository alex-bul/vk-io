'use strict';

import { Agent } from 'https';

import API from './api';

import { defaultOptions } from './util/constants';

/**
 * Main class
 *
 * @public
 */
export class VK {
	/**
	 * Constructor
	 *
	 * @param {Object} options
	 */
	constructor (options = {}) {
		this.options = {
			...defaultOptions,

			agent: new Agent({
				keepAlive: true,
				keepAliveMsecs: 10000
			})
		};

		this.api = new API(this);
	}

	/**
	 * Returns custom tag
	 *
	 * @return {string}
	 */
	get [Symbol.toStringTag] () {
		return 'VK';
	}

	/**
	 * Sets options
	 *
	 * @param {Object} options
	 *
	 * @return {this}
	 */
	setOptions (options) {
		Object.assign(this.options, options);

		return this;
	}

	/**
	 * Sets token
	 *
	 * @param {string} token
	 *
	 * @return {this}
	 */
	setToken (token) {
		this.options.token = token;

		return this;
	}

	/**
	 * Returns token
	 *
	 * @return {?string}
	 */
	getToken () {
		return this.options.token;
	}
}
