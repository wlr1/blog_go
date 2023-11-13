import { useForm } from "@mantine/hooks";
import { useState } from "react";
import { Modal, Button, Group, TextInput, Textarea } from "@mantine/core";

const AddTodo = () => {
  const [open, setOpen] = useState(false);

  const form = useForm({
    initialValues: {
      title: "",
      body: "",
    },
  });

  function createTodo() {}

  return (
    <>
      <Modal opened={open} onClose={() => setOpen(false)} title="Create todo">
        <form onSubmit={form.onSubmit(createTodo)}>
          <TextInput
            required
            mb={12}
            label="Todo"
            placeholder="What do you want to do?"
            {...form.getInputProps("title")}
          />
          <Textarea
            required
            mb={12}
            label="Todo"
            placeholder="Tell me more..."
            {...form.getInputProps("title")}
          />

          <Button type="submit">Create todo</Button>
        </form>
      </Modal>
      <Group position="center">
        <Button fullWidth mb={12} onClick={() => setOpen(true)}>
          Add Todo
        </Button>
      </Group>
    </>
  );
};

export default AddTodo;
