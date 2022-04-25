<template>
    <p class="h1">Add a new Vehicle</p>
    <div id="container" class="container-fluid">
        <form @submit.prevent="formhandler" id="form">
            
            <label for="make">Make</label>
            <input type="text" name="make" class="form-control" required>
            
            <label for="model">Model</label>
            <input type="text" name="model" class="form-control" required>

            <label for="colour">Colour</label>
            <input type="text" name="colour" class="form-control" required>

            <label for="year">Year</label>
            <input type="text" name="year" class="form-control">

            <label for="price">Price</label>
            <input type="number" name="price" min="0.00" step="0.01" class="form-control">

            <label for="Car Type">Type</label>
            <select name="Car Typee" class="form-control" required >
                <option value="Sedan">Sedan</option>
                <option value="Coupe">Coupe</option>
                <option value="Sports Car">Sports Car</option>
                <option value="Station Wagon">Station Wagon</option>
                <option value="Hatchback">Hatchback</option>
                <option value="Convertible">Convertible</option>
                <option value="SUV">SUV</option>
                <option value="Minivan">Minivan</option>
                <option value="Pickup Truck">Pickup Truck</option>
                <option value="Electric">Electric</option>
            </select>

            <label for="Transmission">Transmission</label>
            <select name="Transmission" class="form-control" required>
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
            </select>

            <label for="Description">Description</label>
            <textarea name="Description" class="form-control" cols="30" rows="5"></textarea>

            <label for="Photo">Photo</label>
            <input type="file" name="Photo" class="form-control" required>

            <input type="submit" class="btn btn-primary">
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                csrf_token: ''
            }
        },
        methods: {
            formhandler() {
                let form_data = new FormData(document.getElementById('form'));
                fetch('/api/cars', {
                    method: 'POST',
                    body: form_data,
                    headers: {
                        
                    }
                })
            }
        }
    }

</script>

<style>
    #container {
        max-width: 50%;
    }

    label {
        margin-top: 1pc;
    }

    .btn {
        margin-top: 1.5pc;
    }
</style>