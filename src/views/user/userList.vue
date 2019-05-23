<template>
  <div id="home">
    <div class="home">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="全部" name="first">
          <div>
            <el-row style="height: 50px;line-height: 50px">
              <el-col span="2">
                <el-button style="color: black" @click="filter = true">筛选</el-button>
                <el-dialog
                  title="设置筛选条件"
                  :visible.sync="filter"
                  width="30%"
                  style="overflow-y: scroll"
                  :before-close="handleClose"
                >
                  <el-form :model="form" label-width="120px" label-position="left">
                    <el-form-item label="商业险到期时间" :label-width="formLabelWidth">
                      <el-date-picker
                        v-model="form.date1"
                        type="date"
                        placeholder="选择日期"
                        style="width: 100%"
                      />
                    </el-form-item>
                    <el-form-item label="交强险到期时间" :label-width="formLabelWidth">
                      <el-date-picker
                        v-model="form.date1"
                        type="date"
                        placeholder="选择日期"
                        style="width: 100%"
                      />
                    </el-form-item>
                    <el-form-item label="续保状态" :label-width="formLabelWidth">
                      <el-select v-model="form.nanjing" style="width: 100%">
                        <el-option label="续保失败" value="nanjing" />
                        <el-option label="续保成功" value="beijing" />
                        <el-option label="只取到行驶本" value="beijing" />
                        <el-option label="未处理" value="beijing" />
                      </el-select>
                    </el-form-item>
                    <el-form-item label="进店时间" :label-width="formLabelWidth">
                      <el-date-picker
                        v-model="form.date1"
                        type="date"
                        placeholder="选择日期"
                        style="width: 100%"
                      />
                    </el-form-item>
                    <el-form-item label="分配状态" :label-width="formLabelWidth">
                      <el-radio v-model="form" label="1">未分配</el-radio>
                      <el-radio v-model="form" label="2">已分配</el-radio>
                    </el-form-item>
                    <el-form-item label="分配时间" :label-width="formLabelWidth">
                      <el-date-picker
                        v-model="form.date1"
                        type="date"
                        placeholder="选择日期"
                        style="width: 100%"
                      />
                    </el-form-item>
                    <el-form-item label="业务员" :label-width="formLabelWidth">
                      <el-select v-model="form.nanjing" style="width: 100%">
                        <el-option label="续保失败" value="nanjing" />
                        <el-option label="续保成功" value="beijing" />
                        <el-option label="只取到行驶本" value="beijing" />
                        <el-option label="未处理" value="beijing" />
                      </el-select>
                    </el-form-item>
                    <el-form-item label="计划回访时间" :label-width="formLabelWidth">
                      <el-date-picker
                        v-model="form.date1"
                        type="date"
                        placeholder="选择日期"
                        style="width: 100%"
                      />
                    </el-form-item>
                    <el-form-item label="录入回访日期" :label-width="formLabelWidth">
                      <el-date-picker
                        v-model="form.date1"
                        type="date"
                        placeholder="选择日期"
                        style="width: 100%"
                      />
                    </el-form-item>
                    <el-form-item label="报价状态" :label-width="formLabelWidth">
                      <el-radio v-model="form" label="1">未报价</el-radio>
                      <el-radio v-model="form" label="2">报价成功</el-radio>
                      <el-radio v-model="form" label="2">报价失败</el-radio>
                    </el-form-item>
                    <el-form-item label="客户状态" :label-width="formLabelWidth">
                      <el-select v-model="form.nanjing" style="width: 100%">
                        <el-option label="未回访" value="nanjing" />
                        <el-option label="忙碌中待联系" value="beijing" />
                        <el-option label="已报价考虑中（普通）" value="beijing" />
                        <el-option label="已报价考虑中（重点）" value="beijing" />
                        <el-option label="其他" value="beijing" />
                        <el-option label="已预约出单" value="beijing" />
                        <el-option label="成功出单" value="beijing" />
                        <el-option label="战败" value="beijing" />
                        <el-option label="无效数据（停机、空号）" value="beijing" />
                      </el-select>
                    </el-form-item>
                    <el-form-item label="客户类别" :label-width="formLabelWidth">
                      <el-select v-model="form.nanjing" style="width: 100%">
                        <el-option label="新车" value="nanjing" />
                        <el-option label="在修不在保" value="beijing" />
                        <el-option label="不在修不在保" value="beijing" />
                        <el-option label="往年战败" value="beijing" />
                        <el-option label="续保客户" value="beijing" />
                        <el-option label="新转续" value="beijing" />
                        <el-option label="潜转续" value="beijing" />
                        <el-option label="间转续" value="beijing" />
                        <el-option label="续转续" value="beijing" />
                        <el-option label="三年联保" value="beijing" />
                        <el-option label="空值" value="beijing" />
                      </el-select>
                    </el-form-item>
                    <el-form-item label="品牌型号" :label-width="formLabelWidth">
                      <el-input v-model="form.number" style="width: 100%" />
                    </el-form-item>
                    <el-form-item label="录入方式" :label-width="formLabelWidth">
                      <el-select v-model="form.nanjing" style="width: 100%">
                        <el-option label="摄像头" value="nanjing" />
                        <el-option label="PC录入" value="beijing" />
                        <el-option label="批量导入" value="beijing" />
                        <el-option label="APP" value="beijing" />
                        <el-option label="微信" value="beijing" />
                      </el-select>
                    </el-form-item>
                    <el-form-item label="注册日期" :label-width="formLabelWidth">
                      <el-date-picker
                        v-model="form.date1"
                        type="date"
                        placeholder="选择日期"
                        style="width: 100%"
                      />
                    </el-form-item>
                    <el-form-item label="去年投保公司" :label-width="formLabelWidth">
                      <el-select v-model="form.nanjing" style="width: 100%">
                        <el-option label="太平洋" value="nanjing" />
                        <el-option label="平安" value="beijing" />
                        <el-option label="人保" value="beijing" />
                      </el-select>
                    </el-form-item>
                    <el-form-item label="更新时间" :label-width="formLabelWidth">
                      <el-date-picker
                        v-model="form.date1"
                        type="date"
                        placeholder="选择日期"
                        style="width: 100%"
                      />
                    </el-form-item>
                    <el-form-item label="客户电话" :label-width="formLabelWidth">
                      <el-radio v-model="form" label="1">有</el-radio>
                      <el-radio v-model="form" label="2">无</el-radio>
                    </el-form-item>
                    <el-form-item label="商业险到期时间" :label-width="formLabelWidth">
                      <el-date-picker
                        v-model="form.date1"
                        type="date"
                        placeholder="交强险到期时间"
                        style="width: 100%"
                      />
                    </el-form-item>
                    <el-form-item label="注册时间" :label-width="formLabelWidth">
                      <el-date-picker
                        v-model="form.date1"
                        type="date"
                        placeholder="交强险到期时间"
                        style="width: 100%"
                      />
                    </el-form-item>
                  </el-form>
                  <el-button type="primary" style="width: 100%;font-size: 20px;color: black" @click="dialogVisible = false">开始筛选</el-button>
                </el-dialog>
              </el-col>
              <el-col span="3">
                <el-select v-model="con" style="width: 130px;" @change="setCondition">
                  <el-option label="车牌号" value="carNumber" />
                  <el-option label="车架号" value="frameNumber" />
                  <el-option label="车主姓名" value="lincenseOwner" />
                  <el-option label="客户名称" value="customerName" />
                  <el-option label="客户电话" value="customerTel" />
                </el-select>
              </el-col>
              <el-col span="4">
                <el-input v-model="conditionText" placeholder="请输入内容" class="input-with-select">
                  <el-button slot="append" icon="el-icon-search" @click="search" />
                </el-input>
              </el-col>
              <el-col span="15">
                <a class="a-style">刷新续保</a>
                <a class="a-style">去重</a>
                <a class="a-style">修改</a>
                <a class="a-style">分配</a>
                <a class="a-style">回收</a>
                <a class="a-style">转移</a>
                <a class="a-style" @click="recoverUser">删除</a>
                <a class="a-style">导出</a>
                <a class="a-style">分配设置</a>
                <a class="a-style">表头设置</a>
                <a class="a-style">批量报价</a>
                <a class="a-style">批量报价设置</a>
              </el-col>
            </el-row>
            <el-row class="top-line">
              <el-col span="20">
                共<a style="font-size: 20px;color: red">{{ count }}</a>条数据
                <el-input
                  v-model="input21"
                  placeholder="更新时间：2019-01-12 至 2019-04-03"
                  style="width: 300px"
                  disabled
                />
              </el-col>
              <el-col span="4">
                <el-button style="color: black" @click="onSubmit">清空筛选选项</el-button>
              </el-col>
            </el-row>
            <el-table
              v-loading="loading"
              :data="tableData"
              style="width: 100%!important;"
              max-height="800"
              size="small"
              row-key="car_info_id"
              stripe
              border
              @select="handleSelectionChange"
              @select-all="selectAll"
              @row-click="toDetail"
            >
              <el-table-column
                type="selection"
              />
              <el-table-column
                fixed
                prop="car_number"
                label="车牌号"
                width="100"
              />
              <el-table-column
                prop="name"
                label="客户名称"
              />
              <el-table-column
                prop="frame_number"
                label="车架号"
                width="160"
              />
              <el-table-column
                prop="license_owner"
                label="车主"
              />
              <el-table-column
                prop="brand_model"
                label="品牌型号"
                min-width="200"
              />
              <el-table-column
                prop="register_date"
                label="注册日期"
                width="100"
              />
              <el-table-column
                prop="busunes_expire_date"
                label="商业险到期时间"
                width="100"
              />
              <el-table-column
                prop="force_expire_date"
                label="交强险到期时间"
                width="100"
              />
              <el-table-column
                prop="quote_status"
                label="报价状态"
                :formatter="quoteStat"
              />
              <el-table-column
                prop="submit_status"
                label="核保状态"
                :formatter="submitStat"
              />
              <el-table-column
                prop="follow_count"
                label="本年跟进次数"
              />
              <el-table-column
                prop="follow_time"
                label="最后跟进时间"
              />
              <el-table-column
                prop="follow_content"
                label="最后跟进内容"
              />
              <el-table-column
                prop="plan_return_time"
                label="计划回访时间"
              />
              <el-table-column
                prop="choice_last_year_insurance_name"
                label="上年投保公司"
              />
              <el-table-column
                prop="customer_status"
                label="客户状态"
                :formatter="customStat"
              />
              <el-table-column
                prop="customer_type"
                label="客户类别"
              />
              <el-table-column
                prop="salesman"
                label="业务员"
              />
              <el-table-column
                prop="UPDATED_TIME"
                label="更新时间"
                width="120"
              />
            </el-table>
            <el-row>
              <el-col span="12" style="padding-left: 20px">
                <el-checkbox v-model="checked">展示成功出单的和战败数据</el-checkbox>
              </el-col>
              <el-col span="12">
                <el-pagination
                  :current-page="currentPage4"
                  :page-sizes="[10, 20, 30, 40]"
                  :page-size="size"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="count"
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                />
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
        <el-tab-pane label="未分配" name="second">
          <div>
            <el-row style="height: 50px;line-height: 50px">
              <el-col span="2">
                <el-button style="color: black" @click="filter = true">筛选</el-button>
                <el-dialog
                  title="设置筛选条件"
                  :visible.sync="filter"
                  width="30%"
                  style="overflow-y: scroll"
                  :before-close="handleClose"
                >
                  <el-form :model="form" label-width="120px" label-position="left">
                    <el-form-item label="商业险到期时间" :label-width="formLabelWidth">
                      <el-date-picker
                        v-model="form.date1"
                        type="date"
                        placeholder="选择日期"
                        style="width: 100%"
                      />
                    </el-form-item>
                    <el-form-item label="交强险到期时间" :label-width="formLabelWidth">
                      <el-date-picker
                        v-model="form.date1"
                        type="date"
                        placeholder="选择日期"
                        style="width: 100%"
                      />
                    </el-form-item>
                    <el-form-item label="续保状态" :label-width="formLabelWidth">
                      <el-select v-model="form.nanjing" style="width: 100%">
                        <el-option label="续保失败" value="nanjing" />
                        <el-option label="续保成功" value="beijing" />
                        <el-option label="只取到行驶本" value="beijing" />
                        <el-option label="未处理" value="beijing" />
                      </el-select>
                    </el-form-item>
                    <el-form-item label="进店时间" :label-width="formLabelWidth">
                      <el-date-picker
                        v-model="form.date1"
                        type="date"
                        placeholder="选择日期"
                        style="width: 100%"
                      />
                    </el-form-item>
                    <el-form-item label="分配状态" :label-width="formLabelWidth">
                      <el-radio v-model="form" label="1">未分配</el-radio>
                      <el-radio v-model="form" label="2">已分配</el-radio>
                    </el-form-item>
                    <el-form-item label="分配时间" :label-width="formLabelWidth">
                      <el-date-picker
                        v-model="form.date1"
                        type="date"
                        placeholder="选择日期"
                        style="width: 100%"
                      />
                    </el-form-item>
                    <el-form-item label="业务员" :label-width="formLabelWidth">
                      <el-select v-model="form.nanjing" style="width: 100%">
                        <el-option label="续保失败" value="nanjing" />
                        <el-option label="续保成功" value="beijing" />
                        <el-option label="只取到行驶本" value="beijing" />
                        <el-option label="未处理" value="beijing" />
                      </el-select>
                    </el-form-item>
                    <el-form-item label="计划回访时间" :label-width="formLabelWidth">
                      <el-date-picker
                        v-model="form.date1"
                        type="date"
                        placeholder="选择日期"
                        style="width: 100%"
                      />
                    </el-form-item>
                    <el-form-item label="录入回访日期" :label-width="formLabelWidth">
                      <el-date-picker
                        v-model="form.date1"
                        type="date"
                        placeholder="选择日期"
                        style="width: 100%"
                      />
                    </el-form-item>
                    <el-form-item label="报价状态" :label-width="formLabelWidth">
                      <el-radio v-model="form" label="1">未报价</el-radio>
                      <el-radio v-model="form" label="2">报价成功</el-radio>
                      <el-radio v-model="form" label="2">报价失败</el-radio>
                    </el-form-item>
                    <el-form-item label="客户状态" :label-width="formLabelWidth">
                      <el-select v-model="form.nanjing" style="width: 100%">
                        <el-option label="未回访" value="nanjing" />
                        <el-option label="忙碌中待联系" value="beijing" />
                        <el-option label="已报价考虑中（普通）" value="beijing" />
                        <el-option label="已报价考虑中（重点）" value="beijing" />
                        <el-option label="其他" value="beijing" />
                        <el-option label="已预约出单" value="beijing" />
                        <el-option label="成功出单" value="beijing" />
                        <el-option label="战败" value="beijing" />
                        <el-option label="无效数据（停机、空号）" value="beijing" />
                      </el-select>
                    </el-form-item>
                    <el-form-item label="客户类别" :label-width="formLabelWidth">
                      <el-select v-model="form.nanjing" style="width: 100%">
                        <el-option label="新车" value="nanjing" />
                        <el-option label="在修不在保" value="beijing" />
                        <el-option label="不在修不在保" value="beijing" />
                        <el-option label="往年战败" value="beijing" />
                        <el-option label="续保客户" value="beijing" />
                        <el-option label="新转续" value="beijing" />
                        <el-option label="潜转续" value="beijing" />
                        <el-option label="间转续" value="beijing" />
                        <el-option label="续转续" value="beijing" />
                        <el-option label="三年联保" value="beijing" />
                        <el-option label="空值" value="beijing" />
                      </el-select>
                    </el-form-item>
                    <el-form-item label="品牌型号" :label-width="formLabelWidth">
                      <el-input v-model="form.number" style="width: 100%" />
                    </el-form-item>
                    <el-form-item label="录入方式" :label-width="formLabelWidth">
                      <el-select v-model="form.nanjing" style="width: 100%">
                        <el-option label="摄像头" value="nanjing" />
                        <el-option label="PC录入" value="beijing" />
                        <el-option label="批量导入" value="beijing" />
                        <el-option label="APP" value="beijing" />
                        <el-option label="微信" value="beijing" />
                      </el-select>
                    </el-form-item>
                    <el-form-item label="注册日期" :label-width="formLabelWidth">
                      <el-date-picker
                        v-model="form.date1"
                        type="date"
                        placeholder="选择日期"
                        style="width: 100%"
                      />
                    </el-form-item>
                    <el-form-item label="去年投保公司" :label-width="formLabelWidth">
                      <el-select v-model="form.nanjing" style="width: 100%">
                        <el-option label="太平洋" value="nanjing" />
                        <el-option label="平安" value="beijing" />
                        <el-option label="人保" value="beijing" />
                      </el-select>
                    </el-form-item>
                    <el-form-item label="更新时间" :label-width="formLabelWidth">
                      <el-date-picker
                        v-model="form.date1"
                        type="date"
                        placeholder="选择日期"
                        style="width: 100%"
                      />
                    </el-form-item>
                    <el-form-item label="客户电话" :label-width="formLabelWidth">
                      <el-radio v-model="form" label="1">有</el-radio>
                      <el-radio v-model="form" label="2">无</el-radio>
                    </el-form-item>
                    <el-form-item label="商业险到期时间" :label-width="formLabelWidth">
                      <el-date-picker
                        v-model="form.date1"
                        type="date"
                        placeholder="交强险到期时间"
                        style="width: 100%"
                      />
                    </el-form-item>
                    <el-form-item label="注册时间" :label-width="formLabelWidth">
                      <el-date-picker
                        v-model="form.date1"
                        type="date"
                        placeholder="交强险到期时间"
                        style="width: 100%"
                      />
                    </el-form-item>
                  </el-form>
                  <el-button type="primary" style="width: 100%;font-size: 20px;color: black" @click="dialogVisible = false">开始筛选</el-button>
                </el-dialog>
              </el-col>
              <el-col span="3">
                <el-select v-model="con" style="width: 130px;" @change="setCondition">
                  <el-option label="车牌号" value="carNumber" />
                  <el-option label="车架号" value="frameNumber" />
                  <el-option label="车主姓名" value="lincenseOwner" />
                  <el-option label="客户名称" value="customerName" />
                  <el-option label="客户电话" value="customerTel" />
                </el-select>
              </el-col>
              <el-col span="4">
                <el-input v-model="conditionText" placeholder="请输入内容" class="input-with-select">
                  <el-button slot="append" icon="el-icon-search" @click="search" />
                </el-input>
              </el-col>
              <el-col span="15">
                <a class="a-style">刷新续保</a>
                <a class="a-style">去重</a>
                <a class="a-style">修改</a>
                <a class="a-style">分配</a>
                <a class="a-style">回收</a>
                <a class="a-style">转移</a>
                <a class="a-style" @click="recoverUser">删除</a>
                <a class="a-style">导出</a>
                <a class="a-style">分配设置</a>
                <a class="a-style">表头设置</a>
                <a class="a-style">批量报价</a>
                <a class="a-style">批量报价设置</a>
              </el-col>
            </el-row>
            <el-row class="top-line">
              <el-col span="20">
                共<a style="font-size: 20px;color: red">{{ count }}</a>条数据
                <el-input
                  v-model="input21"
                  placeholder="更新时间：2019-01-12 至 2019-04-03"
                  style="width: 300px"
                  disabled
                />
              </el-col>
              <el-col span="4">
                <el-button style="color: black" @click="onSubmit">清空筛选选项</el-button>
              </el-col>
            </el-row>
            <el-table
              v-loading="loading"
              :data="tableData"
              style="width: 100%!important;"
              max-height="800"
              size="small"
              row-key="car_info_id"
              stripe
              border
              @select="handleSelectionChange"
              @select-all="selectAll"
              @row-click="toDetail"
            >
              <el-table-column
                type="selection"
              />
              <el-table-column
                fixed
                prop="car_number"
                label="车牌号"
                width="100"
              />
              <el-table-column
                prop="name"
                label="客户名称"
              />
              <el-table-column
                prop="frame_number"
                label="车架号"
                width="150"
              />
              <el-table-column
                prop="license_owner"
                label="车主"
              />
              <el-table-column
                prop="brand_model"
                label="品牌型号"
                min-width="200"
              />
              <el-table-column
                prop="register_date"
                label="注册日期"
                width="100"
              />
              <el-table-column
                prop="busunes_expire_date"
                label="商业险到期时间"
                width="100"
              />
              <el-table-column
                prop="force_expire_date"
                label="交强险到期时间"
                width="100"
              />
              <el-table-column
                prop="quote_status"
                label="报价状态"
                :formatter="quoteStat"
              />
              <el-table-column
                prop="submit_status"
                label="核保状态"
                :formatter="submitStat"
              />
              <el-table-column
                prop="follow_count"
                label="本年跟进次数"
              />
              <el-table-column
                prop="follow_time"
                label="最后跟进时间"
              />
              <el-table-column
                prop="follow_content"
                label="最后跟进内容"
              />
              <el-table-column
                prop="plan_return_time"
                label="计划回访时间"
              />
              <el-table-column
                prop="choice_last_year_insurance_name"
                label="上年投保公司"
              />
              <el-table-column
                prop="customer_status"
                label="客户状态"
                :formatter="customStat"
              />
              <el-table-column
                prop="customer_type"
                label="客户类别"
              />
              <el-table-column
                prop="salesman"
                label="业务员"
              />
              <el-table-column
                prop="UPDATED_TIME"
                label="更新时间"
              />
            </el-table>
            <el-row>
              <el-col span="12" style="padding-left: 20px">
                <el-checkbox v-model="checked">展示成功出单的和战败数据</el-checkbox>
              </el-col>
              <el-col span="12">
                <el-pagination
                  :current-page="currentPage4"
                  :page-sizes="[10, 20, 30, 40]"
                  :page-size="size"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="count"
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                />
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
        <el-tab-pane label="续保期未回访" name="third">
          <div>
            <el-row style="height: 50px;line-height: 50px">
              <el-col span="2">
                <el-button style="color: black" @click="filter = true">筛选</el-button>
                <el-dialog
                  title="设置筛选条件"
                  :visible.sync="filter"
                  width="30%"
                  style="overflow-y: scroll"
                  :before-close="handleClose"
                >
                  <el-form :model="form" label-width="120px" label-position="left">
                    <el-form-item label="商业险到期时间" :label-width="formLabelWidth">
                      <el-date-picker
                        v-model="form.date1"
                        type="date"
                        placeholder="选择日期"
                        style="width: 100%"
                      />
                    </el-form-item>
                    <el-form-item label="交强险到期时间" :label-width="formLabelWidth">
                      <el-date-picker
                        v-model="form.date1"
                        type="date"
                        placeholder="选择日期"
                        style="width: 100%"
                      />
                    </el-form-item>
                    <el-form-item label="续保状态" :label-width="formLabelWidth">
                      <el-select v-model="form.nanjing" style="width: 100%">
                        <el-option label="续保失败" value="nanjing" />
                        <el-option label="续保成功" value="beijing" />
                        <el-option label="只取到行驶本" value="beijing" />
                        <el-option label="未处理" value="beijing" />
                      </el-select>
                    </el-form-item>
                    <el-form-item label="进店时间" :label-width="formLabelWidth">
                      <el-date-picker
                        v-model="form.date1"
                        type="date"
                        placeholder="选择日期"
                        style="width: 100%"
                      />
                    </el-form-item>
                    <el-form-item label="分配状态" :label-width="formLabelWidth">
                      <el-radio v-model="form" label="1">未分配</el-radio>
                      <el-radio v-model="form" label="2">已分配</el-radio>
                    </el-form-item>
                    <el-form-item label="分配时间" :label-width="formLabelWidth">
                      <el-date-picker
                        v-model="form.date1"
                        type="date"
                        placeholder="选择日期"
                        style="width: 100%"
                      />
                    </el-form-item>
                    <el-form-item label="业务员" :label-width="formLabelWidth">
                      <el-select v-model="form.nanjing" style="width: 100%">
                        <el-option label="续保失败" value="nanjing" />
                        <el-option label="续保成功" value="beijing" />
                        <el-option label="只取到行驶本" value="beijing" />
                        <el-option label="未处理" value="beijing" />
                      </el-select>
                    </el-form-item>
                    <el-form-item label="计划回访时间" :label-width="formLabelWidth">
                      <el-date-picker
                        v-model="form.date1"
                        type="date"
                        placeholder="选择日期"
                        style="width: 100%"
                      />
                    </el-form-item>
                    <el-form-item label="录入回访日期" :label-width="formLabelWidth">
                      <el-date-picker
                        v-model="form.date1"
                        type="date"
                        placeholder="选择日期"
                        style="width: 100%"
                      />
                    </el-form-item>
                    <el-form-item label="报价状态" :label-width="formLabelWidth">
                      <el-radio v-model="form" label="1">未报价</el-radio>
                      <el-radio v-model="form" label="2">报价成功</el-radio>
                      <el-radio v-model="form" label="2">报价失败</el-radio>
                    </el-form-item>
                    <el-form-item label="客户状态" :label-width="formLabelWidth">
                      <el-select v-model="form.nanjing" style="width: 100%">
                        <el-option label="未回访" value="nanjing" />
                        <el-option label="忙碌中待联系" value="beijing" />
                        <el-option label="已报价考虑中（普通）" value="beijing" />
                        <el-option label="已报价考虑中（重点）" value="beijing" />
                        <el-option label="其他" value="beijing" />
                        <el-option label="已预约出单" value="beijing" />
                        <el-option label="成功出单" value="beijing" />
                        <el-option label="战败" value="beijing" />
                        <el-option label="无效数据（停机、空号）" value="beijing" />
                      </el-select>
                    </el-form-item>
                    <el-form-item label="客户类别" :label-width="formLabelWidth">
                      <el-select v-model="form.nanjing" style="width: 100%">
                        <el-option label="新车" value="nanjing" />
                        <el-option label="在修不在保" value="beijing" />
                        <el-option label="不在修不在保" value="beijing" />
                        <el-option label="往年战败" value="beijing" />
                        <el-option label="续保客户" value="beijing" />
                        <el-option label="新转续" value="beijing" />
                        <el-option label="潜转续" value="beijing" />
                        <el-option label="间转续" value="beijing" />
                        <el-option label="续转续" value="beijing" />
                        <el-option label="三年联保" value="beijing" />
                        <el-option label="空值" value="beijing" />
                      </el-select>
                    </el-form-item>
                    <el-form-item label="品牌型号" :label-width="formLabelWidth">
                      <el-input v-model="form.number" style="width: 100%" />
                    </el-form-item>
                    <el-form-item label="录入方式" :label-width="formLabelWidth">
                      <el-select v-model="form.nanjing" style="width: 100%">
                        <el-option label="摄像头" value="nanjing" />
                        <el-option label="PC录入" value="beijing" />
                        <el-option label="批量导入" value="beijing" />
                        <el-option label="APP" value="beijing" />
                        <el-option label="微信" value="beijing" />
                      </el-select>
                    </el-form-item>
                    <el-form-item label="注册日期" :label-width="formLabelWidth">
                      <el-date-picker
                        v-model="form.date1"
                        type="date"
                        placeholder="选择日期"
                        style="width: 100%"
                      />
                    </el-form-item>
                    <el-form-item label="去年投保公司" :label-width="formLabelWidth">
                      <el-select v-model="form.nanjing" style="width: 100%">
                        <el-option label="太平洋" value="nanjing" />
                        <el-option label="平安" value="beijing" />
                        <el-option label="人保" value="beijing" />
                      </el-select>
                    </el-form-item>
                    <el-form-item label="更新时间" :label-width="formLabelWidth">
                      <el-date-picker
                        v-model="form.date1"
                        type="date"
                        placeholder="选择日期"
                        style="width: 100%"
                      />
                    </el-form-item>
                    <el-form-item label="客户电话" :label-width="formLabelWidth">
                      <el-radio v-model="form" label="1">有</el-radio>
                      <el-radio v-model="form" label="2">无</el-radio>
                    </el-form-item>
                    <el-form-item label="商业险到期时间" :label-width="formLabelWidth">
                      <el-date-picker
                        v-model="form.date1"
                        type="date"
                        placeholder="交强险到期时间"
                        style="width: 100%"
                      />
                    </el-form-item>
                    <el-form-item label="注册时间" :label-width="formLabelWidth">
                      <el-date-picker
                        v-model="form.date1"
                        type="date"
                        placeholder="交强险到期时间"
                        style="width: 100%"
                      />
                    </el-form-item>
                  </el-form>
                  <el-button type="primary" style="width: 100%;font-size: 20px;color: black" @click="dialogVisible = false">开始筛选</el-button>
                </el-dialog>
              </el-col>
              <el-col span="3">
                <el-select v-model="con" style="width: 130px;" @change="setCondition">
                  <el-option label="车牌号" value="carNumber" />
                  <el-option label="车架号" value="frameNumber" />
                  <el-option label="车主姓名" value="lincenseOwner" />
                  <el-option label="客户名称" value="customerName" />
                  <el-option label="客户电话" value="customerTel" />
                </el-select>
              </el-col>
              <el-col span="4">
                <el-input v-model="conditionText" placeholder="请输入内容" class="input-with-select">
                  <el-button slot="append" icon="el-icon-search" @click="search" />
                </el-input>
              </el-col>
              <el-col span="15">
                <a class="a-style">刷新续保</a>
                <a class="a-style">去重</a>
                <a class="a-style">修改</a>
                <a class="a-style">分配</a>
                <a class="a-style">回收</a>
                <a class="a-style">转移</a>
                <a class="a-style" @click="recoverUser">删除</a>
                <a class="a-style">导出</a>
                <a class="a-style">分配设置</a>
                <a class="a-style">表头设置</a>
                <a class="a-style">批量报价</a>
                <a class="a-style">批量报价设置</a>
              </el-col>
            </el-row>
            <el-row class="top-line">
              <el-col span="20">
                共<a style="font-size: 20px;color: red">{{ count }}</a>条数据
                <el-input
                  v-model="input21"
                  placeholder="更新时间：2019-01-12 至 2019-04-03"
                  style="width: 300px"
                  disabled
                />
              </el-col>
              <el-col span="4">
                <el-button style="color: black" @click="onSubmit">清空筛选选项</el-button>
              </el-col>
            </el-row>
            <el-table
              v-loading="loading"
              :data="tableData"
              style="width: 100%!important;"
              max-height="800"
              size="small"
              row-key="car_info_id"
              stripe
              border
              @select="handleSelectionChange"
              @select-all="selectAll"
              @row-click="toDetail"
            >
              <el-table-column
                type="selection"
              />
              <el-table-column
                fixed
                prop="car_number"
                label="车牌号"
                width="100"
              />
              <el-table-column
                prop="name"
                label="客户名称"
              />
              <el-table-column
                prop="frame_number"
                label="车架号"
                width="150"
              />
              <el-table-column
                prop="license_owner"
                label="车主"
              />
              <el-table-column
                prop="brand_model"
                label="品牌型号"
                min-width="200"
              />
              <el-table-column
                prop="register_date"
                label="注册日期"
                width="100"
              />
              <el-table-column
                prop="busunes_expire_date"
                label="商业险到期时间"
                width="100"
              />
              <el-table-column
                prop="force_expire_date"
                label="交强险到期时间"
                width="100"
              />
              <el-table-column
                prop="quote_status"
                label="报价状态"
                :formatter="quoteStat"
              />
              <el-table-column
                prop="submit_status"
                label="核保状态"
                :formatter="submitStat"
              />
              <el-table-column
                prop="follow_count"
                label="本年跟进次数"
              />
              <el-table-column
                prop="follow_time"
                label="最后跟进时间"
              />
              <el-table-column
                prop="follow_content"
                label="最后跟进内容"
              />
              <el-table-column
                prop="plan_return_time"
                label="计划回访时间"
              />
              <el-table-column
                prop="choice_last_year_insurance_name"
                label="上年投保公司"
              />
              <el-table-column
                prop="customer_status"
                label="客户状态"
                :formatter="customStat"
              />
              <el-table-column
                prop="customer_type"
                label="客户类别"
              />
              <el-table-column
                prop="salesman"
                label="业务员"
              />
              <el-table-column
                prop="UPDATED_TIME"
                label="更新时间"
              />
            </el-table>
            <el-row>
              <el-col span="12" style="padding-left: 20px">
                <el-checkbox v-model="checked">展示成功出单的和战败数据</el-checkbox>
              </el-col>
              <el-col span="12">
                <el-pagination
                  :current-page="currentPage4"
                  :page-sizes="[10, 20, 30, 40]"
                  :page-size="size"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="count"
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                />
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
        <el-tab-pane label="计划回访" name="fourth">
          <div>
            <el-row style="height: 50px;line-height: 50px">
              <el-col span="2">
                <el-button style="color: black" @click="filter = true">筛选</el-button>
                <el-dialog
                  title="设置筛选条件"
                  :visible.sync="filter"
                  width="30%"
                  style="overflow-y: scroll"
                  :before-close="handleClose"
                >
                  <el-form :model="form" label-width="120px" label-position="left">
                    <el-form-item label="商业险到期时间" :label-width="formLabelWidth">
                      <el-date-picker
                        v-model="form.date1"
                        type="date"
                        placeholder="选择日期"
                        style="width: 100%"
                      />
                    </el-form-item>
                    <el-form-item label="交强险到期时间" :label-width="formLabelWidth">
                      <el-date-picker
                        v-model="form.date1"
                        type="date"
                        placeholder="选择日期"
                        style="width: 100%"
                      />
                    </el-form-item>
                    <el-form-item label="续保状态" :label-width="formLabelWidth">
                      <el-select v-model="form.nanjing" style="width: 100%">
                        <el-option label="续保失败" value="nanjing" />
                        <el-option label="续保成功" value="beijing" />
                        <el-option label="只取到行驶本" value="beijing" />
                        <el-option label="未处理" value="beijing" />
                      </el-select>
                    </el-form-item>
                    <el-form-item label="进店时间" :label-width="formLabelWidth">
                      <el-date-picker
                        v-model="form.date1"
                        type="date"
                        placeholder="选择日期"
                        style="width: 100%"
                      />
                    </el-form-item>
                    <el-form-item label="分配状态" :label-width="formLabelWidth">
                      <el-radio v-model="form" label="1">未分配</el-radio>
                      <el-radio v-model="form" label="2">已分配</el-radio>
                    </el-form-item>
                    <el-form-item label="分配时间" :label-width="formLabelWidth">
                      <el-date-picker
                        v-model="form.date1"
                        type="date"
                        placeholder="选择日期"
                        style="width: 100%"
                      />
                    </el-form-item>
                    <el-form-item label="业务员" :label-width="formLabelWidth">
                      <el-select v-model="form.nanjing" style="width: 100%">
                        <el-option label="续保失败" value="nanjing" />
                        <el-option label="续保成功" value="beijing" />
                        <el-option label="只取到行驶本" value="beijing" />
                        <el-option label="未处理" value="beijing" />
                      </el-select>
                    </el-form-item>
                    <el-form-item label="计划回访时间" :label-width="formLabelWidth">
                      <el-date-picker
                        v-model="form.date1"
                        type="date"
                        placeholder="选择日期"
                        style="width: 100%"
                      />
                    </el-form-item>
                    <el-form-item label="录入回访日期" :label-width="formLabelWidth">
                      <el-date-picker
                        v-model="form.date1"
                        type="date"
                        placeholder="选择日期"
                        style="width: 100%"
                      />
                    </el-form-item>
                    <el-form-item label="报价状态" :label-width="formLabelWidth">
                      <el-radio v-model="form" label="1">未报价</el-radio>
                      <el-radio v-model="form" label="2">报价成功</el-radio>
                      <el-radio v-model="form" label="2">报价失败</el-radio>
                    </el-form-item>
                    <el-form-item label="客户状态" :label-width="formLabelWidth">
                      <el-select v-model="form.nanjing" style="width: 100%">
                        <el-option label="未回访" value="nanjing" />
                        <el-option label="忙碌中待联系" value="beijing" />
                        <el-option label="已报价考虑中（普通）" value="beijing" />
                        <el-option label="已报价考虑中（重点）" value="beijing" />
                        <el-option label="其他" value="beijing" />
                        <el-option label="已预约出单" value="beijing" />
                        <el-option label="成功出单" value="beijing" />
                        <el-option label="战败" value="beijing" />
                        <el-option label="无效数据（停机、空号）" value="beijing" />
                      </el-select>
                    </el-form-item>
                    <el-form-item label="客户类别" :label-width="formLabelWidth">
                      <el-select v-model="form.nanjing" style="width: 100%">
                        <el-option label="新车" value="nanjing" />
                        <el-option label="在修不在保" value="beijing" />
                        <el-option label="不在修不在保" value="beijing" />
                        <el-option label="往年战败" value="beijing" />
                        <el-option label="续保客户" value="beijing" />
                        <el-option label="新转续" value="beijing" />
                        <el-option label="潜转续" value="beijing" />
                        <el-option label="间转续" value="beijing" />
                        <el-option label="续转续" value="beijing" />
                        <el-option label="三年联保" value="beijing" />
                        <el-option label="空值" value="beijing" />
                      </el-select>
                    </el-form-item>
                    <el-form-item label="品牌型号" :label-width="formLabelWidth">
                      <el-input v-model="form.number" style="width: 100%" />
                    </el-form-item>
                    <el-form-item label="录入方式" :label-width="formLabelWidth">
                      <el-select v-model="form.nanjing" style="width: 100%">
                        <el-option label="摄像头" value="nanjing" />
                        <el-option label="PC录入" value="beijing" />
                        <el-option label="批量导入" value="beijing" />
                        <el-option label="APP" value="beijing" />
                        <el-option label="微信" value="beijing" />
                      </el-select>
                    </el-form-item>
                    <el-form-item label="注册日期" :label-width="formLabelWidth">
                      <el-date-picker
                        v-model="form.date1"
                        type="date"
                        placeholder="选择日期"
                        style="width: 100%"
                      />
                    </el-form-item>
                    <el-form-item label="去年投保公司" :label-width="formLabelWidth">
                      <el-select v-model="form.nanjing" style="width: 100%">
                        <el-option label="太平洋" value="nanjing" />
                        <el-option label="平安" value="beijing" />
                        <el-option label="人保" value="beijing" />
                      </el-select>
                    </el-form-item>
                    <el-form-item label="更新时间" :label-width="formLabelWidth">
                      <el-date-picker
                        v-model="form.date1"
                        type="date"
                        placeholder="选择日期"
                        style="width: 100%"
                      />
                    </el-form-item>
                    <el-form-item label="客户电话" :label-width="formLabelWidth">
                      <el-radio v-model="form" label="1">有</el-radio>
                      <el-radio v-model="form" label="2">无</el-radio>
                    </el-form-item>
                    <el-form-item label="商业险到期时间" :label-width="formLabelWidth">
                      <el-date-picker
                        v-model="form.date1"
                        type="date"
                        placeholder="交强险到期时间"
                        style="width: 100%"
                      />
                    </el-form-item>
                    <el-form-item label="注册时间" :label-width="formLabelWidth">
                      <el-date-picker
                        v-model="form.date1"
                        type="date"
                        placeholder="交强险到期时间"
                        style="width: 100%"
                      />
                    </el-form-item>
                  </el-form>
                  <el-button type="primary" style="width: 100%;font-size: 20px;color: black" @click="dialogVisible = false">开始筛选</el-button>
                </el-dialog>
              </el-col>
              <el-col span="3">
                <el-select v-model="con" style="width: 130px;" @change="setCondition">
                  <el-option label="车牌号" value="carNumber" />
                  <el-option label="车架号" value="frameNumber" />
                  <el-option label="车主姓名" value="lincenseOwner" />
                  <el-option label="客户名称" value="customerName" />
                  <el-option label="客户电话" value="customerTel" />
                </el-select>
              </el-col>
              <el-col span="4">
                <el-input v-model="conditionText" placeholder="请输入内容" class="input-with-select">
                  <el-button slot="append" icon="el-icon-search" @click="search" />
                </el-input>
              </el-col>
              <el-col span="15">
                <a class="a-style">刷新续保</a>
                <a class="a-style">去重</a>
                <a class="a-style">修改</a>
                <a class="a-style">分配</a>
                <a class="a-style">回收</a>
                <a class="a-style">转移</a>
                <a class="a-style" @click="recoverUser">删除</a>
                <a class="a-style">导出</a>
                <a class="a-style">分配设置</a>
                <a class="a-style">表头设置</a>
                <a class="a-style">批量报价</a>
                <a class="a-style">批量报价设置</a>
              </el-col>
            </el-row>
            <el-row class="top-line">
              <el-col span="20">
                共<a style="font-size: 20px;color: red">{{ count }}</a>条数据
                <el-input
                  v-model="input21"
                  placeholder="更新时间：2019-01-12 至 2019-04-03"
                  style="width: 300px"
                  disabled
                />
              </el-col>
              <el-col span="4">
                <el-button style="color: black" @click="onSubmit">清空筛选选项</el-button>
              </el-col>
            </el-row>
            <el-table
              v-loading="loading"
              :data="tableData"
              style="width: 100%!important;"
              max-height="800"
              size="small"
              row-key="car_info_id"
              stripe
              border
              @select="handleSelectionChange"
              @select-all="selectAll"
              @row-click="toDetail"
            >
              <el-table-column
                type="selection"
              />
              <el-table-column
                fixed
                prop="car_number"
                label="车牌号"
                width="100"
              />
              <el-table-column
                prop="name"
                label="客户名称"
              />
              <el-table-column
                prop="frame_number"
                label="车架号"
                width="150"
              />
              <el-table-column
                prop="license_owner"
                label="车主"
              />
              <el-table-column
                prop="brand_model"
                label="品牌型号"
                min-width="200"
              />
              <el-table-column
                prop="register_date"
                label="注册日期"
                width="100"
              />
              <el-table-column
                prop="busunes_expire_date"
                label="商业险到期时间"
                width="100"
              />
              <el-table-column
                prop="force_expire_date"
                label="交强险到期时间"
                width="100"
              />
              <el-table-column
                prop="quote_status"
                label="报价状态"
                :formatter="quoteStat"
              />
              <el-table-column
                prop="submit_status"
                label="核保状态"
                :formatter="submitStat"
              />
              <el-table-column
                prop="follow_count"
                label="本年跟进次数"
              />
              <el-table-column
                prop="follow_time"
                label="最后跟进时间"
              />
              <el-table-column
                prop="follow_content"
                label="最后跟进内容"
              />
              <el-table-column
                prop="plan_return_time"
                label="计划回访时间"
              />
              <el-table-column
                prop="choice_last_year_insurance_name"
                label="上年投保公司"
              />
              <el-table-column
                prop="customer_status"
                label="客户状态"
                :formatter="customStat"
              />
              <el-table-column
                prop="customer_type"
                label="客户类别"
              />
              <el-table-column
                prop="salesman"
                label="业务员"
              />
              <el-table-column
                prop="UPDATED_TIME"
                label="更新时间"
              />
            </el-table>
            <el-row>
              <el-col span="12" style="padding-left: 20px">
                <el-checkbox v-model="checked">展示成功出单的和战败数据</el-checkbox>
              </el-col>
              <el-col span="12">
                <el-pagination
                  :current-page="currentPage4"
                  :page-sizes="[10, 20, 30, 40]"
                  :page-size="size"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="count"
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                />
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>

  </div>
