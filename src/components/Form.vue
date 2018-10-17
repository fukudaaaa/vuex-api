<template>
  <div>
    <div class="form-container">
      <form>
        <input type="text" v-model="text">
        <button @click.prevent="addTask" >add TODO</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text:""
    }
  },
  methods:{
    addTask() {
      if(this.text === ""){
        return
      }

      this.$store.commit("addTask",this.text)
      this.text=""
    }
  }
}
</script>

<style scoped>

form {
  display: inline-block;
}
  input {
    color:#756e6e;
    border-radius: 5px;
  }
  
  button {
    border: solid 3px #eeeeee;
    border-radius: 10px;
    color:#756e6e;
    background-color: white;
  }
  button:focus {
    outline:none;
  }
  button:hover {
  cursor: pointer;
  background-color:#cfd4db;
}
  input,button:focus {
  outline: 0;
}
</style>

