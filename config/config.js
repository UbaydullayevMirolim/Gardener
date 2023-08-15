require("dotenv/config");

const {env} = process;

const config = {
    PORT: env.PORT || 5432,
    ConnectionString: env.ConnectionString,
    SECRET_KEY: env.SECRET_KEY
}

module.exports = config;