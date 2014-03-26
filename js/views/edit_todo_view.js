/**
 * Created with JetBrains RubyMine.
 * User: rizvan
 * Date: 27/3/14
 * Time: 12:22 AM
 * To change this template use File | Settings | File Templates.
 */

Todos.EditTodoView = Ember.TextField.extend({
	didInsertElement: function() {
		this.$().focus();
	}
});

Ember.Handlebars.helper('edit-todo', Todos.EditTodoView);