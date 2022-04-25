<template>
    <div class="card shadow">
        <div class="card-header">
            <p class="card-title"></p>
            <img src="" alt="picture of car">
        </div>
        <div class="card-body">
        <div id="left">
            <p>make</p>
            <p>model</p>
            <p>colour</p>
        </div>
        <div id="right">
            <p>year</p>
            <p>Type</p>
            <p>Transmission</p>
        </div>
        <p>Description</p>
        <p>price</p>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        methods: {
            getCar() {
                fetch('')
            }
        }
    }
</script>