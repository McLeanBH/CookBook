import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createPost: function(newAuthor, newName, newRecipeType, newPrepTime, newCookTime, newCookTimeUnit, newCookTemp, newCookTempUnit, newCookTempUnits, newYieldName, newYieldNumber) {

      var info = {author: newAuthor, name: newName,  recipeType: newRecipeType, prepTime: newPrepTime, cookTime: newCookTime, cookTimeUnit: newCookTimeUnit, cookTemp: newCookTemp, cookTempUnit: newCookTempUnit, yieldNumber: newYieldNumber, yieldName: newYieldName};
      
      Ember.$.ajax("https://api.parse.com/1/classes/Post/", {
        type: "PUT",
        data: JSON.stringify(info)
      }).done(function() {
        console.log(name);
      });

    }
  }
});
