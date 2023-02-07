<template>
  <div>
    <h2 class="title">Todo page</h2>
    <router-link class="link" style="color: #fff;" to="/">Home</router-link>
    <hr>
    <add-todo 
      @add-todo="addTodo"
    />
    <select v-model="filter" class="select">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not Completed</option>
    </select>
    <hr>
    <loader 
      v-if="loading"
    />
    <todo-list
      v-else-if="filteredTodos.length"
      :todos="filteredTodos"
      @remove-todo="removeTodo"
    />
    <p class="text" v-else>Empty!!!</p>
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
        filter: 'all',
      }
    },
    mounted() {
      setTimeout( () => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
        .then(response => response.json())
        .then(json => {
          this.todos = json
          this.loading = false;
        })
      }, 500)
    },  
    // watch: {
    //   filter(value) {
    //     console.log(value);
    //   }
    // },  
    computed: {
      filteredTodos() {
        if(this.filter === 'all') {
          return this.todos
        }
        if(this.filter === 'computed') {
          return this.todos.filter(t => t.completed)
        }
        if(this.filter === 'not-computed') {
          return this.todos.filter(t => !t.completed)
        }
      }
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