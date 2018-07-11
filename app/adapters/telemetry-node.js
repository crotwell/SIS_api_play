import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  pathForType(type) {
    return "telemetry/nodes/";
  },
  urlForFindRecord(id, modelName, snapshot) {
    let baseUrl = this.buildURL(modelName, id, snapshot);
    return `${baseUrl}/detail/`;
  }
});