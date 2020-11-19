<template>
  <section class="menu">
    <ul>
      <li> <a href="#">Buscar conteúdo</a></li>
      <li > <a href="#">Conteúdos assistidos</a></li>
    </ul>
  </section>
</template>

<script>
export default {};
</script>

<style>
.menu {
    background-color: #319943;
}
.menu ul{
    display: flex;
    justify-content: center;
}
.menu li{
    display: inline;
    padding: 10px;
}
.menu li :hover{
    padding: 10px;
    background-color: #3cbd51 ;
}
.menu li a{
    color: black;
    text-decoration: none;
}
</style>