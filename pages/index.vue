<template>
  <a-layout>
    <a-layout-content>
      <div class="ley-well well-sm bg-light-peach text-white">
        <a-icon type="read" />
        <span class="ispan">博客文章列表</span>
      </div>

      <div class="ley-blackboard margin-top margin-bottom">
        <div class="title">文章列表</div>
        <a-list itemLayout="vertical" :dataSource="blogListData" :pagination="pagination" :loading="{spinning: blogListLoading,tip: '加载中...'}">
          <a-list-item slot="renderItem" slot-scope="item, index">
            <a-list-item-meta>
              <a slot="title" class="text-bold" @click="doDetailed(item.number)">{{ item.number + '. ' + item.title}}</a>
              <template slot="description">
                <span>
                  <a-icon type="calendar" style="margin-right: 8px" />{{item.created_at | formatDate('yyyy-MM-dd')}}
                </span>
                <a-divider type="vertical" />
                <span>
                  <a-icon type="form" style="margin-right: 8px" />{{item.comments}}
                </span>
                <a-divider type="vertical" />
                <span v-for="(ite, i) in item.labels">
                  <a-tag v-bind:color="'#' + ite.color">{{ ite.name }}</a-tag>
                </span>
              </template>
            </a-list-item-meta>
          </a-list-item>
        </a-list>
      </div>

    </a-layout-content>
    <a-layout-sider width="300" breakpoint="lg" collapsedWidth="0" :trigger="null">
      <div class="ley-well bg-verdant text-white" style="width:280px; float:right;">
        <a-icon type="read" />
        <span class="ispan">博客文章分类</span>
        <div class="ley-well well-sm bg-gray margin-top">
          <a-skeleton :loading="labelListLoading" :title="false" :paragraph="{rows: 4}" active>
            <div>
              <a-tag color="#37474F" class="bolgLabel" @click="labelChange(null)" :checked="true">全部</a-tag>
              <span v-for="(item, i) in this.labelListData">
                <a-tag v-bind:color="'#' + item.color" class="bolgLabel" @click="labelChange(item.name)" :checked="true">{{ item.name }}</a-tag>
              </span>
            </div>
          </a-skeleton>
        </div>
      </div>
    </a-layout-sider>

  </a-layout>
</template>

<script>
import github from "@/assets/js/github.js";

export default {
  name: 'Index',
  layout: 'index',
  data() {
    return {
      labelName: null,
      labelListData: [],
      labelListLoading: true,
      blogListData: [],
      blogListLoading: true,
      pagination: {
        position: "bottom",
        total: 0,
        current: 1,
        pageSize: 15,
        hideOnSinglePage: true,
        onChange: page => {
          this.pagination.current = page;
          this.getBlogList();
        }
      },
    };
  },
  mounted() {
    this.getLabelList();
    this.getBlogList();
  },
  methods: {
    async getLabelList() {
      this.labelListLoading = true;
      let { data: posts, headers } = await github.issues.listLabelsForRepo({ owner: process.env.owner, repo: process.env.repo, });
      this.labelListData = posts;
      this.labelListLoading = false;
    },

    async getBlogList() {
      this.blogListLoading = true;
      let page = this.pagination.current;
      let per_page = this.pagination.pageSize;
      if (this.labelName) {
        let q = 'repo:' + process.env.owner + '/' + process.env.repo + '+is:open+label:' + this.labelName;
        let { data: posts, headers } = await github.search.issuesAndPullRequests({
          q,
          per_page,
          page,
        });
        this.blogListData = posts.items;
        this.pagination.total = this.getTotal(headers, page, per_page);
      } else {
        let { data: posts, headers } = await github.issues.listForRepo({
          client_id: process.env.githubClientId,
          client_secret: process.env.githubClientSecret,
          owner: process.env.owner,
          repo: process.env.repo,
          creator: process.env.owner,
          state: 'open',
          per_page,
          page,
          request: {
            // signal: controller.signal
          }
        });
        this.blogListData = posts;
        this.pagination.total = this.getTotal(headers, page, per_page);
      }
      this.blogListLoading = false;
    },

    async labelChange(name) {
      this.labelName = name;
      this.blogListData = [];
      this.pagination.total = 0;
      this.pagination.current = 1;
      this.getBlogList();
    },

    doDetailed: function(number) {
      this.$router.push({ path: "/detailed", query: { number: number } });
    },

    getTotal: function(headers, page, per_page) {
      if (headers.link) {
        let last = headers.link.match(/<([^>]+)>(?=;\s+rel="last")/);
        let lastPage = last ? last[1].match(/\bpage=(\d+)/)[1] : page;
        return lastPage * per_page;
      } else {
        return 0;
      }
    },
  }
}
</script>

<style scoped>
.ant-list-vertical .ant-list-item-meta {
  margin-bottom: 0;
}
::v-deep .ant-list-pagination {
  text-align: center;
}

.ant-layout-sider {
  background: transparent;
}
.bolgLabel {
  width: 90px;
  margin: 10px 10px 10px 13px;
  padding: 5px 0;
  text-align: center;
  cursor: pointer;
}
</style>
