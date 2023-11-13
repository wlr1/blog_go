import React from "react";
import useSWR from "swr";
import { Box } from "@mantine/core";
import AddTodo from "./components/AddTodo";

export const ENDPOINT = "http://localhost:4000";

const fetcher = (url: string) =>
  fetch(`${ENDPOINT}/${url}`).then((r) => r.json());

const App = () => {
  const { data, mutate } = useSWR("api/todos", fetcher);

  return (
    <Box>
      {JSON.stringify(data)}

      <AddTodo />
    </Box>
  );
};

export default App;