</template>

<script>
import { getUserList, searchUserList, recoverUser } from '../../api/userApi'
import { getStore } from '../../utils/mUtils'
export default {
  name: '',
  data() {
    return {
      activeName: 'first',
      con: 'carNumber',
      input21: '',
      tableData: [],
      multipleSelection: [],
      currentPage4: 1,
      filter: false,
      form: {},
      page: 0,
      size: 10,
      count: '',
      loading: true,
      conditionText: '',
      carInfoIds: ''
    }
  },

  watch: {
    $route(to, from) {
      if (to.path == '/userList') {
        this.userList()
      }
    }
  },
  created() {
    // let a = JSON.parse(getStore("USER"));
    // console.log(a)
    this.userList()
  },

  methods: {
    handleSelectionChange(e) {
      this.carInfoIds = ''
      e.map((item, index) => {
        if (index != e.length - 1) {
          this.carInfoIds = this.carInfoIds + item.car_info_id + ','
        } else {
          this.carInfoIds = this.carInfoIds + item.car_info_id
        }
      })
      console.log(this.carInfoIds)
    },
    selectAll(e) {
      this.carInfoIds = ''
      e.map((item, index) => {
        if (index != e.length - 1) {
          this.carInfoIds = this.carInfoIds + item.car_info_id + ','
        } else {
          this.carInfoIds = this.carInfoIds + item.car_info_id
        }
      })
    },
    recoverUser() {
      const params = {
        carInfoIds: this.carInfoIds,
        status: 1
      }
      recoverUser(params).then(res => {
        if (res.code == 200) {
          this.$message({
            type: 'success',
            message: '删除成功',
            duration: '1000'
          })
          this.loading = false
          setTimeout(() => {
            this.userList()
          }, 1100)
        } else {
          this.$message({
            type: 'error',
            message: res.message
          })
        }
        console.log(res)
      })
    },
    handleSizeChange(val) {
      this.size = val
      this.userList()
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      this.page = val
      this.userList()
      console.log(`当前页: ${val}`)
    },
    toDetail(row, event, column) {
      console.log(row.car_info_id)
      console.log(event)
      console.log(column)
      this.$router.push({ path: '/user/userDetail', query: { car_info_id: row.car_info_id }})
    },
    setCondition(e) {
      console.log(e)
    },
    search() {
      this.loading = true
      const user = JSON.parse(this.$store.getters.user)
      let params
      switch (this.con) {
        case 'carNumber':
          params = {
            accountId: user.accountId,
            roleId: user.roleId,
            carNumber: this.conditionText
          }
          break
        case 'frameNumber':
          params = {
            accountId: user.accountId,
            roleId: user.roleId,
            frameNumber: this.conditionText
          }
          break
        case 'lincenseOwner':
          params = {
            accountId: user.accountId,
            roleId: user.roleId,
            lincenseOwner: this.conditionText
          }
          break
        case 'customerName':
          params = {
            accountId: user.accountId,
            roleId: user.roleId,
            customerName: this.conditionText
          }
          break
        case 'customerTel':
          params = {
            accountId: user.accountId,
            roleId: user.roleId,
            customerTel: this.conditionText
          }
          break
      }
      searchUserList(params).then(res => {
        if (res.code == 200) {
          this.$message({
            type: 'success',
            message: '搜索成功'
          })
          this.tableData = res.data
          this.loading = false
        } else {
          this.$message({
            type: 'error',
            message: res.message
          })
        }
        console.log(res)
      })
      console.log(this.condition)
    },
    userList(salesman, customerStatus, plan) {
      const user = JSON.parse(this.$store.getters.user)
      const params = {
        accountId: user.accountId,
        roleId: user.roleId,
        page: this.page,
        size: this.size,
        salesman: salesman,
        customerStatu: customerStatus,
        plan: plan

      }
      getUserList(params).then(res => {
        console.log(res)
        if (res.code == 200) {
          this.$message({
            type: 'success',
            message: '获取成功'
          })
          this.loading = false
          this.tableData = res.data.list
          this.count = res.data.total
        } else {
          this.$message({
            type: 'error',
            message: res.message
          })
        }
      })
    },
    handleClick(val) {
      // salesman,customerStatus,plan
      console.log(val.index)
      switch (val.index) {
        case '0':
          this.userList()
          break
        case '1':
          const salesman = 0
          this.userList(salesman)
          break
        case '2':
          const customerStatus = 1
          this.userList(customerStatus)
          break
        case '3':
          const plan = 1
          this.userList(plan)
          break
      }
    },
    quoteStat(row, column, cellValue, index) {
      if (row.quote_status == 0) {
        return '报价失败'
      } else if (row.quote_status == 1) {
        return '报价成功'
      } else {
        return '未报价'
      }
    },
    submitStat(row, column, cellValue, index) {
      if (row.submit_status == 0) {
        return '核保失败'
      } else if (row.submit_status == 1) {
        return '核保成功'
      } else {
        return '未核保'
      }
    },
    customStat(row, column, cellValue, index) {
      if (row.customer_status == 0) {
        return '未回访'
      } else if (row.customer_status == 1) {
        return '已回访'
      } else {
        return '未回访'
      }
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
    .a-style{
        cursor: pointer;
        color: blue;
        margin-left: 0.5em;
    }
    .top-line{
        height: 70px;
        line-height: 70px;
        background-color:#f7f7f7;
    }

</style>
