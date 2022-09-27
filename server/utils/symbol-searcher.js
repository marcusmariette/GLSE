function searchWithOr(query, array, callback, results) {
    if (array.length > 1) {
        array.forEach((string, index) => {
            string.split("/").forEach(orWord => {
                let searched = query.replace(array[index], orWord)
                let isMatchingOR = searched.match(/\w+\/\w+/g)
                if (isMatchingOR && array.length - 1 === index) {
                    callback(searched, isMatchingOR, callback, results)
                }
            })
        })
    } else {
        array.forEach(string => {
                string.split("/").forEach(word => {
                        let searchQuery = query.replace(/\w+\/\w+/g, word)
                        results.push(searchQuery)
                    }
                )
            }
        )
    }
    return results
}

module.exports = { searchWithOr };