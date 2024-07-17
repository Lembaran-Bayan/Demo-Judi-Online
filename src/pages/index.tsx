import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState<string>("");

  function handleLogin() {
    alert(username);
  }

  return (
    <main className="min-h-screen flex flex-col justify-center items-center font-jakarta gap-10">
      <h1 className="text-[40px] font-semibold">Demo Judi Online</h1>
      <form
        className="flex flex-col gap-5 outline outline-1 w-[500px] p-10"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <label className="flex flex-col gap-3 text-[20px]">
          Username
          <input
            type="text"
            className="outline outline-1 px-2 py-1"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </label>

        <button
          type="submit"
          className="text-[20px] bg-black text-white py-2"
        >
          Log In
        </button>
      </form>
    </main>
  );
}

