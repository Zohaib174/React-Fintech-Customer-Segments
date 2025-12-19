import Section1 from "./Section 1/Section1";
const App = () => {
  const user = [
    { img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", intro: "", tag: "Satisfied" },
    { img: "https://images.unsplash.com/photo-1637689810282-4692c7677feb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", intro: "", tag: "Confident" },
    { img: "https://images.unsplash.com/photo-1614786269829-d24616faf56d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3N3b21hbnxlbnwwfHwwfHx8MA%3D%3D", intro: "", tag: "Ambitious" },
    {img:"https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", intro:"",tag:"Deserved" },
    {img:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVzaW5lc3NtYW58ZW58MHx8MHx8fDA%3D", intro:"",tag:"Delegated" }
  ];
  return (
    <div>
      <Section1 user={user} />
    </div>
  );
};

export default App;
