const { GenericContainer } = require("./build/index");

jest.setTimeout(120_000);

test("starts a container and copies content under Jest CommonJS runtime", async () => {
  let container;
  try {
    container = await new GenericContainer("alpine:3.12")
      .withCommand(["sleep", "infinity"])
      .withCopyContentToContainer([{ content: "testcontainers", target: "/tmp/content.txt" }])
      .start();

    await expect(container.exec(["cat", "/tmp/content.txt"])).resolves.toMatchObject({ output: "testcontainers" });
  } finally {
    await container?.stop();
  }
});
