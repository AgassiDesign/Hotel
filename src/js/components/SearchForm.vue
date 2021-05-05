<template>
<form v-on:submit="submitForm">
    <div class="search-form">
        <div class="search-form-item">
            <label class="label search-label">Where</label>
            <input
                v-model="location"
                class="input input__search-large"
                type="text"
                name="targetWhere"
                placeholder="Anywhere"
            />
        </div> 
        <!-- .search-form-item -->
        <div class="search-form-item">
            <label class="label search-label">Check-In</label>
            <input
                v-model="date_in"
                class="input input__search-large"
                type="date"
                name="targetCeckIn"
                placeholder="dd-mm-yyyy"
                
            />
        </div>
        <!-- .search-form-item -->
        <div class="search-form-item">
            <label class="label search-label">Check-Out</label>
            <input
                v-model="date_out"
                class="input input__search-large"
                type="date"
                pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}"
                name="targetCeckOut"
                placeholder="dd-mm-yyyy"
                
            />
        </div>
        <!-- .search-form-item -->
        <div class="search-form-item">
            <button type="submit" class="btn btn-primary btn-search"> Search </button>
        </div>
        <!-- .search-form-item -->
    </div>
    </form>
    <!-- .search-form -->
</template>

<script>
export default {
    name: 'SearchForm',
     props: {
        onSumbitForm: {
            type: Function,
            required: true,
        },
    },
    data: function(){
        return {
            location: "",
            date_in: "",
            date_out: "",
        }
    },
     methods: {
        submitForm(e){
            e.preventDefault();
            this.onSumbitForm(
                {
                    'location': this.location,
                    'date_in':  this.date_in, 
                    'date_out': this.date_out
                }
            );
        }
    },
};
</script>
