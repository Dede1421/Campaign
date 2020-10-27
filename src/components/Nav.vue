<template>
  <nav class="nav">
    <ul>
      <li>
        <router-link to="/candidatos">Candidatos</router-link>
      </li>
      <li>
        <router-link to="/equipo">Equipo</router-link>
      </li>
      <li>
        <router-link to="/plan">Plan</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style lang="scss" scoped>
.nav {
  ul {
    display: flex;

    li {
      margin-left: 20px;
    }
  }
  a {
    font-size: 1.2rem;
    font-weight: bold;
    text-decoration: none;
  }
}

@media (max-width: 750px) {
  .nav {
    a {
      font-size: 1rem;
    }
  }
}

@media (max-width: 450px) {
  .nav {
    a {
      font-size: 14px;
    }
  }
}
</style>