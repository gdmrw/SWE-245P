// Components

import Main from "./Main.js";

// Data

import { MAIN_DATA } from "./data.js";

function ExampleDataView() {
  return (
    <>
      <Main content={MAIN_DATA[1].content} />
    </>
  );
}

export default ExampleDataView;