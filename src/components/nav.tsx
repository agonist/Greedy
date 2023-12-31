import { ThemeSwitcher } from "./theme-switcher";

export const Nav = () => {
  return (
    <header className="flex w-full top-0 px-4 py-2 border-b items-center">
      <div className="container flex items-center place-content-between">
        <p>(⌐ ͡■ ͜ʖ ͡■)</p>
        <ThemeSwitcher />
      </div>
    </header>
  );
};
