<template>
  <v-dialog
    v-model="shouldShowDialog"
    :persistent="dialog.persistent"
    @update:returnValue="hanlderClickOverlay"
  >
    <v-card style="text-align: left">
      <v-card-title v-if="dialog.title" class="headline">{{ dialog.title }}</v-card-title>
      <template v-if="dialog.component">
        <!-- <v-card-text>{{ dialog.message }}</v-card-text> -->
        <v-card-text>
          <component ref="comp" :is="dialog.component"></component>
        </v-card-text>
      </template>
      <template v-else-if="dialog.message">
        <v-card-text>{{ dialog.message }}</v-card-text>
      </template>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn v-if="dialog.leftBtn" color="green darken-1" flat @click="handleLeftBtn">{{ dialog.leftBtn.text }}</v-btn>
        <v-btn v-if="dialog.rightBtn" color="green darken-1" flat @click="handleRightBtn">{{ dialog.rightBtn.text }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Getter, State, Mutation } from 'vuex-class'
import mixin from '@/mixin'

@Component({
  name: 'Dialog'
})
export default class Dialog extends Vue {
  /* props */
  /* vuex */
  @State('dialog') dialog: any
  @Getter('shouldShowDialog') shouldShowDialog: any
  @Mutation('closeDialog') closeDialog: any
  /* data */
  /* computed */
  /* methods */
  async handleLeftBtn () {
    if (this.dialog.leftBtn && typeof this.dialog.leftBtn.handler === 'function') {
      let payload
      if (this.$refs.comp && (this.$refs.comp as any).collect) {
        payload = (this.$refs.comp as any).collect()
      }
      const flag = await this.dialog.leftBtn.handler(payload)
      if (flag) {
        return
      }
    }
    this.closeDialog()
  }

  async handleRightBtn () {
    if (this.dialog.RightBtn && typeof this.dialog.RightBtn.handler === 'function') {
      let payload
      if (this.$refs.comp && (this.$refs.comp as any).collect) {
        payload = (this.$refs.comp as any).collect()
      }
      const flag = await this.dialog.RightBtn.handler(payload)
      if (flag) {
        return
      }
    }
    this.closeDialog()
  }

  hanlderClickOverlay () {
    this.closeDialog()
  }
  /* lifecycle */
  // mounted () {
  //   this.$on('update:returnValue', this.closeDialog)
  // }
}
</script>

<style>

</style>
