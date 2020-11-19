<template>
    <section class="header">
        <div class="logo">
            <h2> Saga Assistidos</h2>
        </div>

        <div>
            <NavBar />
        </div>
    
    </section>
</template>

<script>
import NavBar from './nav-bar/nav-bar.vue'
export default {
    components:{
        NavBar
    }

}
</script>

<style>

.logo{
    display: flex;
    padding-left: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: #408545;
    font-family: 'VT323', monospace;
    justify-content: center;
}
.logo h2{
    text-transform: uppercase;
    letter-spacing: 2px;
    size: 20px;
    color: white;
}
</style>