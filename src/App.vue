
<template>
  <div id="app">

    <router-view/> 

  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="scss">

  #app{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
   margin-top: 60px; 
  }
  body{
    direction: ltr;
    background: url('./assets/styles/back.jpg');
    background-size: cover;
    &:after {
      content: '';
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: #2c3e50;
      opacity: .3;
      z-index: -1;
    }
  }

</style>