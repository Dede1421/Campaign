<template>
  <div class="footer">
    <div class="content-footer">
      <p>&copy; Avanza Fisi 2020</p>
    </div>
    <div class="social-footer">
      <i class="fab fa-facebook fa-2x"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss">
.footer {
  display: flex;
  justify-content: space-between;
  padding: 50px 20px;
  background-color: #1b1c1d;
  align-items: center;

  p {
    color: #fff;
  }

  .fab {
    color: rgba(59, 89, 152, 1);
  }
}
</style>