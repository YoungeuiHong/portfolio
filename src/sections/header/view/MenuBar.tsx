import { MENUS, Menu } from "@/data/menu";
import MenuItem from "./MenuItem";

export default function MenuBar() {
  return (
    <>
      {MENUS.map((menu: Menu) => (
        <MenuItem key={menu.id} id={menu.id} title={menu.title} />
      ))}
    </>
  );
}
