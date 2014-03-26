/**
 * Created with JetBrains RubyMine.
 * User: rizvan
 * Date: 23/3/14
 * Time: 4:28 PM
 * To change this template use File | Settings | File Templates.
 */
Todos.Todo = DS.Model.extend({
	title: DS.attr('string'),
	isCompleted: DS.attr('boolean')
});
Todos.Todo.FIXTURES = [

];