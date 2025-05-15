const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'GHO_Final-Project',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

