<template>
  <header :class="[isHome ? 'headerFloat' : 'headerBorder']">
    <div class="header">
      <router-link to="/" class="link"
        ><img class="img-title" :src="imageURL" alt="Logo" /><span
          class="logo-name"
          v-bind:class="[isHome ? 'logoNameBlanco' : '']"
          >Avanza FISI</span
        ></router-link
      >
      <Nav />
    </div>
  </header>
</template>

<script>
import Nav from "@/components/Nav";
export default {
  name: "Header",
  components: {
    Nav,
  },

  computed: {
    isHome() {
      return this.$route.path === "/";
    },
    imageURL() {
      return this.isHome
        ? require("./logofisiblanco.png")
        : require("./logofisi.png");
    },
  },
};
</script>

<style lang="scss" >
.link {
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-name {
  font-size: 20px;
  font-weight: bold;
  color: #1a378e;
  margin-left: 16px;
}

.logoNameBlanco {
  color: #fff;
}

.headerFloat {
  position: absolute;
  width: 100%;

  a {
    color: #fff;
  }
}

.headerBorder {
  border-bottom: 1px solid rgba(128, 128, 128, 0.8);

  a {
    color: #1a378e;
  }
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;

  img {
    width: 70px;
  }
}

@media (max-width: 750px) {
  .header {
    // padding: 20px;

    .img-title {
      width: 60px;
    }
  }
  .logo-name {
    font-size: 1rem;
    width: 50%;
  }
}

@media (max-width: 450px) {
  .logo-name {
    font-size: 14px;
  }
}
</style>