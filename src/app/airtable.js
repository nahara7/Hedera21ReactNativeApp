import Airtable from 'airtable';

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: " keykefT9YD5rhkuFg",
});
export var base = Airtable.base('appg4L9uWpNhonYHS');

export default Airtable
