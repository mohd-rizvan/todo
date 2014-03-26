/**
 * Created with JetBrains RubyMine.
 * User: rizvan
 * Date: 27/3/14
 * Time: 12:10 AM
 * To change this template use File | Settings | File Templates.
 */
Todos.TodoController = Ember.ObjectController.extend({
	isCompleted: function(key, value){
		var model = this.get('model');

		if (value === undefined) {
			//property being used as a getter
			return model.get('isCompleted');
		} else {
			//property being used as a setter
			model.set('isCompleted', value);
			model.save();
			return value;
		}
	}.property('model.isCompleted'),

	actions: {
		editTodo: function() {
			this.set('isEditing', true);
		},
		acceptChanges: function() {
			this.set('isEditing', false);

			if (Ember.isEmpty(this.get('model.title'))) {
				this.send('removeTodo');
			} else {
				this.get('model').save();
			}
		},
		removeTodo: function() {
			alert("are you sure?");
			var todo = this.get('model');
			todo.deleteRecord();
			todo.save();
		}
	},
	isEditing: false

});

