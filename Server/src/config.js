"use strict";

const assert = require( "assert" );
const dotenv = require( "dotenv" );

// read in the .env file
dotenv.config();

// capture the environment variables the application needs
const { EMAIL_USER,
    EMAIL_PASS,PORT
} = process.env;

// validate the required configuration information
assert( EMAIL_USER, "EMAIL_USER configuration is required." );
assert( EMAIL_PASS, "EMAIL_PASS configuration is required." );
assert( PORT, "PORT configuration is required." );

/// export the configuration information
module.exports = {
   emailUser: EMAIL_USER,
   emailPass: EMAIL_PASS,
   port : PORT
};