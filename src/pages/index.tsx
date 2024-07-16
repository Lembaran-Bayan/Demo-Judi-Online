import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center font-jakarta gap-10">
      <h1>Slot Gacor</h1>
      <form className="flex flex-col gap-5">
        <label className="flex gap-3">
          Username
          <input type="text" />
        </label>

        <button type="submit">Log In</button>
      </form>
    </main>
  );
}
