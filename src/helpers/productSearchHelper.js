const mongoose = require('mongoose');

const productSearchHelper = (query, req) => {
    if (req.query.search) {
        const searchTerm = req.query.search;
        const searchObject = {
            $or: [
                { name: { $regex: searchTerm, $options: 'i' } },
                { description: { $regex: searchTerm, $options: 'i' } },
                { 'variants.name': { $regex: searchTerm, $options: 'i' } },
            ],
        };

        // Apply the search conditions directly to the query
        query = query.where(searchObject);
    }

    return query;
};

module.exports = productSearchHelper;