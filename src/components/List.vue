<template>
  <div>
    <div 
    class="list-container"
    v-for="(task,index) in tasks"
    :key="index"
    >  
        <p class="task" @click="deleteTask(index)">{{task.text}}</p>
        <form class="priority">
          <input type="submit"  @click.prevent="evaluateTask(index)" value="Low" :class="{active:task.priority === 'Low'}">
          <input type="submit"  @click.prevent="evaluateTask(index)" value="High" :class="{active:task.priority === 'High'}">
        </form> 
        
    </div>  
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLow:false,
      isHigh:false
    }
  },
  computed: {
    tasks() {
      return this.$store.getters.filteredTask
    }

  },
  methods: {
    deleteTask(index) {
       this.$store.commit("deleteTask",index)
    },
    evaluateTask(index) {
      const value = event.target.value
      this.$store.commit("evaluateTask",{index,value})
    }
  }
}
</script>

<style scoped>
 div {
   margin: 0 auto 0;
   width:auto;
 }
 .list-container {
    padding: auto auto;
    margin:0 auto 15px 0;
    color: #898c91;
}
p, div.priority, form {
  display: inline-block;
}

div.priority {
  width: 150px;
}

.task {
  width:250px;
  margin:auto auto;
  border: solid 3px #eeeeee;
  border-radius: 10px;
}

.task:hover{
  cursor: pointer;
  background-color:#cfd4db;
}
input:hover {
  cursor: pointer;
  background-color:#dfe2e6;
}
input {
  margin-right:5px;
  color: #898c91;
  background-color: rgb(255, 254, 254);
  border-radius: 10px;
  border: solid 3px #eeeeee;
}
input:focus {
  outline:none;
}
.active {
  background-color:#dfe2e6;
}
</style>

