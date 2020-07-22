<template>
  <div class="container">
    <h1 class="text-center pt-3">Todo App in vue js!</h1>
      <form>
        <div class="form-group">
          <label for="newTodo">New Todo...</label>
          <input v-model="newTodo" type="text" class="form-control" id="newTodo"
           placeholder="Enter a todo...">
        </div>
        <h3>{{newTodo}}</h3>
        <button @click.prevent = "getData()" type="submit" class="btn btn-primary">Add</button>
      </form>
      <!-- all done button! rendered only if the length of todos is !== 0-->
      <button class="mt-3 btn btn-primary" @click="allDone()"
        :class="{showBtn : !this.todos.length}">
        All Done
       </button>
      <!-- adding the todos from the list! -->
      <ul class="list-group list-group mt-3 col-8  container text-center">
        <li class="list-group-item" v-for="(todo,i) in todos" :key="todo.todoItem">
          <span class="mr-1" :class="{ active : todo.status}">{{todo.todoItem}}</span>
          <button type="button" @click="todoDone(i)" class="btn btn-outline-success mr-1">
            {{done}}
          </button>
          <button type="button" @click="deleteTodo(i)" class="btn btn-outline-warning mr-1">
            Delete
          </button>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      newTodo: '',
      done: 'Done',
      todos: [],
    };
  },
  methods: {
    getData() {
      if (this.newTodo) {
        this.todos.push(
          {
            todoItem: this.newTodo,
            status: false,
          },
        );
      }
      this.newTodo = '';
    },
    todoDone(index) {
      // this.todos[index].status = true;
      if (this.todos[index].status === true) {
        this.todos[index].status = false;
        this.done = 'Done';
      } else {
        this.todos[index].status = true;
        this.done = 'Undone';
      }
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
    allDone() {
      this.todos.forEach((todo, i) => {
        if (this.todos[i].status === false) {
          this.todoDone(i);
        }
        this.todos[i].status = true;
      });
    },
  },
};

</script>

<style scoped>
  span{
    font-size:1.5rem;
    text-transform: capitalize;
  }
  .active{
    text-decoration: line-through;
  }
  .showBtn{
    display:none;
  }
</style>>
