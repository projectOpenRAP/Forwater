'use strict';

const BASE_URL = 'http://localhost:9090';

const HOME_EXT = 'api/data/v1/page/assemble';
const SEARCH_BY_ID_EXT = '/api/content/v1/read/:contentID';
const TELEMETRY_EXT = 'api/data/v1/telemetry';
const SEARCH_EXT = '/api/composite/v1/search';
const AUTH_JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI0NTAyNmQ0M2RhMWM0Yzc1OWMwNTNkZDA3OWJlMDkwMSJ9.bQ2Gie8C9eO7E-pcB0iICmf5uww2IuM8YgqR8ohZfTg';

module.exports = {
    BASE_URL,
    HOME_EXT,
    SEARCH_BY_ID_EXT,
    TELEMETRY_EXT,
    SEARCH_EXT,
    AUTH_JWT
}
