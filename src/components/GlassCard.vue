<template>
    <div class="glass-card">
        <div class="content">
            <h1>CardGlass</h1>
            <!-- Adicione mais conteúdo aqui -->
        </div>
    </div>
</template>

<style lang="scss">
.glass-card {
    // background: rgba(255, 255, 255, 0.35);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4.5px);
    -webkit-backdrop-filter: blur(4.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
}

.content {
    position: relative;
    z-index: 1;
    color: white;
    /* Ajuste a cor do texto conforme necessário */
}
</style>

<script>
export default {

}
</script>
