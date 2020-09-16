<template>
  <el-menu>
    <div v-for="v in menu" :key="v.id">
      <el-submenu index="1" v-if="v.children">
        <template slot="title">
          <i class="el-icon-message"></i>
          {{v.label}}
        </template>
        <el-menu-item @click="handleItem(child)"  v-for="child in v.children" :key="child.id">{{child.label}}</el-menu-item>
      </el-submenu>
      <el-menu-item  v-else @click="handleItem(v)">{{v.label}}</el-menu-item>
    </div>
  </el-menu>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {},
})
export default class Menus extends Vue {
  menu: any[] = [
    {
      label: "form表单",
      url: "form",
      ico: "el-icon-location",
      id: 1,
      children: [
        {
          label: "行内表单",
          url: "/form/formInline",
          ico: "el-icon-setting",
          id: 11,
        },
        {
          label: "带校验的表单",
          url: "/form/formValidator",
          ico: "el-icon-picture-outline",
          id: 12,
        },
      ],
    },
    {
      label: "table组件一",
      url: "/table1",
      ico: "el-icon-location",
      id: 2,
    },
    {
      label: "table组件二",
      url: "/table2",
      ico: "el-icon-location",
      id: 3,
    }
  ]
  private handleItem(row: any){
    if(row.url === this.$route.path) {
      return
    }
    this.$router.push(row.url)
  }
}
</script>
<style>
</style>