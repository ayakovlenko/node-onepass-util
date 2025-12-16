import { execFileSync } from "node:child_process";

export function getTokenSync(key: string): string {
  try {
    const stdout: string = execFileSync(
      "op",
      ["item", "get", "--fields=password", "--reveal", key],
      {
        encoding: "utf8",
      },
    );

    const token = stdout.trim();

    if (!token) {
      throw new Error("retrieved token is empty");
    }

    return token;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error("failed to retrieve token");
  }
}
