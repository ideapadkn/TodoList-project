<template>
  <form @submit.prevent="onSubmit">
    <input v-model="title" type="text" placeholder="add todolist">
    <button class="btn">Add</button>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        title: '',
      }
    },  
    methods: {
      onSubmit() {
        if (this.title.trim()) {
          const newTodo = {
            id: Date.now(),
            title: this.title,
            completed: false
          }
          this.$emit('add-todo', newTodo)
          this.title = ''; 
        }  
      }
    }
  }
</script>

<style scoped>
form {
  display: flex;
  justify-content: center;
}
input {
  width: 400px;
  padding: 10px 15px;
  border-radius: 12px;
  outline: none;
  border: 1px solid #999;
}
input:focus {
  outline: none;
  box-shadow: 0px 0px 30px 5px rgba(60, 169, 255, 0.21);
}
.btn {
  margin-left: 2rem;
  padding: 10px 15px;
  background-color: #fff;
  border: 1px solid #ccc;
  cursor: pointer;
  border-radius: 12px;
}
.btn:hover {
  box-shadow: 0px 0px 30px 5px rgba(60, 169, 255, 0.21);
}
</style>