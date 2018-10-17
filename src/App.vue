<template>
  <div>
    <app-form></app-form>
    <app-sort></app-sort>
    <app-list></app-list>
  </div>
</template>

<script>
  import Form from "./components/Form.vue"
  import List from "./components/List.vue"
  import Sort from "./components/Sort.vue"

export default {
  components: {
   "appForm":Form,
   "appList":List,
   "appSort":Sort
  }
}
</script>

<style scoped>
  div {
    text-align: center;
    margin-top:10px;
  }

</style>
