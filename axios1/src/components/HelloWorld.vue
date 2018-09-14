<template>
  <div class="hello">
    
    <h2>Essential Links</h2>
    
    <h2>Ecosystem</h2>
    
  </div>
</template>

<script>
export default {
  name: "Hello",
  created() {
    this.$http
      .get(
        "https://easy-mock.com/mock/5b6173457b15677bbe18a279/example/test-axios"
      )
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
