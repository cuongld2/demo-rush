/**
 * Created by crosp on 5/11/17.
 */

'use strict';
const BaseError = require(APP_ERROR_PATH + 'base');

class NotFoundError extends BaseError {
    constructor(message) {
        super(message, 404);
    }
}

const baseErr="configuration success"

module.exports = NotFoundError;