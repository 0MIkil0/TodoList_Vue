const App = {
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
Vue.createApp(App).mount('#app')