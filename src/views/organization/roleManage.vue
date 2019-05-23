<template>
  <div>
    <div class="home">
      <el-row style="text-align: right">
        <el-col>
          <el-button type="primary">新建角色</el-button>
        </el-col>
      </el-row>

      <el-table
        :data="tableData"
        max-height="550"
        border
        style="width: 100%;margin-top: 0.5em"
      >
        <el-table-column
          prop="date"
          label="角色ID"
          width="180"
        />
        <el-table-column
          prop="name"
          label="角色名称"
          width="180"
        />
        <el-table-column
          prop="address"
          label="创建人"
        />
        <el-table-column
          prop="address"
          label="创建人"
        />
        <el-table-column
          prop="address"
          label="创建时间"
        />
        <el-table-column
          prop="address"
          label="操作"
        >
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {
  },
  data() {
    return {
      tableData: []
    }
  }
}
</script>

<style scoped>
    .home{
        margin: 1em 1em;
    }
</style>
