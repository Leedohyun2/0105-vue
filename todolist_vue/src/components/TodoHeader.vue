<template>
    <header>
        <h1>TODO it</h1>
    </header>
</template>

<script>
var TodoHeader = {
    template: '<div>header</div>'
}

export default {
    components: {
        'TodoHeader': TodoHeader
    }
}
</script>

<style scoped>
h1 {
    color: #2F3B52;
    font-weight: 900;

}
</style>