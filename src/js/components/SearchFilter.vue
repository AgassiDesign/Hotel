<template>
        <aside class="search-result-filter">
            <span class="result-filter-close"
                ><i class="far fa-window-close"></i
            ></span>
            <div class="filter-container" v-for="filter in postsFilters" :key="filter.id">
                <h5 class="filter-title">{{ filter.name }}</h5>
                <div class="filter-grid">
                    <div v-for="term in filter.data" :key="term.term_id"
                     :class="{ 'display-col' : term.name.length > 10}">
                    <label 
                    class="form-check-label"
                    ><input
                    @change="onChange(term.term_id, term.taxonomy, $event)"
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        /> {{ term.name }}</label
                    >
                    </div>
                </div>
                <!-- .filter-grid -->
            </div>
            <!-- .filter-container -->
        </aside>
        <!-- .search-result-filter -->
</template>

<script>

export default {
    name: 'SearchFilter',
    data() {
        return {
            selectedFilter: {},
        }
    },
    props: {
        postsFilters: {
            type: Array,
            required: true,
        },
        updatePostsFilters: {
            type: Function,
            required: true,
        }
    },
    methods: { 
        onChange(id, tax_id, $event) {
            
            if (!this.selectedFilter[tax_id])
                this.selectedFilter[tax_id] = [];
            const index = this.selectedFilter[tax_id].findIndex(v => v == id) ;
            const checked = $event.target.checked;
            if (checked && index < 0)
                this.selectedFilter[tax_id].push(id);
            if (!checked && index >= 0)
                this.selectedFilter[tax_id].splice(index, 1);
            this.updatePostsFilters(this.selectedFilter);
        },
    }
};
</script>