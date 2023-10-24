import { useState } from "react";


function Search() {
  const [search, setSearch] = useState("");
  const buscar = (e) => setSearch(e.target.value);
  const url="/results/"
  return (
    <>
      <div>
        <form className="d-flex" action={url+search} method="post" >
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            value={search}
            onChange={buscar}
          />
          <button className="btn btn-outline-success mx-4" type="submit">
            Search
          </button>
        </form>
      </div>
    </>
  );
}

export default Search;
