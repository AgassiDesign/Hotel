<template>
    <nav class="pagination" role="navigation" v-if="pagination.totalPages > 1">
             
        <div class="nav-links"  v-for="p in totalPagesPagination" :key="p">
            <span @click="setPage(p)" class="page-numbers" v-if='p !== currentPage'>{{ p }}</span>
            <span class="page-numbers current" v-else>{{ p }}</span>
        </div>
        <!-- .nav-links -->
    </nav>
    <!-- .pagination -->
</template>

<script>
export default {
    name: 'Pagination',
    data() {
        return {
            current_page: 1,
            max_pagination_number: 6,
        };
    },
    props: {
        currentPage: {
            type: Number,
            required: true,
        },
        pagination: {
            type: Object,
            required: true,
        },
    },
    computed: {
        totalPagesPagination: function () {
            if(this.pagination.totalPages > 6) {
                return 6;
            }
            return this.pagination.totalPages
        }
    },
    methods: {
            setPage(page) {
                this.$emit('changePage', page);
            }
        }
};
</script>
