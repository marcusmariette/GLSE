const fs = require("fs");

// Function receives input sentence and looks for instances
// of "adj." to represent an adjective. Each of these instances
// will be returned in a collection of variations based on the
// knowledge base of adjectives (currentlt stored as a txt file).
function searchWithAdjectives(query) {
  var results = [];

  if (query.length > 0 && query.includes("adj.")) {
    const allFileContents = fs.readFileSync(
      "resources/pos/adjectives.txt",
      "utf-8"
    );

    const newSentences = [];
    const adjectives = allFileContents.split(/\r?\n/);
    var adjectiveCount = query.match(/adj./g).length;

    for (var i = 0; i < adjectiveCount; i++) {}
  } else {
    results.push(query);
  }

  return results;
}
module.exports = { searchWithAdjectives };
