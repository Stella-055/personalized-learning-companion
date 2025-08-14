import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import Cta from "@/components/Cta";
import { recentSessions } from "@/lib/constants";


export default function Home() {
  return (
   <main >
    <h1 className=''>Popular Companions</h1>
      <section className="home-section">
       
      
        
        <CompanionCard  id="1" name="Science" topic="Neura The Brainy Explorer" subject="Neural Network of The Brain" duration={45} color="#ffda62" bookmarked={false}/>
        <CompanionCard  id="1" name="Science" topic="Neura The Brainy Explorer" subject="Neural Network of The Brain" duration={45} color="#BDE7ff" bookmarked={false}/>
        <CompanionCard  id="1" name="Science" topic="Neura The Brainy Explorer" subject="Neural Network of The Brain" duration={45} color="#e5d0ff" bookmarked={false}/>  
      </section>
     <section className="home-section">
      <CompanionList title="Recent Sessions " classNames="md:w-2/3 full " companions={recentSessions}/>
      <Cta/>
     </section>

   </main>
   
  );
}
