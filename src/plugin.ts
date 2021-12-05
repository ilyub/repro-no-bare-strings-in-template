import type { Plugin as VuePlugin } from "vue";

// eslint-disable-next-line import/no-unassigned-import
import "./components/Group.extras";
// eslint-disable-next-line import/no-unassigned-import
import "./components/Input.extras";
// eslint-disable-next-line import/no-unassigned-import
import "./components/LanguagePicker.extras";
// eslint-disable-next-line import/no-unassigned-import
import "./components/Select.extras";
// eslint-disable-next-line import/no-unassigned-import
import "./components/Tooltip.extras";
import Group from "./components/Group.vue";
import Input from "./components/Input.vue";
import Knob from "./components/Knob.vue";
import LanguagePicker from "./components/LanguagePicker.vue";
import MenuItem from "./components/MenuItem.vue";
import NavButton from "./components/NavButton.vue";
import Select from "./components/Select.vue";
import Tooltip from "./components/Tooltip.vue";

// eslint-disable-next-line @skylib/prefer-readonly
export const plugin: VuePlugin = {
  install(app) {
    app.component(Group.name, Group);
    app.component(Input.name, Input);
    app.component(Knob.name, Knob);
    app.component(LanguagePicker.name, LanguagePicker);
    app.component(MenuItem.name, MenuItem);
    app.component(NavButton.name, NavButton);
    app.component(Select.name, Select);
    app.component(Tooltip.name, Tooltip);
  }
};
