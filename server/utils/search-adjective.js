const fs = require("fs");

// Function receives input sentence and looks for instances
// of "adj." to represent an adjective. Each of these instances
// will be returned in a collection of variations based on the
// knowledge base of adjectives (currentlt stored as a txt file).
function searchWithAdjectives(results) {
  var tempResults = results;

  const newResults = [];
  const allFileContents = fs.readFileSync(
    "resources/pos/adjectives.txt",
    "utf-8"
  );
  const adjectives = allFileContents.split(/\r?\n/);
  
  var hasAdjective = false;
  tempResults.forEach((_sentence) => {
    if(_sentence.includes('adj.') && _sentence.length > 0) {
      hasAdjective = true;
			adjectives.forEach((_adjective) => {
				newResults.push(_sentence.replace('adj.', _adjective));
			});
    }
  });

	if(hasAdjective) {
		return searchWithAdjectives(newResults);
	} else {
		return tempResults;
	}
}
module.exports = { searchWithAdjectives };
