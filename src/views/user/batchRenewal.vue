<template>
  <div id="home">
    <div class="home">
      <el-row class="row-style">
        <el-col span="2">上传时间：</el-col>
        <el-col span="6">
          <el-input v-model="input" placeholder="请输入内容" style="width: 90%" />
        </el-col>
        <el-col span="2">车牌号：</el-col>
        <el-col span="6">
          <el-input v-model="input" placeholder="请输入内容" style="width: 90%" />
        </el-col>
        <el-col span="2">文件名：</el-col>
        <el-col span="6">
          <el-input v-model="input" placeholder="请输入内容" style="width: 90%" />
        </el-col>
      </el-row>
      <el-row class="row-style">
        <el-col span="2">任务状态：</el-col>
        <el-col span="6">
          <el-select v-model="stat" style="width: 90%">
            <el-option label="未完成" value="shi" />
            <el-option label="已完成" value="fou" />
          </el-select>
        </el-col>
      </el-row>
      <el-row class="row-style" style="text-align: right">
        <el-col offset="18" span="6">
          <el-button type="primary">搜索</el-button>
          <el-button type="primary">新增批量导入</el-button>
        </el-col>
      </el-row>

      <el-row class="row-font">
        <el-col span="12">为了更好的识别数据，请根据模板导入。<span class="font-rol">下载模板</span></el-col>
        <el-col offset="5" span="7">每天可批续1000条，今日还可批续<span style="color: blue">1000</span>条</el-col>
      </el-row>
      <el-row class="row-font">
        机器人支持按客户类别导入客户，请先对客户分类，再导入模板上传。<span class="font-rol">查看/设置类别</span>
      </el-row>
      <el-row class="row-font">
        由于批续会拖慢正常的续保、报价速度，批续执行时间改为：<span style="color: red">8:00-10:00</span>
      </el-row>
      <el-table
        :data="tableData"
        size="small"
        border
        stripe="true"
        style="width: 100%;margin-top: 1em"
      >
        <el-table-column
          prop="date"
          label="批次ID"
          width="80"
        />
        <el-table-column
          prop="name"
          label="上传时间"
          width="80"
        />
        <el-table-column
          prop="address"
          label="文件名"
        />
        <el-table-column
          prop="address"
          label="上传成功/失败/总数"
        />
        <el-table-column
          prop="address"
          label="处理中"
        />
        <el-table-column
          prop="address"
          label="续保进度"
        />
        <el-table-column
          prop="address"
          label="续保状态"
        />
        <el-table-column
          prop="address"
          label="更改查询方式"
        />
        <el-table-column
          prop="address"
          label="重新查询"
        />
        <el-table-column
          align="center"
          width="250"
        >
          <template slot="header" slot-scope="scope">
            操作
          </template>
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
            >查看</el-button>
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
            >下载</el-button>
            <el-button
              size="mini"
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
  data() {
    return {
      input: '',
      stat: '全部',
      tableData: [{
        date: '20',
        name: '王小虎',
        address: '上海市'
      }, {
        date: '201',
        name: '王小虎',
        address: '上海市'
      }, {
        date: '2016',
        name: '王小虎',
        address: '上海市'
      }]
    }
  }
}
</script>

<style scoped>
#home{
    font-size: 14px;
}
.home{
    margin: 0.5em;
}
    .row-style{
        text-align: left;
        height: 3.5em;
        line-height: 3.5em;
    }
    .font-rol{
        color: #1d90e6;
    }
    .row-font{
        height: 1.5em;
        line-height: 1.5em;
    }
</style>
