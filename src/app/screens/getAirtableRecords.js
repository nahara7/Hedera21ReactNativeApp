import Airtable from '../airtable'

export default function getAirtableRecords (table, options) {
  let records = [];
  const params = {
    view: "Grid view",
    pageSize: 15,
  };

  Object.assign(params, options);

  return new Promise((resolve, reject) => {
    if (records.length > 0) {
      resolve(records);
    }
    const processPage = (partialRecords, fetchNextPage) => {
      records = [...records, ...partialRecords];
      fetchNextPage();
    };
    const processRecords = (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(records);
    };
    // Airtable.table.select(params).eachPage(processPage, processRecords);
  });
};
