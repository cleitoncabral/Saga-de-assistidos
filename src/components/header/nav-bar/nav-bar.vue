<template>
  <section class="menu">
    <ul>
      <li>
        <router-link to="/BuscarConteudo">
          <a>Buscar conteúdo</a>
        </router-link>
      </li>
      
      <li>
        <router-link  to="/conteudoAssistido">
          <a>Conteúdos assistidos</a>
        </router-link>
      </li>
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
    font-family: 'Bree Serif', 'serif';
    color: white;
    text-decoration: none;
}
</style>