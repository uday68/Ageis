import React from "react";
import clsx from "clsx";
type keyType = "mac" | "win"|"ctrl" | "alt" | "shift" | "fn" | "cmd" | "option";
interface KeyProps {
  type?: keyType;
  label?: string;
  className?: string;
}
const SYMBOLS: Record<keyType, string> = {
  mac: "⌘",
  win: "⊞",
    ctrl: "⌃",
    alt: "⌥",
    shift: "⇧",
    fn: "fn",
    cmd: "⌘",
    option: "⌥",
};
const Header:React.FC<KeyProps> = ({type = "cmd", label, className}) => {
  const content: string = label ?? (type ? SYMBOLS[type] : "");
    return (
<header className=" ml-60 px-88 w-full h-16 px-margin-desktop flex justify-between items-center bg-surface-container-lowest/80 backdrop-blur-md sticky top-0 z-40 border-b border-surface-variant/30">
<div className="flex items-center bg-surface-variant/30 border border-outline-variant/30 rounded-lg px-3 py-1.5 w-96 focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/50 transition-all">
<span className="material-symbols-outlined text-on-surface-variant text-[18px] mr-2" data-icon="search">search</span>
<input className="bg-transparent border-none outline-none text-on-surface w-full font-body-md placeholder-on-surface-variant/50 focus:ring-0" placeholder="Search memory nodes, incidents, patterns..." type="text"/>
<div className="flex items-center gap-1 ml-2">

 <kbd
      className={clsx(
        "inline-flex items-center justify-center px-2 py-0.5 rounded border border-outline text-sm font-code-md bg-surface-container text-on-surface",
        className
      )}
      aria-label={typeof content === "string" ? content : undefined}
    >
      {content}
    </kbd><kbd className="font-code-md text-label-caps text-on-surface-variant bg-surface-container px-1.5 py-0.5 rounded border border-surface-variant">K</kbd>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-on-surface-variant hover:text-primary hover:bg-surface-variant/30 p-2 rounded-full transition-all duration-200">
<span className="material-symbols-outlined" data-icon="smart_toy">smart_toy</span>
</button>
<button className="text-on-surface-variant hover:text-primary hover:bg-surface-variant/30 p-2 rounded-full transition-all duration-200 relative">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
<span className="absolute top-2 right-2 w-2 h-2 bg-tertiary-container rounded-full"></span>
</button>
<button className="text-on-surface-variant hover:text-primary hover:bg-surface-variant/30 p-2 rounded-full transition-all duration-200">
<span className="material-symbols-outlined" data-icon="help">help</span>
</button>
<div className="h-8 w-8 rounded-full overflow-hidden border border-outline-variant/50 ml-2">
<img alt="User profile avatar" className="w-full h-full object-cover" data-alt="A close-up profile avatar of a professional in a highly technical, futuristic control room setting. Soft blue rim lighting highlights their features against a dark, tech-oriented background. The image has a crisp, high-end corporate aesthetic matching the dark mode glassmorphic enterprise UI." src="https://lh3.googleusercontent.com/aida-public/AB6AXuClTYCi9I-I13bucP-XAgWyiK5SE8gHuSNiBfnu4X4NnBbISUi_ewvIQp-W_He9t2-ja_MV9u7zJSOsD0mv_A69NGeksKyOjnmtc1uXNhGebHto9f9DA_cC-3fuggS8Pa7gCNSE_1PFSjKZWwXFdOCVHv71jPuk5Pa8XLdwY-pOOkzSXJk660Tfsn20yp0vLE8mm6tLj-xwb98TaNTz1mjE7HpC7ivrNJoHl7e0oPhVTGk1MK1dgRSKFhrPZy_ZNfgZw8WF5DLB0wg"/>
</div>
</div>
</header>
    )
}

export default Header;