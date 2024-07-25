<template>
    <div>
        <span class="title">报名审批</span>
        <div class="card">
            <el-card>
                <el-row :gutter="10">
                    <el-tabs v-model="activeName" @tab-click="handleClickTab">
                        <el-tab-pane label="待我审批" name="Batch">
                            <el-row :gutter="10">
                                <el-col :span="12">
                                    <el-button size="small" type="primary" icon="el-icon-s-custom" @click="invitation = true">邀约</el-button>
                                    <el-button size="small" type="inform" plain class="white" icon="el-icon-upload" @click="exportData1()">数据导出</el-button>
                                    <!--                    以下是对话弹窗部分-->
                                    <!--                    以下是对话弹窗部分-->
                                    <el-dialog title="邀约" :visible.sync="invitation">
                                        <hr class="card-divider">
                                        <div style="background-color: #E4EEFF;margin: 20px;height: 50px;text-align: center">
                                            <i class="el-icon-warning-outline"></i>
                                            通过邀约渠道，不受监考批次时间限制!
                                        </div>
                                        <div style="display: flex">
                                            <div style="margin-top: 15px;margin-right: 50px">监考批次</div>
                                            <el-input v-model="input_exam_num" placeholder="请选择监考批次"></el-input>
                                        </div>
                                        <div style="display: flex;margin-top: 20px">
                                            <div style="text-align: left;margin-right: 50px">选择方式</div>
                                            <el-radio v-model="invite_way" label="self">自走流程</el-radio>
                                            <el-radio v-model="invite_way" label="help">帮助报名</el-radio>
                                        </div>
                                        <div>
                                            <el-input placeholder="请输入姓名/工号模糊查询" style="margin: 10px"></el-input>
                                        </div>
                                        <div style="margin: 20px;background-color: #F3F3F3 ;height: 160px;text-align: left">
                                            <br><br>&nbsp;&nbsp; &nbsp;姓名：<br><br>
                                            &nbsp; &nbsp; 工号：<br><br>
                                            &nbsp; &nbsp; 学院：<br><br>
                                        </div>
                                        <hr class="card-divider">
                                        <div style="display: flex;margin-top: 30px">
                                            <div v-if="invite_way === 'self'">
                                                <el-button type="primary" @click="invitation= false" style="width: 125px;margin-left: 230px">提交</el-button>
                                            </div>
                                            <div v-if="invite_way === 'help'">
                                                <el-button type="primary" @click="invitation= false" style="width: 125px;margin-left: 230px">前往补充信息</el-button>
                                            </div>
                                            <el-button type="info" @click="invitation= false" style="width: 125px;margin-left: 70px">取消</el-button>
                                        </div>
                                    </el-dialog>
                                    <!--                    以上是对话弹窗部分-->
                                    <!--                    以上是对话弹窗部分-->
                                    <!--                    以下是对话弹窗部分-->
                                    <!--                    以下是对话弹窗部分-->
                                    <el-dialog title="导出数据" :visible.sync="dialogTableVisibleForUndetermined">
                                        <el-table :data="selectedIdsForUndetermined">
                                            <el-table-column
                                                label="序号">
                                                <template slot-scope="scope">
                                                    {{scope.$index+1}}
                                                </template>
                                            </el-table-column>
                                            <el-table-column
                                                label="报名人"
                                                prop="name">
                                                <template slot-scope="scope">
                                                    <span class="normal">{{ scope.row.trueFacultyName }}</span>
                                                </template>
                                            </el-table-column>
                                            <el-table-column
                                                prop="num"
                                                label="工号">
                                                <template slot-scope="scope">
                                                    <span class="normal">{{ scope.row.trueFacultyId }}</span>
                                                </template>
                                            </el-table-column>
                                            <el-table-column
                                                prop="batch"
                                                label="监考批次" width="180">
                                                <template v-slot="scope">
                                                    <el-button
                                                        type="text"
                                                        size="small"
                                                        @click="handleBatchDetail(scope.row)">{{scope.row.batch.batchName}}
                                                    </el-button>
                                                </template>
                                            </el-table-column>
                                            <el-table-column
                                                prop="address"
                                                label="意向监考校区" width="180">
                                                <template slot-scope="scope">
                                                    <span class="normal">{{ scope.row.targetCampus }}</span>
                                                </template>
                                            </el-table-column>
                                            <el-table-column
                                                prop="detail_uploaded"
                                                label="上传材料" width="180">
                                                <template v-slot="scope">
                                                    <el-button
                                                        size="mini"
                                                        type="text"
                                                        @click="handleEdit(scope.row)">预览</el-button>
                                                </template>
                                            </el-table-column>
                                            <el-table-column
                                                prop="operation"
                                                label="操作" width="180">
                                                <template slot-scope="scope">
                                                    <el-button size="mini" type="text" @click="agreeOrNot(scope.$index)">审批</el-button>
                                                    <!--                                            以下是对话框-->
                                                    <!--                                            以下是对话框-->
                                                    <el-dialog style="text-align: left" title="报名审批" :visible.sync="dialog_Regist_approval">
                                                        <hr class="card-divider">
                                                        <div style="height: 56px;margin: 20px;background-color: #F3F3F3;display: flex;text-align: center">
                                                            <div style="width: 300px;margin-top: 20px">姓名</div>
                                                            <div style="width: 300px;margin-top: 20px">工号</div>
                                                            <div style="width: 300px;margin-top: 20px">操作</div>
                                                        </div>
                                                        <div style="height: 80px;margin: 20px;display: flex;text-align: center">
                                                            <div style="width: 300px;margin-top: 20px">{{dialogData.trueFacultyName}}</div>
                                                            <div style="width: 300px;margin-top: 20px">{{dialogData.trueFacultyId}}</div>
                                                            <div style="width: 300px;margin-top: 20px">
                                                                <el-button type="text" @click="dialog_Regist_approval= false">移除</el-button>
                                                            </div>
                                                        </div>
                                                        <hr class="card-divider">
                                                        <div style="height: 70px; display: flex;">
                                                            <div style="margin: 20px">是否同意报名</div>
                                                            <el-radio v-model="dialogData.approval" label="agree" style="margin: 20px">同意</el-radio>
                                                            <el-radio v-model="dialogData.approval" label="disagree" style="margin: 20px">不同意</el-radio>
                                                        </div>
                                                        <!--                                                    以下是同意时的显示-->
                                                        <div v-if="agreeordis === 'agree'" style="color: #FF2F2F;text-align: left">
                                                            <br><br><div style="margin-top: 20px;text-align: center">提交后不可撤回，请谨慎操作！</div>
                                                        </div>
                                                        <!--                                                    以下是不同意的显示-->
                                                        <div v-if="agreeordis === 'disagree'" style="display: flex">
                                                            <br><br>不同意理由：
                                                            <el-input v-model="disagree_reason" placeholder="请输入不同意理由…" :rows="5" type="textarea"></el-input>
                                                        </div>
                                                        <!--                                                    以下是公共部分-->
                                                        <hr class="card-divider">
                                                        <div style="text-align: center">
                                                            <el-button type="primary" @click="submitApproval">提交</el-button>
                                                            <el-button type="info" @click="dialog_Regist_approval= false">取消</el-button>
                                                        </div>
                                                    </el-dialog>
                                                    <!--                                            以上是对话框-->
                                                    <!--                                            以上是对话框-->
                                                </template>
                                            </el-table-column>
                                        </el-table>
                                    </el-dialog>
                                    <!--                    以上是对话弹窗部分-->
                                    <!--                    以上是对话弹窗部分-->
                                </el-col>
