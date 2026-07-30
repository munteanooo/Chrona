import type { Task } from "@chrona/types";

async function getTasks(): Promise<Task[]> {
  const response = await fetch("http://localhost:3001/tasks", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch tasks");
  }

  return response.json();
}

export default async function DashboardPage() {
  const tasks = await getTasks();

  return (
    <main>
      <h1>Dashboard</h1>

      <div>
        {tasks.map((task) => (
          <div key={task.id}>
            <h2>{task.title}</h2>

            <p>
              Status:{" "}
              {task.completed ? "Completed" : "Pending"}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}