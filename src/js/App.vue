<template>
    <div id="app">
        <section class="site-search">
            <div class="container">
                <search-form :onSumbitForm="onSumbitForm"></search-form>
            </div>
            <!-- .container -->
        </section>
        <!-- .site-search -->
        <section class="site-search-result">
            <div class="container">
                <search-header
                    :onSortPosts="onSortPosts"
                    :onPostPerPage="onPostPerPage"
                    :headers="pagination"
                ></search-header>
                <div class="search-result-content">
                    <div>
                        <articles :posts="posts"></articles>
                        <!-- .article-card -->
                        <pagination
                            @changePage="onChangePage"
                            :pagination="pagination"
                            :currentPage="currentPage"
                        ></pagination>
                        <!-- .pagination -->
                    </div>
                    <search-filter
                        :updatePostsFilters="updatePostsFilters"
                        :postsFilters="postsFilters"
                    ></search-filter>
                    <!-- .search-result-filter -->
                </div>
                <!-- .search-result-content -->
            </div>
            <!-- .container -->
        </section>
        <!-- .site-search-result -->
    </div>
</template>

<script>
import SearchForm from './components/SearchForm.vue';
import SearchHeader from './components/SearchHeader.vue';
import SearchFilter from './components/SearchFilter.vue';
import Pagination from './components/Pagination.vue';
import Articles from './components/Articles.vue';
import qs from 'qs';

export default {
    name: 'App',
    components: {
        SearchForm,
        SearchHeader,
        Pagination,
        SearchFilter,
        Articles,
    },
    data() {
        return {
            postsData: {
                per_page: 5,
                orderby: 'date',
                page: 1,
                _embed: true,
            },
            currentPage: 1,
            formParams: {},
            posts: [],
            postsFilters: [],
            selectedFilterList: {},
            pagination: {
                prevPage: '',
                nextPage: '',
                currentPage: 1,
                totalPages: '',
                from: '',
                to: '',
                total: '',
            },
            sortList: ['date', 'price', 'float_count'],
        };
    },
    computed: {},
    watch: {},
    methods: {
        updatePostsFilters(list) {
            this.selectedFilterList = {};
            for (var key in list) {
                Array.prototype.map.call(list[key], (e) => {
                    if (!this.selectedFilterList[key]) {
                        this.selectedFilterList[key] = e + ',';
                    } else {
                        this.selectedFilterList[key] =
                            this.selectedFilterList[key] + e + ',';
                    }
                });
            }

            this.updateCurrentPage(1);
            this.updatePosts({ ...this.selectedFilterList, ...{ page: 1 } });
        },
        updateCurrentPage(page) {
            this.postsData.page = this.currentPage = this.pagination.currentPage = page;
        },
        onSumbitForm(data) {
            this.formParams = data;
            this.updatePosts(data);
        },
        updatePosts(params) {
            let postsData = this.postsData;
            if (this.selectedFilterList) {
                postsData = { ...postsData, ...this.selectedFilterList };
            }
            if (this.formParams) {
                postsData = { ...postsData, ...this.formParams };
            }
            postsData = { ...postsData, ...params };
            this.fetchPosts(postsData);
        },
        onSortPosts(value) {
            let postsData = { order: value.order, orderby: value.orderby };
            this.updatePosts(postsData);
        },

        onPostPerPage(per_page) {
            this.postsData.per_page = per_page;
            this.updateCurrentPage(1);
            this.updatePosts();
        },
        fetchPosts(postData = {}) {
            this.axios
                .get('wp/v2/property/', {
                    params: postData,
                    paramsSerializer: (params) => {
                        return qs.stringify(params);
                    },
                })
                .then((res) => {
                    this.posts = res.data;
                    this.updatePagination(res.headers);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        fetchPostsFilterData() {
            this.axios
                .get('hotel/v1/properties/all-terms')
                .then((res) => {
                    this.postsFilters = res.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        updatePagination(headers) {
            {
                this.pagination.total = +headers['x-wp-total'];
                this.pagination.totalPages = +headers['x-wp-totalpages'];
                this.pagination.from = this.pagination.total
                    ? (this.postsData.page - 1) * this.postsData.per_page + 1
                    : ' ';
                this.pagination.to =
                    this.postsData.page * this.postsData.per_page >
                    this.pagination.total
                        ? this.pagination.total
                        : this.postsData.page * this.postsData.per_page;
                this.pagination.prevPage =
                    this.postsData.page > 1 ? this.postsData.page : '';
                this.pagination.nextPage =
                    this.postsData.page < this.pagination.totalPages
                        ? this.postsData.page + 1
                        : '';
            }
        },
        onChangePage(page) {
            this.updateCurrentPage(page);
            this.updatePosts({ page: page });
        },
    },
    async mounted() {
        this.fetchPosts(this.postsData);
        this.fetchPostsFilterData();
    },
};
</script>
