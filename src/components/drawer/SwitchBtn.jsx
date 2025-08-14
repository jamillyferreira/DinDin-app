import { Switch } from "@headlessui/react";
import { useState } from "react";

function SwitchBtn() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex items-center justify-between gap-3 mb-2">
      <span className="text-sm font-medium text-lightGray">Tema escuro</span>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? "bg-primary" : "bg-gray-300"
        } relative inline-flex h-5 w-10 items-center rounded-full transition`}
      >
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block size-3 transform rounded-full bg-white transition`}
        />
      </Switch>
    </div>
  );
}

export default SwitchBtn;
