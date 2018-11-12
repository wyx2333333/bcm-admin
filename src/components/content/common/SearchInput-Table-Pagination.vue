<template>
  <div>
    <div class="search-wrap">
      <el-input v-model="searchParam.searchContent"
                suffix-icon="el-icon-search"
                placeholder="请输入搜索内容"
                size="small"
                clearable>
        <el-select v-model="searchParam.searchLabel"
                   slot="prepend"
                   placeholder="请选择"
                   @change="searchParam.searchContent = ''">
          <el-option v-for="option in searchParam.searchOptions"
                     :key="option.value"
                     :label="option.label"
                     :value="option.value"></el-option>
        </el-select>
      </el-input>
    </div>
    <el-table :ref="tableParam.refName"
              :data="tableParam.table_data.slice((paginationParam.currentPage - 1) * paginationParam.pageSize, paginationParam.currentPage * paginationParam.pageSize)"
              tooltip-effect="dark"
              style="width: 100%"
              header-cell-class-name="header-cell"
              :row-class-name="tableRowClassName"
              :row-key="getRowKey"
              @selection-change="handleSelectionChange">
      <slot name="columnPrepend"></slot>
      <el-table-column v-for="col in tableParam.cols"
                       :type="col.type"
                       :width="col.width"
                       :key="col.propName"
                       :prop="col.propName"
                       :label="col.labelName"
                       :sortable="col.sortable"
                       :reserve-selection="col.reserve"
                       align="center">
      </el-table-column>
      <slot name="columnAppend"></slot>
      <el-table-column label="操作"
                       :width="tableParam.operationCloWidth"
                       align="center">
        <template slot-scope="scope">
          <el-button v-for="btn in tableParam.operateBtns"
                     :class="btn.class ? btn.class : 'table-btn'"
                     :type="btn.type"
                     :key="btn.operate"
                     :icon="btn.icon"
                     :title="btn.name"
                     size="mini"
                     circle
                     @click.native.prevent="btnOperate(btn.operate, scope.$index, scope.row)">
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination @size-change="handleSizeChange"
                   @current-change="handleCurrentChange"
                   :current-page="paginationParam.currentPage"
                   :page-sizes="paginationParam.pageSizes"
                   :page-size="paginationParam.pageSize"
                   layout="total, sizes, prev, pager, next, jumper"
                   :total="total()">
    </el-pagination>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    searchParam: Object,
    tableParam: Object,
    paginationParam: Object
  },
  data() {
    return {
      getRowKey(row) {
        return row.id
      },
      total() {
        if (this.tableParam.table_data_copy) {
          return this.tableParam.table_data_copy.length
        } else {
          return 0
        }
      }
    }
  },
  watch: {
    'searchParam.searchContent': function(val, oldVal) {
      this.tableParam.table_data = this.tableParam.table_data_copy.filter(
        item =>
          ~item[this.searchParam.searchLabel]
            .toLowerCase()
            .indexOf(this.searchParam.searchContent.toLowerCase())
      )
      this.paginationParam.currentPage = 1
      this.paginationParam.pageSize = 5
    }
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      this.$emit('tableRowClassName', { row, rowIndex })
    },
    /* 勾选checkbox */
    handleSelectionChange: function(rows) {
      this.tableParam.multipleSelection = rows
    },
    btnOperate(operatBtn, index, row) {
      this.$emit('btnOperate', operatBtn, index, row)
    },
    handleSizeChange(val) {
      this.paginationParam.pageSize = val
      this.paginationParam.currentPage = 1
    },
    handleCurrentChange(val) {
      this.paginationParam.currentPage = val
    }
  }
}
</script>
<style  lang="scss">
.search-wrap {
  margin: 0 20px 20px;
  .el-select {
    .el-input {
      width: 90px;
      input {
        text-align: center;
      }
    }
  }
  .table-btn {
    width: 28px;
    height: 28px;
    line-height: 0;
    i {
      font-size: 12px;
    }
  }
}
.header-cell {
  font-family: 'menufont' !important;
  font-weight: 400;
  font-size: 15px;
}
.el-pagination {
  float: right;
  margin: 40px 20px 0 0;
}
</style>
