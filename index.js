(function(){
  'use strict';

})();

let app = new Vue({
  el: '#app',
  data: {
    newItem: '',
    todos: [
      'task 1',
      'tasl 2',
      'task 3'
    ]
  },
  methods: {
    addItem: function(){
      this.todos.push(this.newItem);
    }
  }
})
