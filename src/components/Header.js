import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className={"header"}>
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

//CSS in jSX
//const heading = {
// color: "black",
//  backgroundColor: "#ccc",
//};

export default Header;
