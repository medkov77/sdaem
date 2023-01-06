const newsMock = require("../mock/news.json");
const News = require("../models/News");
module.exports = async () => {
  const news = await News.find();
  if (news.length !== newsMock.length) {
    await createInitialEntity(News, newsMock);
  }
  async function createInitialEntity(Model, data) {
    if (Model && Model.length !== 0) {
      await Model.collection.drop();
    }

    return Promise.all(
      data.map(async (item) => {
        try {
          if (item.id) {
            delete item.id;
          }

          const newItem = new Model(item);
          console.log(newItem);
          await newItem.save();
          return newItem;
        } catch (e) {
          return e;
        }
      })
    );
  }
};
