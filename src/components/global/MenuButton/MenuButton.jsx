import "./MenuButton.scss"; 
const MenuButton = ({ tab, setTab, selected, setSelected }) => {
  const isActive = selected === tab;

  return (
    <div
      className={`menu-item ${isActive ? "active" : ""}`}
      onClick={() => {
        setTab(tab);
        setSelected(tab);
      }}
    >
      {tab}
    </div>
  );
};

export default MenuButton;