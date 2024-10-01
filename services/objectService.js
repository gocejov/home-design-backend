const ObjectItem = require('../models/objectItemModel');

const findObjectByExtensionName = async (extension) => {
   const all = await ObjectItem.find();
   const filtered = all.filter(o => o.path.includes(extension))
   return filtered
};

module.exports = { findObjectByExtensionName };