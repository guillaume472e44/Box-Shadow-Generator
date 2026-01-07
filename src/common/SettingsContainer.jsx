import { useState } from "react";
import Tab from "./components/Tab";
import ShadowsList from "../features/shadows/ShadowsList";
import BoxPanel from "../features/boxProperties/BoxPanel";

export default function SettingsContainer() {
  const [tabs, setTabs] = useState(0);
  const tabList = [<ShadowsList />, <BoxPanel />];

  return (
    <div className="relative mt-12 mb-8  w-[640px] h-[640px] border border-gray-300 bg-gray-50 shadow-xl rounded-b-xl rounded-tl-4xl ">
      <div className="absolute flex -translate-y-full right-0">
        <Tab name="Shadow" tabSelect={() => setTabs(0)} isFocus={tabs === 0} />
        <Tab name="Box Settings" tabSelect={() => setTabs(1)} isFocus={tabs === 1} />
      </div>
      {tabList[tabs]}
    </div>
  );
}
