<template>
 <div class="container-fluid" id="app">
    <div class="card bg-dark">
      <div class="card-body">
    <div class="d-grid gap-2">
      <input type="number" :placeholder="MyPlaceholder" v-model="inputValue" />
      <button class="btn btn-secondary me-md-2" @click="counter = counter + inputValue">прибавить</button>
      <button class="btn btn-secondary me-md-2" @click="counter = counter - inputValue">вычесть</button>
      </div>  
         <div class="d-grid gap-2 col-6 mx-auto">
      <h1 class="text-light">счётчик : {{ counter }}</h1>
 
      <button class="btn btn-secondary" @click="counter++">+1</button>
      <button class="btn btn-secondary" @click="counter--">-1</button>
      <button class="btn btn-secondary" @click="counter = counter - counter">обнулить</button>
      </div>
    </div>
  </div>
 </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      MyPlaceholder: "введи число",
    };
  },
}
</script>
<style>

</style>