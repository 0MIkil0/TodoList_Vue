<template>
  <div class="container-fluid" id="app">
    <div class="card bg-dark">
      <div class="card-body">
        <input
          type="text"
          :placeholder="MyPlaceholder"
          v-model="arr"
          @keypress.enter="AddNewAnimalTop"
        />
        <p></p>
        <div class="d-grid gap-2">
          <button
            type="button"
            class="btn btn-secondary"
            @click="AddNewAnimalTop"
          >
            в начало
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            @click="AddNewAnimalBot"
          >
            в конец
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            @click="addDelAllAnimals(index)"
          >
            удалить всех
          </button>
        </div>

        <hr class="bg-light" />
        <li class="list-item" v-for="(animals, index) in animals" :key="index">
          <span class="text-light">
            {{ animals }}
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                class="btn btn-secondary me-md-2"
                @click="addDelAnimal(index)"
              >
                удалить
              </button>
            </div></span
          >
        </li>
        <hr class="bg-light" />
        <div class="text-light">Животных : {{ animals.length }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      animals: ["Слон", "Волк", "Жираф", "Лось"],
      arr: "",
      MyPlaceholder: "введи животное",
    };
  },
  mounted() {
    if (localStorage.getItem("animals")) {
      //Если в метод getItem() интерфейса Storage передать ключ в качестве параметра, то метод вернёт значение, лежащее в хранилище по указанному ключу.
      try {
        this.animals = JSON.parse(localStorage.getItem("animals")); //Метод JSON.parse() разбирает строку JSON, возможно с преобразованием получаемого в процессе разбора значения.
      } catch (e) {
        localStorage.removeItem("animals"); //Если методу removeItem() интерфейса Storage передать ключ, то из хранилища будет удалён элемент с указанным ключом.
      }
    }
  },
  methods: {
    AddNewAnimalTop() {
      if (this.arr != "") this.animals.unshift(this.arr);
      else {
        this.MyPlaceholder = "Не правильно! Буквы вводи!";
      }
      this.arr = "";
      this.saveAnim();
    },

    AddNewAnimalBot() {
      if (this.arr != "") this.animals.push(this.arr);
      else {
        this.MyPlaceholder = "Не правильно! Буквы вводи!";
      }
      this.arr = "";
      this.saveAnim();
    },
    addDelAnimal(index) {
      //удаляет последний элемент в массиве, если мы жмём на кнопку
      this.animals.splice(index, 1);
      this.saveAnim();
    },
    addDelAllAnimals(index) {
      //удаляет последний элемент в массиве, если мы жмём на кнопку
      this.animals.splice(index);
      this.saveAnim();
    },
    saveAnim() {
      const parsed = JSON.stringify(this.animals); //Метод JSON.stringify() преобразует значение JavaScript в строку JSON
      localStorage.setItem("animals", parsed); //Если методу setItem() интерфейса Storage передать ключ и значение, то в хранилище будет добавлено соответствующее ключу значение
    },
  },
};
</script>

<style scoped>
span {
  font-size: 20px;
}
</style>
