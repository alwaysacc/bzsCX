<template>
  <div class="home">
    <div class="center">
      <el-tabs v-model="activeName" @tab-click="handleClick" stretch>
          <el-tab-pane label="保单号" name="1">
            <div style="text-align: center">

            <el-row class="row">
              <el-col span="4">
                渠道:
              </el-col>
              <el-col span="20">
                <el-select v-model="value" placeholder="请选择" style="width: 300px">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-col>
            </el-row>
            <el-row class="row">
              <el-col span="4">
                险种:
              </el-col>
              <el-col span="20">
                <el-select v-model="value" placeholder="请选择" style="width: 300px">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-col>
            </el-row>
            <el-row class="row">
              <el-col span="4">
                车牌号:
              </el-col>
              <el-col span="20">
                <el-input v-model="input" placeholder="请输入内容" style="width: 300px"></el-input>
              </el-col>
            </el-row>
            <el-row class="row">
              <el-col span="4">
                业务来源:
              </el-col>
              <el-col span="20">
                <el-select v-model="value" placeholder="请选择" style="width: 300px">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-col>
            </el-row>
            </div>
          </el-tab-pane>


        <el-tab-pane label="车牌号" name="2">配置管理</el-tab-pane>
      </el-tabs>
    </div>

  </div>
</template>

<script>
export default {
  name: 'OneEntry',
  data(){
    return{
      activeName:'1',
      options: [{
        value: '1',
        label: '太平洋保险'
      }, {
        value: '2',
        label: '人民保险'
      }, {
        value: '3',
        label: '平安车险'
      }],
      value:''
    }
  },
  methods:{
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style scoped>
.home{
  text-align: center;
  padding: 2em;
  display: flex;
  justify-content: center;
}
.center{
  padding-top: 1em;
  width: 50%;
}
  .row{
    display: flex;
    align-items: center;
    height: 3.5em;
    text-align: left;
  }
  .row el-rol{
    text-align: right;
    color: red;
  }
</style>
