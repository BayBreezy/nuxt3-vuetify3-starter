import type { IconSet, IconAliases, IconProps } from "vuetify";
import { Icon } from "@iconify/vue";

const fluentAliases: IconAliases = {
  collapse: "fluent:chevron-up-24-regular",
  complete: "fluent:checkmark-24-regular",
  cancel: "fluent:dismiss-circle-24-regular",
  close: "fluent:dismiss-24-regular",
  delete: "fluent:delete-24-regular",
  clear: "fluent:dismiss-circle-24-regular",
  success: "fluent:checkmark-circle-24-regular",
  info: "fluent:info-24-regular",
  warning: "fluent:warning-24-regular",
  error: "fluent:dismiss-circle-24-regular",
  prev: "fluent:chevron-left-24-regular",
  next: "fluent:chevron-right-24-regular",
  checkboxOn: "fluent:checkbox-checked-24-filled",
  checkboxOff: "fluent:square-24-regular",
  checkboxIndeterminate: "fluent:checkbox-indeterminate-24-regular",
  delimiter: "fluent:circle-24-filled",
  sort: "fluent:arrow-bidirectional-up-down-24-regular",
  expand: "fluent:chevron-down-24-regular",
  menu: "fluent:list-24-regular",
  subgroup: "fluent:caret-down-24-filled",
  dropdown: "fluent:caret-down-24-filled",
  radioOn: "fluent:radio-button-24-filled",
  radioOff: "fluent:radio-button-24-regular",
  edit: "fluent:pen-24-regular",
  ratingEmpty: "fluent:star-24-regular",
  ratingFull: "fluent:star-24-filled",
  ratingHalf: "fluent:star-half-24-regular",
  loading: "fluent:spinner-ios-20-regular",
  first: "fluent:chevron-double-left-20-regular",
  last: "fluent:chevron-double-right-20-regular",
  unfold: "fluent:chevron-up-down-24-regular",
  file: "fluent:attach-24-regular",
  plus: "fluent:add-24-regular",
  minus: "fluent:subtract-24-regular",
  sortAsc: "fluent:arrow-sort-up-24-regular",
  sortDesc: "fluent:arrow-sort-down-24-regular",
  calendar: "fluent:calendar-24-regular",
};

const fluentCustom: IconSet = {
  // @ts-ignore
  component: (props: IconProps) => h(Icon, { ...props }),
};

export { fluentAliases, fluentCustom };
