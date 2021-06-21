import { useState, useEffect } from "react";
interface posti {
  title: string;
  description: string;
  date: string;
}
interface initialStateI {
  name: string;
  description: string;
  posts: posti[];
}

const initialState: initialStateI = {
  name: "",
  description: "",
  posts: [],
};
function useInitialState() {
  const [state, setState]: any = useState(initialState);
  useEffect(() => {
    fetch("/wp-json/")
      .then((response) => response.json())
      .then((data) => {
        setState({ ...state, name: data.name, description: data.description });
      });
  }, []);

 
  return {
    state
    
  };
}

export default useInitialState;
