<template>
  <div>
    <div class="home">
      <el-row class="row-style">
        <el-col span="6">
          <el-input v-model="input" placeholder="车牌号" style="width: 90%" />
        </el-col>
        <el-col span="6">
          <el-select v-model="stat" placeholder="业务员" style="width: 90%">
            <el-option label="平安" value="shi" />
            <el-option label="太平洋" value="fou" />
          </el-select>
        </el-col>
        <el-col span="6">
          <el-select v-model="stat" placeholder="录入战败时间" style="width: 90%">
            <el-option label="平安" value="shi" />
            <el-option label="太平洋" value="fou" />
          </el-select>
        </el-col>
        <el-col span="6">
          <el-select v-model="stat" placeholder="战败原因" style="width: 90%">
            <el-option label="新车" value="shi" />
            <el-option label="在修不在保" value="fou" />
          </el-select>
        </el-col>
      </el-row>
      <el-row class="row-style">
        <el-col span="6">
          <el-select v-model="stat" placeholder="客户类别" style="width: 90%">
            <el-option label="新车" value="shi" />
            <el-option label="在修不在保" value="fou" />
          </el-select>
        </el-col>
        <el-col offset="14" span="4">
          <el-button type="primary">搜索</el-button>
          <el-button type="primary">导出</el-button>
        </el-col>
      </el-row>

      <el-table
        :data="tableData"
        tooltip-effect="dark"
        border
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          type="selection"
          width="55"
        />
        <el-table-column
          label="出单时间"
          width="120"
        >
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="车牌号码"
          width="120"
        />
        <el-table-column
          prop="address"
          label="品牌型号"
          show-overflow-tooltip
        />
        <el-table-column
          prop="name"
          label="战败原因"
        />
        <el-table-column
          prop="name"
          label="客户类别"
        />
        <el-table-column
          prop="name"
          label="业务员"
        />
        <el-table-column
          prop="name"
          label="录入时间"
        />
      </el-table>
    </div>

  </div>
</template>

<script>
export default {
  name: '',
  components: {
  }
}
</script>

<style scoped>
    .home{
        margin: 0.5em;
    }
    .row-style{
        text-align: left;
        height: 3.5em;
        line-height: 3.5em;
    }

</style>
