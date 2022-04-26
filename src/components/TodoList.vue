<template>
  <div class="container-fluid" id="app">
    <div class="card bg-dark">
      <div class="card-body">
        <h1
          :style="{
            color: inputValue.length < 1 ? '#797c80' : 'white',
          }"
        >
          {{ tittle }}
        </h1>

        <div class="input-group mb-3">
          <button
            class="btn btn-outline-light"
            type="button"
            id="button-addon1"
            v-on:click="addNewNote"
          >
            добавить заметку
          </button>
          <input
            type="text"
            class="form-control"
            v-model="inputValue"
            :placeholder="MyPlaceholder"
            @keypress.enter="addNewNote"
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />
        </div>

        <!--кнопка 'добавить'-->

        <hr class="bg-light" />
        <!--линия-->

        <ul v-if="notes.length !== 0"></ul>
        <div v-else class="text-muted">Заметок пока нет. Добавтье первую</div>
        <!--IF-->

        <ul class="list-group">
          <li v-for="(note, index) in notes" :key="index">
            <span class="text-light">Заметка {{ index + 1 }}: {{ note }}</span>
            <div class="d-grid gap-2 d-md-block">
              <button
                type="button"
                class="btn btn-secondary btn-sm"
                v-on:click="addDelNote(index)"
              >
                удалить заметку
              </button>
            </div>
            <!--кнопка 'удалить'-->
          </li>
          <hr class="bg-light" />

          <li>
            <strong class="text-muted"
              >Общее количество заметок : {{ notes.length }}</strong
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tittle: "Список заметок",
      MyPlaceholder: "Введите название заметки",
      inputValue: "",
      notes: [],
    };
  },
  mounted() {
    if (localStorage.getItem("notes")) {
      //Если в метод getItem() интерфейса Storage передать ключ в качестве параметра, то метод вернёт значение, лежащее в хранилище по указанному ключу.
      try {
        this.notes = JSON.parse(localStorage.getItem("notes")); //Метод JSON.parse() разбирает строку JSON, возможно с преобразованием получаемого в процессе разбора значения.
      } catch (e) {
        localStorage.removeItem("notes"); //Если методу removeItem() интерфейса Storage передать ключ, то из хранилища будет удалён элемент с указанным ключом.
      }
    }
  },
  methods: {
    addNewNote() {
      if (this.inputValue !== "") {
        this.notes.push(this.inputValue); //добавляет массив по нажатию кнопки
        this.inputValue = ""; // пустота в plsceholder
        this.saveNotes();
      }
    },
    addDelNote(index) {
      //удаляет  элемент в массиве, если мы жмём на кнопку
      this.notes.splice(index, 1);
      this.saveNotes();
    },
    saveNotes() {
      const parsed = JSON.stringify(this.notes); //Метод JSON.stringify() преобразует значение JavaScript в строку JSON
      localStorage.setItem("notes", parsed); //Если методу setItem() интерфейса Storage передать ключ и значение, то в хранилище будет добавлено соответствующее ключу значение
    },
  },
};
</script>

<style scoped></style>
