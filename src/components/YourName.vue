<template>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <button
        class="btn btn-outline-secondary"
        type="button"
        id="button-addon1"
        @click="NewName()"
      >
        Нажми
      </button>
    </div>
    <input
      type="text"
      class="form-control"
      @keyup.enter="NewName"
      aria-label="Example text with button addon"
      aria-describedby="button-addon1"
      v-model="YourName"
      :placeholder="MyPlaceholder"
    />
  </div>
  <p v-if="arr.length===0">без имени</p>
  <p v-for="(arr, index) in arr" :key="index">
     <ul>
     <li> Тебя зовут: "{{ arr }}" - классное имя<button 
    type="button"
    class="btn btn-secondary"
    @click="DelName(index)"
    >удалить</button></li>
     </ul> </p>

</template>

<script>
export default {
  data() {
    return {
      arr: [],
      YourName:"",
      MyPlaceholder: "Введи свою имя",
    };
  },
  methods: {
    NewName() {
        if(this.YourName!=0)
      this.arr.unshift(this.YourName);
      this.YourName = "";
    },
    DelName(index){
        this.arr.splice(index , 1)
    }
  },
};
</script>
