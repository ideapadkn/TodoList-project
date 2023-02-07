<template>
  <div>
    <h2>Todo page</h2>
    <router-link to="/">Home</router-link>
    <hr>
    <add-todo 
      @add-todo="addTodo"
    />
    <hr>
    <todo-list 
      :todos="todos"
      @remove-todo="removeTodo"
    />
  </div>
</template>


<script>
import TodoList from '@/components/TodoList.vue';
import AddTodo from '@/components/AddTodo.vue'
  export default {
    name: 'App',
    components: {
      TodoList, AddTodo
    },
    data() {
      return {
        todos: []
      }
    },
    mounted() {
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(response => response.json())
        .then(json => {
          this.todos = json
        })
    },  
    methods: {
      removeTodo(id) {
        this.todos = this.todos.filter(t => t.id !== id);
      },
      addTodo(todo) {
        this.todos.push(todo)
      }
    }
  }
</script>