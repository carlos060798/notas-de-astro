import { useState } from "react";
function Search() {
  const [search, setSearch] = useState("hola");
  return (
    <>
      <div>
        <h1>{search}</h1>
        <button onClick={() => setSearch("cambio")}>cambio</button>
      </div>
    </>
  );
}

export default Search;
