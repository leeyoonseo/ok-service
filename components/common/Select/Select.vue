<template>
  <client-only>
    <div v-click-outside="handleUnexpand" :class="classes" @click.prevent="handleClickSelect">
      <div class="select-value">
        <span class="value">
          {{ selectedText || placeholder || '선택하세요' }}
        </span>
      </div>
      <!-- TODO: PC에서 사용, custom -->
      <template v-if="true">
        <div v-show="isExpanded" class="select-options-wrapper">
          <ul class="select-options">
            <li
              v-for="option in options"
              :key="option.value"
              :class="`option ${option.value === value ? 'selected' : ''}`"
              @click="() => handleUpdateValue(option)"
            >
              {{ option.text }}
            </li>
          </ul>
        </div>
      </template>

      <!-- TODO: 모바일 네이티브 사용 -->
      <select v-if="false" class="select-native" :value="value" @change="handleChangeSelect">
        <options v-if="!selectedText" selected>선택하세요</options>
        <options v-for="(option, index) in options" :key="`option-${index}`" :value="option.value">
          {{ option.text }}
        </options>
      </select>
    </div>
  </client-only>
</template>
<script lang="ts">
import Vue from 'vue';
import clickoutside from '~/mixin/click-outside';

interface IOption {
  value: string;
  text: string | number;
}

export default Vue.extend({
  name: 'TheSelect',
  mixins: [clickoutside],
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number],
      default: '',
    },
    status: {
      type: String,
      default: 'enabled',
      validator: (val) => ['enabled', 'disabled', 'error'].includes(val),
    },
    options: {
      type: Array,
      required: true,
      default: () => [
        {
          value: 'NONE',
          text: '선택',
        },
      ],
    },
  },
  data() {
    return {
      isExpanded: false,
    };
  },
  computed: {
    classes(): [string, string, object] {
      return [
        'select-wrapper',
        `status-${this.status}`,
        {
          'status-initial': !this.value,
          'status-selected': this.value,
          'status-expanded': this.isExpanded,
        },
      ];
    },
    selectedText(): string | number {
      // TODO: 1번 반복 함수 사용 시 {__ob__: Observer} 로 인해 type 선언이 어려움
      // 해당 내용 강의 후 수정할 것
      // const a = JSON.parse(JSON.stringify(this.options));
      // console.log('a', a);
      // any 해결하기
      const selected = this.options.find((o: any) => o.value === this.value) as IOption | undefined;
      return selected ? selected.text : '';
    },
  },
  methods: {
    handleClickSelect() {
      if (this.status === 'disabled') return false;
      this.isExpanded = !this.isExpanded;
    },
    handleChangeSelect({ target }: { target: HTMLSelectElement }) {
      if (this.status === 'disabled') return false;
      this.isExpanded = !this.isExpanded;

      if (target) {
        this.$emit('update:value', target.value);
        this.$emit('click', target.value);
      }
    },
    handleUpdateValue(options: IOption) {
      this.$emit('update:value', options.value);
      this.$emit('click', options.value);
    },
    handleUnexpand() {
      this.isExpanded = false;
    },
  },
});
</script>
<style lang="scss" scoped>
@import './Select';
</style>
