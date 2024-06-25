<template>
  <div></div>
</template>

<script lang="ts">
import { type CSSProperties, computed, defineComponent, ref, type Ref } from 'vue'
import { buttonGroupEmits, buttonGroupProps } from './button-group'
import useTheme from '@/hooks/use-theme'
import { buttonGroupLight } from '../styles/light'

export default defineComponent({
  name: 'ClButtonGroup',
  props: buttonGroupProps,
  emits: buttonGroupEmits,
  setup(props, { emit }) {
    const buttonGroupRef: Ref<HTMLElement | undefined> = ref<HTMLElement | undefined>()

    const themeRef = useTheme('buttonGroup', buttonGroupLight)

    const cssVarsRef = computed<CSSProperties>(() => {
      const theme = themeRef.value
      const { self } = theme

      return {}
    })

    return {
      cssVars: cssVarsRef,
      buttonGroupRef
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../styles/button-group.scss';
</style>
