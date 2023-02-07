<template>
  <div>
    <h2>Todo page</h2>
    <router-link to="/">Home</router-link>
    <hr>
    <add-todo 
      @add-todo="addTodo"
    />
    <hr>
    <loader 
      v-if="loading"
    />
    <todo-list
      v-else-if="todos.length > 0"
      :todos="todos"
      @remove-todo="removeTodo"
    />
    <p v-else>Empty!!!</p>
  </div>
</template>


<script>
import TodoList from '@/components/TodoList.vue'
import AddTodo from '@/components/AddTodo.vue'
import Loader from '@/components/Loader.vue'
  export default {
    name: 'App',
    components: {
      TodoList, AddTodo, Loader
    },
    data() {
      return {
        todos: [],
        loading: true,
      }
    },
    mounted() {
      setTimeout( () => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(response => response.json())
        .then(json => {
          this.todos = json
          this.loading = false;
        })
      }, 2500)
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


<style scoped>

</style>