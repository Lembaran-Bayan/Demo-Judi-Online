import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function SlotMachine() {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [slot1, setSlot1] = useState<number>(10);
  const [slot2, setSlot2] = useState<number>(10);
  const [slot3, setSlot3] = useState<number>(10);
  const [slot4, setSlot4] = useState<number>(10);

  const [isRollingSlot1, setIsRollingSlot1] = useState<boolean>(true);
  const [isRollingSlot2, setIsRollingSlot2] = useState<boolean>(true);
  const [isRollingSlot3, setIsRollingSlot3] = useState<boolean>(true);
  const [isRollingSlot4, setIsRollingSlot4] = useState<boolean>(true);

  useEffect(() => {
    setUsername(router.query.username as string);
  }, [router]);

  useEffect(() => {
    // Function to generate a shuffled array of numbers from 0 to 9
    const generateUniqueNumbers = () => {
      const numbers = Array.from({ length: 10 }, (_, i) => i);
      for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
      }
      return numbers;
    };

    const uniqueNumbers = generateUniqueNumbers();
    if (slot1 == 10) {
      setSlot1(uniqueNumbers[0]);
      setSlot2(uniqueNumbers[1]);
      setSlot3(uniqueNumbers[2]);
      setSlot4(uniqueNumbers[3]);
    }

    const interval1 = setInterval(() => {
      if (isRollingSlot1) {
        setSlot1((prev) => (prev < 9 ? prev + 1 : 0));
      }
    }, 50);

    const interval2 = setInterval(() => {
      if (isRollingSlot2) {
        setSlot2((prev) => (prev < 9 ? prev + 1 : 0));
      }
    }, 50);

    const interval3 = setInterval(() => {
      if (isRollingSlot3) {
        setSlot3((prev) => (prev < 9 ? prev + 1 : 0));
      }
    }, 50);

    const interval4 = setInterval(() => {
      if (isRollingSlot4) {
        setSlot4((prev) => (prev < 9 ? prev + 1 : 0));
      }
    }, 50);

    // Cleanup intervals on component unmount
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(interval4);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRollingSlot1, isRollingSlot2, isRollingSlot3, isRollingSlot4]);

  if (username)
    return (
      <main className="font-jakarta">
        <section className="p-10">
          <h1 className="text-center text-[40px] mb-20">Demo Judi Online</h1>
          <h1 className="text-center text-[40px]">
            Welcome, <strong>{username?.slice(0, 1).toUpperCase() + username?.toLowerCase().slice(1)}</strong>
          </h1>
        </section>

        <section className="flex flex-col justify-center items-center">
          <div className="flex">
            <div className="outline outline-1 text-[60px] flex justify-center items-center w-[150px] h-[200px]">
              {slot1}
            </div>
            <div className="outline outline-1 text-[60px] flex justify-center items-center w-[150px] h-[200px]">
              {slot2}
            </div>
            <div className="outline outline-1 text-[60px] flex justify-center items-center w-[150px] h-[200px]">
              {slot3}
            </div>
            <div className="outline outline-1 text-[60px] flex justify-center items-center w-[150px] h-[200px]">
              {slot4}
            </div>
          </div>

          <button
            className="text-[20px] bg-black text-white w-[500px] py-2 mt-10 hover:bg-black/70"
            onClick={() => {
              setIsRollingSlot1(false);
              setSlot1(Math.floor(Math.random() * 10));
              setTimeout(() => {
                setSlot2(Math.floor(Math.random() * 10));
                setIsRollingSlot2(false);
              }, 500);
              setTimeout(() => {
                setSlot3(Math.floor(Math.random() * 10));
                setIsRollingSlot3(false);
              }, 1000);
              setTimeout(() => {
                setSlot4(Math.floor(Math.random() * 10));
                setIsRollingSlot4(false);
              }, 1500);
            }}
          >
            Roll
          </button>
        </section>
      </main>
    );
}
