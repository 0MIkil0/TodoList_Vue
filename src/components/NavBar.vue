<template>
 <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">navigation</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"
                ><router-link class="link-secondary" to="/List">Список заметок</router-link></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><router-link class="link-secondary" to="/Animals">животные</router-link></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <router-link class="link-secondary" to="/Calc">счётчик</router-link></a
              >
            </li>
             <li class="nav-item">
              <a class="nav-link" href="#"
                ><router-link class="link-secondary" to="/Animation">Анимации</router-link></a
              >
             </li>
              <li class="nav-item">
              <a class="nav-link" href="#"
                ><router-link class="link-secondary" to="/Name">Your name</router-link></a
              >
             </li>
                  <li class="nav-item">
              <a class="nav-link" href="#"
                ><router-link class="link-secondary" to="/Dom">Dom</router-link></a
              >
             </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    
}
</script>