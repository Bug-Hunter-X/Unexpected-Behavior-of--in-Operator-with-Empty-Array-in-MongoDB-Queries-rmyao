```javascript
function findDocuments(field, values) {
  if (values.length === 0) {
    // Handle empty array case by returning all documents
    return db.collection.find({});
  } else {
    return db.collection.find({ field: { $in: values } });
  }
}

// Example usage
const values = []; // Or any other array
const result = findDocuments('fieldName', values);
result.toArray().then(results => console.log(results));
```