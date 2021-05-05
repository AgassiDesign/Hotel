<template>
    <header class="search-result-header">
        <div>
            <h1 class="entry-title">{{ title }}</h1>
            <div class="search-result-panel">
                <div class="result-panel-attr">
                    <select
                        @change="onPostPerPage($event.target.value)"
                        name="show-count"
                        class="form-select show-count"
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                    </select>
                    <span class="result-panel-showing__info"
                        >Showing {{ headers.from }}-{{ headers.to }} of
                        {{ headers.total }}</span
                    >
                </div>
                <!-- .site-main -->
                <div class="result-panel-attr">
                    <select
                        @change="onSortPosts(sortList[$event.target.value])"
                        name="result-sorting"
                        class="form-select result-sorting"
                    >
                        <option :value="index"  
                        v-for="(list, index) in sortList" 
                        :key="list.name" v-html="list.name"></option>
                    </select>
                    <span
                        class="icon-box rounded-start search-result-grid active"
                        ><i class="fas fa-th-large"></i></span
                    ><span class="rounded-end icon-box search-result-list"
                        ><i class="fas fa-list"></i
                    ></span>
                    <span class="icon-box search-toggle-menu" href="#"
                        ><i class="fas fa-filter"></i
                    ></span>
                </div>
                <!-- .result-panel-sorting -->
            </div>
            <!-- .search-result-panel -->
        </div>
    </header>
    <!-- .search-result-header -->
</template>

<script>
export default {
    name: 'SearchHeader',
    data() {
        return {
             sortList: [
                {
                    name: 'High Date',
                    orderby: 'date',
                    order: 'desc'
                },
                {
                    name: 'Low Date',
                    orderby: 'date',
                    order: 'asc'
                },
                {
                    name: 'High Price',
                    orderby: 'price',
                    order: 'desc'
                },
                {
                    name: 'Low Price',
                    orderby: 'price',
                    order: 'asc'
                },
            ],
        };
    },
    props: {
        onSortPosts: {
            type: Function,
            required: true,
        },
        headers: {
            type: Object,
            required: true,
        },
        onPostPerPage: {
            type: Function,
            required: true,
        },
    },

    computed: {
        title: function () {
            return window.page_title;
        }
    },
};
</script>
