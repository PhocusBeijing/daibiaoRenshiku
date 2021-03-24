<template>
  <div>
    <!-- 路径导航 -->
    <div class="ht-50 white-bg pr">
      <div class="dis-ib pr lf-20 tp-17">
        <span class="dis-ib primarylight-bg wi-2 ht-18"></span>
        <div class="dis-ib pr bm-4 fw-500 lf-8">
          <a-breadcrumb>
            <a-breadcrumb-item><a href="">上级</a></a-breadcrumb-item>
            <a-breadcrumb-item>下级</a-breadcrumb-item>
          </a-breadcrumb>
        </div>
      </div>
    </div>
    <!-- 操作栏 -->
    <div class="pd-16">
      <div class="pd-20 ht-72 white-bg bdr-4 pr">
        <div class="dis-ib">
          <button class="btn"><a-icon type="account-book" /> 操作A</button>
          <button class="btn"><a-icon type="account-book" /> 操作B</button>
        </div>
        <div class="dis-ib fr pr tp-8 rt-6 primarylight">
          <span class="dis-ib hover mr-20"><a-icon type="account-book" /> 操作A</span>
          <span class="dis-ib hover"><a-icon type="account-book" /> 操作B</span>
        </div>
      </div>
    </div>
    <!-- 表格 -->
    <div class="pl-16 pr-16">
      <div
        :style="'height: '+(screenHeight-236)+'px;'"
        class="white-bg pd-20 bdr-4">
        <a-table
          bordered
          :columns="columns"
          :row-selection="rowSelection"
          :data-source="tableData">
          <a slot="name" @click="clickEvent(record)" slot-scope="text,record">{{ text }}</a>
        </a-table>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import { mapGetters } from 'vuex'
const rowSelection = {
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows)
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows)
  }
}
export default {
  name: 'welcome',
  data () {
    return {
      rowSelection,
      columns: [
        {
          title: '姓名',
          dataIndex: 'name',
          scopedSlots: { customRender: 'name' },
          key: 'name'
        }, {
          title: '年龄',
          dataIndex: 'age',
          key: 'age'
        }, {
          title: '地址',
          dataIndex: 'address',
          key: 'address'
        }
      ],
      tableData: [
        {
          key: '1',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park'
        },
        {
          key: '2',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park'
        }, {
          key: '3',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park'
        },
        {
          key: '4',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park'
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'screenHeight'
    ])
  },
  methods: {
    clickEvent (item) {
      console.log(item)
    }
  }
}
</script>
