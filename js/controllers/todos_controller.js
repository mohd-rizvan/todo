/**
 * Created with JetBrains RubyMine.
 * User: rizvan
 * Date: 24/3/14
 * Time: 12:33 AM
 * To change this template use File | Settings | File Templates.
 */
Todos.TodosController = Ember.ArrayController.extend({
	actions: {
		createTodo: function() {
			// Get the todo title set by the "New Todo" text field
			var title = this.get('newTitle');
			if (!title.trim()) { return; }

			// Create the new Todo model
			var todo = this.store.createRecord('todo', {
				title: title,
				isCompleted: false
			});
			// Clear the "New Todo" text field
			this.set('newTitle', '');

			// Save the new model
			todo.save();
		}
	},
	remaining: function() {
		var m=this.get('model');
		var remainingCount=0;
		for(var i= 0;i< m.get('length');i++){
			if(!m.objectAt(i).get('isCompleted')){
				remainingCount++;
			}
		}
		return remainingCount;
	//	return this.filterBy('isCompleted', false).get('length');
	}.property('@each.isCompleted'),
	inflection: function() {
		var remaining = this.get('remaining');
		return remaining <= 1 ? 'item' : 'items';
	}.property('remaining')
});
