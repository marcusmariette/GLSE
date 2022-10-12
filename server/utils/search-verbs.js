const fs = require("fs");

// Function receives input sentence and looks for instances
// of "adj." to represent an verb. Each of these instances
// will be returned in a collection of variations based on the
// knowledge base of verbs (currently stored as a txt file).
function searchWithverbs(results) {
  var tempResults = results;

  const newResults = [];
  const allFileContents = fs.readFileSync(
    "resources/pos/verbs.txt",
    "utf-8"
  );
  const verbs = allFileContents.split(/\r?\n/);
  
  var hasverb = false;
  tempResults.forEach((_sentence) => {
    if(_sentence.includes('v.') && _sentence.length > 0) {
      hasverb = true;
			verbs.forEach((_verb) => {
				newResults.push(_sentence.replace('v.', _verb));
			});
    }
  });

	if(hasverb) {
		return searchWithverbs(newResults);
	} else {
		return tempResults;
	}
}
module.exports = { searchWithverbs };
