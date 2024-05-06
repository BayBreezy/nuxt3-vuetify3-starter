import type { IconSet, IconAliases, IconProps } from "vuetify";
import { Icon } from "@iconify/vue";

const aliases: IconAliases = {
  collapse: "ph:caret-up",
  complete: "ph:check",
  cancel: "ph:x-circle",
  close: "ph:x",
  delete: "ph:trash",
  clear: "ph:x-circle",
  success: "ph:check-circle",
  info: "ph:info",
  warning: "ph:warning",
  error: "ph:x-circle",
  prev: "ph:caret-left",
  next: "ph:caret-right",
  checkboxOn: "ph:check-square-fill",
  checkboxOff: "ph:square",
  checkboxIndeterminate: "ph:square-logo-fill",
  delimiter: "ph:circle-fill",
  sort: "ph:arrows-down-up-fill",
  expand: "ph:caret-down",
  menu: "ph:list",
  subgroup: "ph:caret-down-fill",
  dropdown: "ph:caret-down-fill",
  radioOn: "ph:radio-button-fill",
  radioOff: "ph:circle",
  edit: "ph:note-pencil",
  ratingEmpty: "ph:star",
  ratingFull: "ph:star-fill",
  ratingHalf: "ph:star-half-fill",
  loading: "ph:spinner",
  first: "ph:caret-double-left-duotone",
  last: "ph:caret-double-right-duotone",
  unfold: "ph:arrows-down-up",
  file: "ph:paperclip",
  plus: "ph:plus",
  minus: "ph:minus",
  sortAsc: "ph:sort-ascending",
  sortDesc: "ph:sort-descending",
  calendar: "ph:calendar",
};

const custom: IconSet = {
  // @ts-ignore
  component: (props: IconProps) => h(Icon, { ...props }),
};

// export both aliases and the custom object created
export { aliases, custom };
