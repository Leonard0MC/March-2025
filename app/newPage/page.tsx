"use client";
import { title } from "@/components/primitives";
import { Button } from "@heroui/button";
import { useState } from "react";
export default function AboutMePage() {
  let facts: string [] = ["Gentoos penguins can swim around 20 mph", "A lightning bolt is five times hotter than the surface of the Sun", "Longest tennis match was 11 hours", "Your brain burns 400-500 calories a day", "Lemons float in water, but limes sink."]
  const [fact, setFact] = useState("");
  return(
    <div>
      <h1 className={title()}>Recepy</h1>
      <div className="flex gap-9">
        <Button onPress={() => {setFact(facts[4])}}></Button>
        <p>{fact}</p>
        <div>
          <p className="text-6xl text-center">About Me Page</p>
          <p className="text-4xl text-center text-orange-100">My Hobbies</p>
          <p className="text-2xl text-center text-lime-400"><b>1. Biking</b></p> 
        </div>
          <div className="flex flex-wrap m-2 justify-center">
            <p className="m-2 border-3 border-lime-200"><img src="Bike 1.jpg" fill={400}></img></p>
            <p className="m-2 border-3 border-yellow-100"><img src="Bike 2 - Copy.jpg" fill></img></p>
          </div>
          <p className="text-center">This is my bike, I been riding a bikes since I was 3 years old, it makes me very happy to just go out and think about life sometime, i find it relaxing, its also good since I excersice .</p>
          <a className="text-lime-400 m-3 text-center" href="https://www.alltrails.com/us/washington/sammamish" target="_blank"><b>Places where I bike when its sunny 😎</b></a>
          <p className="text-2xl text-center text-white"><b>2. Robotics</b></p>
          <div className="flex flex-wrap m-2 justify-center">
            <p className="m-2 border-3 border-green-700"></p>
          </div>
          <p className="text-center">I recently joined the robotics team here at skyline, and Im now in LOVE with the FRC competitons and championships, in fact we are going to districts in 2 weeks and IM SO EXCITED, I have made so many friends and it's probably my favorite thing, not to mention my favortie person as well .</p>

    </div></div>
  );
}