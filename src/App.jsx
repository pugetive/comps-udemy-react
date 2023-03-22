import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: "asdf",
      label: "Can i use React ona project?",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. ",
    },
    {
      id: "jljkl;jkl;",
      label: "Can i use React ona project?",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. ",
    },
    {
      id: "rueiwpquriep",
      label: "Can i use React ona project?",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. ",
    },
  ];

  return <Accordion items={items} />;
}

export default App;
