#! /usr/bin/env node
require("dotenv").config();

const { Pool } = require("pg");

module.exports = new Pool({
  connectionString: `postgresql://postgres:${process.env.PGPASSWORD}@junction.proxy.rlwy.net:38370/railway
`,
});

const query = (text, params, callback) => {
  return pool.query(text, params, callback);
};

exports.query = query;