<!--                                <el-col :span="4">-->
<!--                                    <el-select size="small" v-model="value" placeholder="请选择监考批次">-->
<!--                                        <el-option-->
<!--                                            v-for="item in options"-->
<!--                                            :key="item.value"-->
<!--                                            :label="item.label"-->
<!--                                            :value="item.value">-->
<!--                                        </el-option>-->
<!--                                    </el-select>-->
<!--                                </el-col>-->
                                <el-col :span="6" :offset="3">
                                    <el-input size="small" v-model="searchQuery1" placeholder="请输入姓名/工号模糊查询"></el-input>
                                </el-col>
                                <el-col :span="3">
                                    <div class="buttonright">
                                        <el-button size="small" type="primary" icon="el-icon-search" @click="handleSearchForUndetermined">查询</el-button>
                                        <el-button size="small" icon="el-icon-refresh-left" @click="handleResetForUndetermined">重置</el-button>
                                    </div>
                                </el-col>
                            </el-row>
                            <el-table
                                :data="approval_infos"
                                style="width: 100%"
                                @selection-change="handleSelectionChangeForUndetermined">
                                <el-table-column
                                    type="selection"
                                    width="55">
                                </el-table-column>
                                <el-table-column
                                    label="序号">
                                    <template slot-scope="scope">
                                        {{scope.$index+1}}
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    label="报名人"
                                    prop="name">
                                    <template slot-scope="scope">
                                        <span class="normal">{{ scope.row.trueFacultyName }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    prop="num"
                                    label="工号">
                                    <template slot-scope="scope">
                                        <span class="normal">{{ scope.row.trueFacultyId }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    prop="batch"
                                    label="监考批次" width="180">
                                    <template v-slot="scope">
                                        <el-button
                                            type="text"
                                            size="small"
                                            @click="handleBatchDetail(scope.row)">{{scope.row.batch.batchName}}
                                        </el-button>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    prop="address"
                                    label="意向监考校区" width="180">
                                    <template slot-scope="scope">
                                        <span class="normal">{{ scope.row.targetCampus }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    prop="detail_uploaded"
                                    label="上传材料" width="180">
                                    <template v-slot="scope">
                                        <el-button
                                            size="mini"
                                            type="text"
                                            @click="handleEdit(scope.row)">预览</el-button>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    prop="operation"
                                    label="操作" width="180">
                                    <template slot-scope="scope">
                                        <el-button size="mini" type="text" @click="agreeOrNot(scope.$index)">审批</el-button>
                                        <!--                                            以下是对话框-->
                                        <!--                                            以下是对话框-->
                                        <el-dialog style="text-align: left" title="报名审批" :visible.sync="dialog_Regist_approval">
                                            <hr class="card-divider">
                                            <div style="height: 56px;margin: 20px;background-color: #F3F3F3;display: flex;text-align: center">
                                                <div style="width: 300px;margin-top: 20px">姓名</div>
                                                <div style="width: 300px;margin-top: 20px">工号</div>
                                                <div style="width: 300px;margin-top: 20px">操作</div>
                                            </div>
                                            <div style="height: 80px;margin: 20px;display: flex;text-align: center">
                                                <div style="width: 300px;margin-top: 20px">{{dialogData.trueFacultyName}}</div>
                                                <div style="width: 300px;margin-top: 20px">{{dialogData.trueFacultyId}}</div>
                                                <div style="width: 300px;margin-top: 20px">
                                                    <el-button type="text" @click="dialog_Regist_approval= false">移除</el-button>
                                                </div>
                                            </div>
                                            <hr class="card-divider">
                                            <div style="height: 70px; display: flex;">
                                                <div style="margin: 20px">是否同意报名</div>
                                                <el-radio v-model="dialogData.approval" label="agree" style="margin: 20px">同意</el-radio>
                                                <el-radio v-model="dialogData.approval" label="disagree" style="margin: 20px">不同意</el-radio>
                                            </div>
                                            <!--                                                    以下是同意时的显示-->
                                            <div v-if="agreeordis === 'agree'" style="color: #FF2F2F;text-align: left">
                                                <br><br><div style="margin-top: 20px;text-align: center">提交后不可撤回，请谨慎操作！</div>
                                            </div>
                                            <!--                                                    以下是不同意的显示-->
                                            <div v-if="agreeordis === 'disagree'" style="display: flex">
                                                <br><br>不同意理由：
                                                <el-input v-model="disagree_reason" placeholder="请输入不同意理由…" :rows="5" type="textarea"></el-input>
                                            </div>
                                            <!--                                                    以下是公共部分-->
                                            <hr class="card-divider">
                                            <div style="text-align: center">
                                                <el-button type="primary" @click="submitApproval">提交</el-button>
                                                <el-button type="info" @click="dialog_Regist_approval= false">取消</el-button>
                                            </div>
                                        </el-dialog>
                                        <!--                                            以上是对话框-->
                                        <!--                                            以上是对话框-->
                                    </template>
                                </el-table-column>
                            </el-table>
                            <el-pagination
                                style="margin-top: 20px"
                                background
                                @size-change="handleSizeChange1"
                                @current-change="handleCurrentChange1"
                                :current-page="pageNo1"
                                :page-sizes="[3, 10, 20, 40]"
                                :page-size="pageSize1"
                                layout="total, sizes, prev, pager, next, jumper"
                                :total=total1>
                            </el-pagination>
                        </el-tab-pane>
<!--                                            分界线                                         -->
                        <el-tab-pane label="同意报名" name="Agree">
                            <el-row :gutter="10">
                                <el-col :span="12">
                                    <el-button size="small" type="primary" icon="el-icon-s-custom" @click="invitation = true">邀约</el-button>
                                    <el-button size="small" type="inform" plain class="white" icon="el-icon-upload" @click="exportData2()">数据导出</el-button>
                                    <!--                    以下是对话弹窗部分-->
                                    <!--                    以下是对话弹窗部分-->
                                    <el-dialog title="邀约" :visible.sync="invitation">
                                        <hr class="card-divider">
                                        <div style="background-color: #E4EEFF;margin: 20px;height: 50px;text-align: center">
                                            <i class="el-icon-warning-outline"></i>
                                            通过邀约渠道，不受监考批次时间限制!
                                        </div>
                                        <div style="display: flex">
                                            <div style="margin-top: 15px;margin-right: 50px">监考批次</div>
                                            <el-input v-model="input_exam_num" placeholder="请选择监考批次"></el-input>
                                        </div>
                                        <div style="display: flex;margin-top: 20px">
                                            <div style="text-align: left;margin-right: 50px">选择方式</div>
                                            <el-radio v-model="invite_way" label="self">自走流程</el-radio>
                                            <el-radio v-model="invite_way" label="help">帮助报名</el-radio>
                                        </div>
                                        <div>
                                            <el-input placeholder="请输入姓名/工号模糊查询" style="margin: 10px"></el-input>
                                        </div>
                                        <div style="margin: 20px;background-color: #F3F3F3 ;height: 160px;text-align: left">
                                            <br><br>&nbsp;&nbsp; &nbsp;姓名：<br><br>
                                            &nbsp; &nbsp; 工号：<br><br>
                                            &nbsp; &nbsp; 学院：<br><br>
                                        </div>
                                        <hr class="card-divider">
                                        <div style="display: flex;margin-top: 30px">
                                            <div v-if="invite_way === 'self'">
                                                <el-button type="primary" @click="invitation= false" style="width: 125px;margin-left: 230px">提交</el-button>
                                            </div>
                                            <div v-if="invite_way === 'help'">
                                                <el-button type="primary" @click="invitation= false" style="width: 125px;margin-left: 230px">前往补充信息</el-button>
                                            </div>
                                            <el-button type="info" @click="invitation= false" style="width: 125px;margin-left: 70px">取消</el-button>
                                        </div>
                                    </el-dialog>
                                    <!--                    以上是对话弹窗部分-->
                                    <!--                    以上是对话弹窗部分-->
                                    <el-dialog title="导出数据" :visible.sync="dialogTableVisibleForAgreed">
                                        <el-table :data="selectedIdsForAgreed">
                                            <el-table-column
                                                label="序号">
                                                <template slot-scope="scope">
                                                    {{scope.$index+1}}
                                                </template>
                                            </el-table-column>
                                            <el-table-column
                                                label="报名人"
                                                prop="name">
                                                <template slot-scope="scope">
                                                    <span class="normal">{{scope.row.trueFacultyName}}</span>
                                                </template>
                                            </el-table-column>
                                            <el-table-column
                                                prop="num"
                                                label="工号">
                                                <template slot-scope="scope">
                                                    <span class="normal">{{scope.row.trueFacultyId}}</span>
                                                </template>
                                            </el-table-column>
                                            <el-table-column
                                                prop="batch"
                                                label="监考批次" width="180">
                                                <template v-slot="scope">
                                                    <el-button
                                                        type="text"
                                                        size="small"
                                                        @click="handleBatchDetail(scope.row)">{{scope.row.batch.batchName}}
                                                    </el-button>
                                                </template>
                                            </el-table-column>
                                            <el-table-column
                                                prop="detail_uploaded"
                                                label="上传材料" width="180">
                                                <template v-slot="scope">
                                                    <el-button
                                                        size="mini"
                                                        type="text"
                                                        @click="handleEdit(scope.row)">预览</el-button>
                                                </template>
                                            </el-table-column>
                                            <el-table-column
                                                prop="address"
                                                label="操作" width="180">
                                                <template v-slot="scope">
                                                    <el-button
                                                        size="mini"
                                                        type="text"
                                                        @click="handleAgreed(scope.row)">查看</el-button>
                                                </template>
                                            </el-table-column>
                                        </el-table>
                                    </el-dialog>
                                </el-col>
<!--                                <el-col :span="4">-->
<!--                                    <el-select size="small" v-model="value" placeholder="请选择监考批次">-->
<!--                                        <el-option-->
<!--                                            v-for="item in options"-->
<!--                                            :key="item.value"-->
<!--                                            :label="item.label"-->
<!--                                            :value="item.value">-->
<!--                                        </el-option>-->
<!--                                    </el-select>-->
<!--                                </el-col>-->
                                <el-col :span="6" :offset="3">
                                    <el-input size="small" v-model="searchQuery2" placeholder="请输入姓名/工号模糊查询"></el-input>
                                </el-col>
                                <el-col :span="3">
                                    <div class="buttonright">
                                        <el-button size="small" type="primary" icon="el-icon-search" @click="handleSearchForAgreed">查询</el-button>
                                        <el-button size="small" icon="el-icon-refresh-left" @click="handleResetForAgreed">重置</el-button>
                                    </div>
                                </el-col>
                            </el-row>
                            <el-table
                                :data="agreeApproval_infos"
                                style="width: 100%"
                                @selection-change="handleSelectionChangeForAgreed">
                                <el-table-column
                                    type="selection"
                                    width="55">
                                </el-table-column>
                                <el-table-column
                                    label="序号">
                                    <template slot-scope="scope">
                                        {{scope.$index+1}}
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    label="报名人"
                                    prop="name">
                                    <template slot-scope="scope">
                                        <span class="normal">{{scope.row.trueFacultyName}}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    prop="num"
                                    label="工号">
                                    <template slot-scope="scope">
                                        <span class="normal">{{scope.row.trueFacultyId}}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    prop="batch"
                                    label="监考批次" width="180">
                                    <template v-slot="scope">
                                        <el-button
                                            type="text"
                                            size="small"
                                            @click="handleBatchDetail(scope.row)">{{scope.row.batch.batchName}}
                                        </el-button>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    prop="detail_uploaded"
                                    label="上传材料" width="180">
                                    <template v-slot="scope">
                                        <el-button
                                            size="mini"
                                            type="text"
                                            @click="handleEdit(scope.row)">预览</el-button>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    prop="address"
                                    label="操作" width="180">
                                    <template v-slot="scope">
                                        <el-button
                                            size="mini"
                                            type="text"
                                           @click="handleAgreed(scope.row)">查看</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                            <el-pagination
                                style="margin-top: 20px"
                                background
                                @size-change="handleSizeChange2"
                                @current-change="handleCurrentChange2"
                                :current-page="pageNo2"
                                :page-sizes="[3, 10, 20, 40]"
                                :page-size="pageSize2"
                                layout="total, sizes, prev, pager, next, jumper"
                                :total=total2>
                            </el-pagination>
                        </el-tab-pane>
<!--                                            分界线                                         -->
                        <el-tab-pane label="不同意报名" name="Disagree">
                            <el-row :gutter="10">
                                <el-col :span="12">
                                    <el-button size="small" type="primary" icon="el-icon-s-custom" @click="invitation = true">邀约</el-button>
                                    <el-button size="small" type="inform" plain class="white" icon="el-icon-upload" @click="exportData3()">数据导出</el-button>
                                    <!--                    以下是对话弹窗部分-->
                                    <!--                    以下是对话弹窗部分-->
                                    <el-dialog title="邀约" :visible.sync="invitation">
                                        <hr class="card-divider">
                                        <div style="background-color: #E4EEFF;margin: 20px;height: 50px;text-align: center">
                                            <i class="el-icon-warning-outline"></i>
                                            通过邀约渠道，不受监考批次时间限制!
                                        </div>
                                        <div style="display: flex">
                                            <div style="margin-top: 15px;margin-right: 50px">监考批次</div>
                                            <el-input v-model="input_exam_num" placeholder="请选择监考批次"></el-input>
                                        </div>
                                        <div style="display: flex;margin-top: 20px">
                                            <div style="text-align: left;margin-right: 50px">选择方式</div>
                                            <el-radio v-model="invite_way" label="self">自走流程</el-radio>
                                            <el-radio v-model="invite_way" label="help">帮助报名</el-radio>
                                        </div>
                                        <div>
                                            <el-input placeholder="请输入姓名/工号模糊查询" style="margin: 10px"></el-input>
                                        </div>
                                        <div style="margin: 20px;background-color: #F3F3F3 ;height: 160px;text-align: left">
                                            <br><br>&nbsp;&nbsp; &nbsp;姓名：<br><br>
                                            &nbsp; &nbsp; 工号：<br><br>
                                            &nbsp; &nbsp; 学院：<br><br>
                                        </div>
                                        <hr class="card-divider">
                                        <div style="display: flex;margin-top: 30px">
                                            <div v-if="invite_way === 'self'">
                                                <el-button type="primary" @click="invitation= false" style="width: 125px;margin-left: 230px">提交</el-button>
                                            </div>
                                            <div v-if="invite_way === 'help'">
                                                <el-button type="primary" @click="invitation= false" style="width: 125px;margin-left: 230px">前往补充信息</el-button>
                                            </div>
                                            <el-button type="info" @click="invitation= false" style="width: 125px;margin-left: 70px">取消</el-button>
                                        </div>
                                    </el-dialog>
                                    <!--                    以上是对话弹窗部分-->
                                    <!--                    以上是对话弹窗部分-->
                                    <el-dialog title="导出数据" :visible.sync="dialogTableVisibleForDisagreed">
                                        <el-table
                                            :data="selectedIdsForDisagreed">
                                            <el-table-column
                                                label="序号">
                                                <template slot-scope="scope">
                                                    {{scope.$index+1}}
                                                </template>
                                            </el-table-column>
                                            <el-table-column
                                                label="报名人"
                                                prop="name">
                                                <template slot-scope="scope">
                                                    <span class="normal">{{scope.row.trueFacultyName}}</span>
                                                </template>
                                            </el-table-column>
                                            <el-table-column
                                                prop="num"
                                                label="工号">
                                                <template slot-scope="scope">
                                                    <span class="normal">{{scope.row.trueFacultyId}}</span>
                                                </template>
                                            </el-table-column>
                                            <el-table-column
                                                prop="batch"
                                                label="监考批次" width="180">
                                                <template v-slot="scope">
                                                    <el-button
                                                        type="text"
                                                        size="small"
                                                        @click="handleBatchDetail(scope.row)">{{scope.row.batch.batchName}}
                                                    </el-button>
                                                </template>
                                            </el-table-column>
                                            <el-table-column
                                                prop="detail_uploaded"
                                                label="上传材料" width="180">
                                                <template v-slot="scope">
                                                    <el-button
                                                        size="mini"
                                                        type="text"
                                                        @click="handleEdit(scope.row)">预览</el-button>
                                                </template>
                                            </el-table-column>
                                            <el-table-column
                                                prop="address"
                                                label="操作" width="180">
                                                <template v-slot="scope">
                                                    <el-button
                                                        size="mini"
                                                        type="text"
                                                        @click="handleDisagreed(scope.row)">查看</el-button>
                                                </template>
                                            </el-table-column>
                                        </el-table>
                                    </el-dialog>
                                </el-col>
<!--                                <el-col :span="4">-->
<!--                                    <el-select size="small" v-model="value" placeholder="请选择监考批次">-->
<!--                                        <el-option-->
<!--                                            v-for="item in options"-->
<!--                                            :key="item.value"-->
<!--                                            :label="item.label"-->
<!--                                            :value="item.value">-->
<!--                                        </el-option>-->
<!--                                    </el-select>-->
<!--                                </el-col>-->
                                <el-col :span="6" :offset="3">
                                    <el-input size="small" v-model="searchQuery3" placeholder="请输入姓名/工号模糊查询"></el-input>
                                </el-col>
                                <el-col :span="3">
                                    <div class="buttonright">
                                        <el-button size="small" type="primary" icon="el-icon-search" @click="handleSearchForDisagreed">查询</el-button>
                                        <el-button size="small" icon="el-icon-refresh-left" @click="handleResetForDisagreed">重置</el-button>
                                    </div>
                                </el-col>
                            </el-row>
                            <el-table
                                :data="disagreeApproval_infos"
                                style="width: 100%"
                                @selection-change="handleSelectionChangeForDisagreed">
                                <el-table-column
                                    type="selection"
                                    width="55">
                                </el-table-column>
                                <el-table-column
                                    label="序号">
                                    <template slot-scope="scope">
                                        {{scope.$index+1}}
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    label="报名人"
                                    prop="name">
                                    <template slot-scope="scope">
                                        <span class="normal">{{scope.row.trueFacultyName}}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    prop="num"
                                    label="工号">
                                    <template slot-scope="scope">
                                        <span class="normal">{{scope.row.trueFacultyId}}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    prop="batch"
                                    label="监考批次" width="180">
                                    <template v-slot="scope">
                                        <el-button
                                            type="text"
                                            size="small"
                                            @click="handleBatchDetail(scope.row)">{{scope.row.batch.batchName}}
                                        </el-button>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    prop="detail_uploaded"
                                    label="上传材料" width="180">
                                    <template v-slot="scope">
                                        <el-button
                                            size="mini"
                                            type="text"
                                            @click="handleEdit(scope.row)">预览</el-button>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    prop="address"
                                    label="操作" width="180">
                                    <template v-slot="scope">
                                        <el-button
                                            size="mini"
                                            type="text"
                                            @click="handleDisagreed(scope.row)">查看</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                            <el-pagination
                                style="margin-top: 20px"
                                background
                                @size-change="handleSizeChange3"
                                @current-change="handleCurrentChange3"
                                :current-page="pageNo3"
                                :page-sizes="[3, 10, 20, 40]"
                                :page-size="pageSize3"
                                layout="total, sizes, prev, pager, next, jumper"
                                :total=total3>
                            </el-pagination>
                        </el-tab-pane>
                    </el-tabs>
                </el-row>
            </el-card>
        </div>
    </div>
</template>

<script>
import {
  agreeApprovalTable,
  approvalTable,
  disagreeApprovalTable,
  getuserid,
  selectAgreeByName,
  selectDisagreeByName,
  selectWaitingByName,
  submitAgree,
  submitDisagree
} from '../../api/office'
import * as XLSX from 'xlsx'

export default {
  name: 'Approval',
  data () {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      input: '',
      approval_infos: [],
      agreeApproval_infos: [],
      disagreeApproval_infos: [],
      selectedIdsForUndetermined: [],
      selectedIdsForDisagreed: [],
      selectedIdsForAgreed: [],
      dialogTableVisibleForUndetermined: false,
      dialogTableVisibleForDisagreed: false,
      dialogTableVisibleForAgreed: false,
      input_exam_num: '',
      invitation: false,
      invite_way: 'self',
      disagree_reason: '',
      agreeordis: 'agree',
      dialog_Regist_approval: false,
      activeName: 'Batch',
      dialogData: {},
      searchQuery1: '',
      searchQuery2: '',
      searchQuery3: '',
      filteredDataForUndetermined: [],
      filteredDataForAgreed: [],
      filteredDataForDisagreed: [],
      total1: 0,
      total2: 0,
      total3: 0,
      pageNo1: 1,
      pageSize1: 3,
      pageNo2: 1,
      pageSize2: 3,
      pageNo3: 1,
      pageSize3: 3
    }
  },
  methods: {
    exportData1 () {
      // const data = this.selectedIds.map(index => this.tableData[index])
      const data = this.selectedIdsForUndetermined
      const worksheet = XLSX.utils.json_to_sheet(data)
      const workbook = XLSX.utils.book_new()
      this.dialogTableVisibleForUndetermined = true
      XLSX.utils.book_append_sheet(workbook, worksheet, '报名审批之待我审批')
      XLSX.writeFile(workbook, '报名审批之待我审批.xlsx')
    },
    exportData2 () {
      // const data = this.selectedIds.map(index => this.tableData[index])
      const data = this.selectedIdsForAgreed
      const worksheet = XLSX.utils.json_to_sheet(data)
      const workbook = XLSX.utils.book_new()
      this.dialogTableVisibleForAgreed = true
      XLSX.utils.book_append_sheet(workbook, worksheet, '报名审批之已审批')
      XLSX.writeFile(workbook, '报名审批之已审批.xlsx')
    },
    exportData3 () {
      // const data = this.selectedIds.map(index => this.tableData[index])
      const data = this.selectedIdsForDisagreed
      const worksheet = XLSX.utils.json_to_sheet(data)
      const workbook = XLSX.utils.book_new()
      this.dialogTableVisibleForDisagreed = true
      XLSX.utils.book_append_sheet(workbook, worksheet, '报名审批之未审批')
      XLSX.writeFile(workbook, '报名审批之未审批.xlsx')
    },
    handleSign () {
      this.$router.push({
        name: 'ApprovalDetails'
      })
    },
    handleSelectionChangeForUndetermined (val) {
      this.selectedIdsForUndetermined = val
    },
    handleSelectionChangeForAgreed (val) {
      this.selectedIdsForAgreed = val
    },
    handleSelectionChangeForDisagreed (val) {
      this.selectedIdsForDisagreed = val
    },
    handleClickTab (tab, event) {
      if (tab.name === 'Batch') {
        this.handleResetForUndetermined()
      } else if (tab.name === 'Agree') {
        this.handleResetForAgreed()
      } else {
        this.handleSearchForDisagreed()
      }
    },
    handleEdit (row) {
      this.$router.push({
        name: 'ApprovalDetails',
        params: {batchName: row.batch.batchName, trueFacultyId: row.trueFacultyId}
      })
    },
    handleAgreed (row) {
      this.$router.push({
        name: 'AgreeDetails',
        params: {batchName: row.batch.batchName, trueFacultyId: row.trueFacultyId}
      })
    },
    handleDisagreed (row) {
      this.$router.push({
        name: 'DisagreeDetails',
        params: {batchName: row.batch.batchName, trueFacultyId: row.trueFacultyId}
      })
    },
    handleBatchDetail (row) {
      this.$router.push({
        name: 'BatchDetail',
        params: {batchname: row.batch.batchName}
      })
    },
    agreeOrNot (index) {
      console.log(this.filteredDataForUndetermined)
      // this.dialogData = this.filteredDataForUndetermined[index]
      this.dialogData = this.approval_infos[index]
      this.dialog_Regist_approval = true
      console.info(this.dialogData)
    },
    submitApproval () {
      this.dialog_Regist_approval = false
      console.info(this.dialogData)
      console.log(this.dialogData.approval)
      if (this.dialogData.approval === 'agree') {
        getuserid().then(res => {
          const userId = res.data.userId
          submitAgree(userId, this.dialogData.trueFacultyId, this.dialogData.batch.batchName, this.dialogData.targetCampus).then(res => {
            if (res.data === true) {
              this.$message({
                message: '通过成功',
                type: 'success'
              })
            } else if (res.data === false) {
              this.$message({
                message: '通过失败，请稍后重试',
                type: 'warning'
              })
            }
          })
        })
      } else {
        getuserid().then(res => {
          const userId = res.data.userId
          submitDisagree(userId, this.dialogData.trueFacultyId, this.dialogData.batch.batchName).then(res => {
            if (res.data === true) {
              this.$message({
                message: '拒绝成功',
                type: 'success'
              })
            } else if (res.data === false) {
              this.$message({
                message: '拒绝失败，请稍后重试',
                type: 'warning'
              })
            }
          })
        })
      }
    },
    fetchItemsForUndetermined () {
      this.itemsForUndetermined = this.$data.approval_infos
      console.log(this.itemsForUndetermined, 'this.itemsForUndetermined')
      this.filteredDataForUndetermined = this.itemsForUndetermined || []
    },
    fetchItemsForAgreed () {
      this.itemsForAgreed = this.$data.agreeApproval_infos
      this.filteredDataForAgreed = this.itemsForAgreed
    },
    fetchItemsForDisagreed () {
      this.itemsForDisagreed = this.$data.disagreeApproval_infos
      this.filteredDataForDisagreed = this.itemsForDisagreed
    },
    handleSearchForUndetermined () {
      if (this.searchQuery1 != null) {
        getuserid().then(res => {
          const userId = res.data.userId
          selectWaitingByName(userId, this.searchQuery1, this.pageSize1, this.pageNo1).then(res => {
            this.approval_infos = res.data.records
            this.total1 = res.data.total
          })
        })
      }
    },
    handleResetForUndetermined () {
      this.searchQuery1 = ''
      this.getApprovalTabel()
    },
    handleSearchForAgreed () {
      if (this.searchQuery2 != null) {
        getuserid().then(res => {
          const userId = res.data.userId
          selectAgreeByName(userId, this.searchQuery2, this.pageSize2, this.pageNo2).then(res => {
            this.agreeApproval_infos = res.data.records
            this.total2 = res.data.total
          })
        })
      }
    },
    handleResetForAgreed () {
      this.searchQuery2 = ''
      this.getAgreeApprovalTabel()
    },
    handleSearchForDisagreed () {
      if (this.searchQuery3 != null) {
        getuserid().then(res => {
          const userId = res.data.userId
          selectDisagreeByName(userId, this.searchQuery3, this.pageSize3, this.pageNo3).then(res => {
            this.disagreeApproval_infos = res.data.records
            this.total3 = res.data.total
          })
        })
      }
    },
    handleResetForDisagreed () {
      this.searchQuery3 = ''
      this.getDisagreeApprovalTabel()
    },
    getApprovalTabel () {
      getuserid().then(res => {
        const userId = res.data.userId
        console.log('userId:', userId)

        approvalTable(userId, this.pageSize1, this.pageNo1).then(res => {
          this.approval_infos = res.data.records
          this.total1 = res.data.total

          console.info('开始')
          console.info(this.approval_infos)
          console.info('结束')
        }).catch(error => {
          console.error('Error fetching approval table:', error)
          // Handle errors as needed
        })
      }).catch(error => {
        console.error('Error fetching userId:', error)
        // Handle errors from getuserid() if necessary
      })
    },
    getAgreeApprovalTabel () {
      getuserid().then(res => {
        console.info(res.data.userId)
        const userId = res.data.userId
        console.log('userId:', userId)

        agreeApprovalTable(userId, this.pageSize2, this.pageNo2).then(res => {
          this.agreeApproval_infos = res.data.records
          this.total2 = res.data.total
          console.info('开始')
          console.info(this.agreeApproval_infos)
          console.info('结束')
        }).catch(error => {
          console.error('Error fetching approval table:', error)
          // Handle errors as needed
        })
      }).catch(error => {
        console.error('Error fetching userId:', error)
        // Handle errors from getuserid() if necessary
      })
    },
    getDisagreeApprovalTabel () {
      getuserid().then(res => {
        console.info(res.data.userId)
        const userId = res.data.userId
        console.log('userId:', userId)

        disagreeApprovalTable(userId, this.pageSize3, this.pageNo3).then(res => {
          this.disagreeApproval_infos = res.data.records
          this.total3 = res.data.total
          console.info('开始')
          // console.info(this.disagreeApproval_infos)
          console.info('结束')
        }).catch(error => {
          console.error('Error fetching approval table:', error)
          // Handle errors as needed
        })
      }).catch(error => {
        console.error('Error fetching userId:', error)
        // Handle errors from getuserid() if necessary
      })
    },
    handleSizeChange1 (value) {
      this.pageSize1 = value
      this.getApprovalTabel()
    },
    handleSizeChange2 (value) {
      this.pageSize2 = value
      console.info(this.pageSize2)
      this.getAgreeApprovalTabel()
    },
    handleSizeChange3 (value) {
      this.pageSize3 = value
      this.getApprovalTabel()
    },
    handleCurrentChange1 (value) {
      this.pageNo1 = value
      this.getApprovalTabel()
    },
    handleCurrentChange2 (value) {
      this.pageNo2 = value
      this.getAgreeApprovalTabel()
    },
    handleCurrentChange3 (value) {
      this.pageNo3 = value
      this.getDisagreeApprovalTabel()
    }
  },
  mounted () {
    this.fetchItemsForUndetermined()
    this.fetchItemsForAgreed()
    this.fetchItemsForDisagreed()
  },
  created () {
    this.getApprovalTabel()
    this.getAgreeApprovalTabel()
    this.getDisagreeApprovalTabel()
  }
}
</script>

<style scoped>
.title{
    width: 140px;
    height: 28px;
    font-weight: 500;
    font-size: 20px;
    color: #000000e6;
    line-height: 28px;
    padding: 20px;
    display: block;
}

.card{
    margin-left: 20px;
    margin-right: 20px;
}
/deep/.el-input--small .el-input__inner {
    font-weight: 400;
    font-size: 14px;
    color: #000000e6;
    text-align: left;
    line-height: 22px;
}
/deep/.el-button--primary,.el-tag{
    background: #166AFF;
    border-radius: 3px;
}
/deep/ .el-button--inform {
    border: 1px solid #166AFF;
    border-radius: 3px;
    background: #FFFFFF;
    color: #166AFF;
}
/deep/.has-gutter{
    background: #757F9A;
    font-weight: 400;
    font-size: 14px;
    color: #00000099;
    text-align: left;
    line-height: 22px;
}
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
    margin-left: 5px;
}
.el-icon-arrow-down {
    font-size: 12px;
}
/deep/.el-dropdown{
    font-size: 12px;
}
/deep/ .el-table th.el-table__cell{
    background-color: #F3F3F3;
}
.el-row{
    margin-top: 10px;
    margin-bottom: 10px;
}
/deep/.el-pagination{
    text-align: right;
}
</style>
