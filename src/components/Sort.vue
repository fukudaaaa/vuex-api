<template>
  <div>
    <p>sort by priority:</p>
    <form>
      <select v-model="sort" @change="sortOn(sort)">
        <option></option>
        <option>High</option>
        <option>Low</option>
    </select>
    </form>
     <img src="../asset/p.png">
  </div>
</template>

<script>
export default {
  data() {
    return {
      sort:""
    }
  },
  methods:{
    sortOn(priority) {
      this.$store.commit("changeFilter",{filter:priority})
    }
  }
}
</script>

<style scoped>
  div {
    width:700px;
    margin:  10px auto;
    color: #898c91;
  }

  img {
    margin-left:100px;
    width: 130px;
    height:50px;
  }

  p, form, img{
    display: inline-block;
  }
  option {
  color: #898c91;
  background-color: rgb(255, 254, 254);
  border-radius: 10px;
  border: solid 3px #eeeeee;
  }
  select,option {
    color: #898c91;
  }
  select:focus {
    outline:none;
  }

  
</style>


