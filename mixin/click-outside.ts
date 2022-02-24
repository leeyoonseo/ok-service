import Vue from "vue";

export default Vue.extend({
  directives: {
    "click-outside": {
      // TODO: any 해결
      bind(el: any, { expression }: any, { context }: any) {
        el.clickOutsideEvent = function (e: Event) {
          if (!(el === e.target || el.contains(e.target))) {
            context[expression](e);
          }
        };
        document.body.addEventListener("click", el.clickOutsideEvent);
      },
      unbind(el: any) {
        document.body.removeEventListener("click", el.clickOutsideEvent);
      },
    },
  },
});
