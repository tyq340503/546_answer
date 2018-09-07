const mongoCollections = require("../config/mongoCollections");
const posts = mongoCollections.data;
const users = require("./user");
const uuid = require("node-uuid");

const exportedMethods = {
  async getAllPosts() {
    const postCollection = await posts();
    return await postCollection.find({}).toArray();
  },
  async getPostsByTag(tag) {
    if (!tag) throw "No tag provided";

    const postCollection = await posts();
    return await postCollection.find({ tags: tag }).toArray();
  },
  async getPostById(id) {
    const postCollection = await posts();
    const post = await postCollection.findOne({ _id: id });

    if (!post) throw "Post not found";
    return post;
  },
  async addPost(title, body, tags) {
    if (typeof title !== "string") throw "No title provided";
    //if (typeof body !== "string") throw "I aint got nobody!";
    if (!Array.isArray(body)) {
      body = [];
    }
    if (!Array.isArray(tags)) {
      tags = [];
    }

    const postCollection = await posts();

    //const userThatPosted = await users.getRecipesById(posterId);

    const newPost = {
      title: title,
      ingredients: body,
      steps:tags,
      // poster: {
      //   id: posterId,
      //   name: `${userThatPosted.name}`
      // },
      _id: uuid.v4()
    };

    const newInsertInformation = await postCollection.insertOne(newPost);
    const newId = newInsertInformation.insertedId;
    return await this.getPostById(newId);
  },
  async removePost(id) {
    const postCollection = await posts();
    const deletionInfo = await postCollection.removeOne({ _id: id });
    if (deletionInfo.deletedCount === 0) {
      throw `Could not delete post with id of ${id}`;
    }
  },
  async updatePost(id, updatedPost) {
    const postCollection = await posts();

    const updatedPostData = {};

    if (updatedPost.ingredients) {
      updatedPostData.ingredients = updatedPost.ingredients;
    }

    if (updatedPost.title) {
      updatedPostData.title = updatedPost.title;
    }

    if (updatedPost.steps) {
      updatedPostData.steps = updatedPost.steps;
    }

    let updateCommand = {
      $set: updatedPostData
    };
    const query = {
      _id: id
    };
    await postCollection.updateOne(query, updateCommand);

    return await this.getPostById(id);
  },
  async renameTag(oldTag, newTag) {
    let findDocuments = {
      tags: oldTag
    };

    let firstUpdate = {
      $pull: oldTag
    };

    let secondUpdate = {
      $addToSet: newTag
    };

    const postCollection = await posts();
    await postCollection.updateMany(findDocuments, firstUpdate);
    await postCollection.updateMany(findDocuments, secondUpdate);

    return await this.getPostsByTag(newTag);
  },
  async updateOnePost(id, updatedPost) {
    const postCollection = await posts();

    let updatedOneData = await this.getPostById(id);

    if (updatedPost.ingredients) {
      if(Array.isArray(updatedPost.ingredients)){

        updatedOneData.ingredients = updatedOneData.ingredients.concat(updatedPost.ingredients);
      }else{
        throw 'type of steps should be ingredients';
      }
    }

    if (updatedPost.title) {
      updatedOneData.title += updatedPost.title;
    }

    if (updatedPost.steps) {
      if(Array.isArray(updatedPost.steps)){

        updatedOneData.steps = updatedOneData.steps.concat(updatedPost.steps);
      }else{
        throw 'type of steps should be array';
      }
    }

    let updateCommand = {
      $set: updatedOneData
    };
    const query = {
      _id: id
    };
    await postCollection.updateOne(query, updateCommand);

    return await this.getPostById(id);
  }
};

module.exports = exportedMethods;
