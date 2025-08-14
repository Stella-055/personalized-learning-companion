
import Image from "next/image";
import Link from "next/link";
interface CompanionCardProps {
    id: string;
    name: string;
    topic: string;
    subject: string;
    duration: number;
    color: string;
    bookmarked: boolean;
  }

const CompanionCard = ({
    id,
    name,
    topic,
    subject,
    duration,
    color,
    bookmarked,
  }: CompanionCardProps) => {

  return (
    <article style={{backgroundColor:color}} className="flex flex-col rounded-4xl border border-black px-4 py-4 gap-5 w-full min-lg:max-w-[410px] justify-between">
   <div className="flex justify-between items-center">
        <div className="subject-badge">{subject}</div>
        <button className="companion-bookmark" >
          <Image
            src={
              bookmarked ? "/icons/bookmark-filled.svg" : "/icons/bookmark.svg"
            }
            alt="bookmark"
            width={12.5}
            height={15}
          />
        </button>
      </div>

      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-sm">{topic}</p>
      <div className="flex items-center gap-2">
        <Image
          src="/icons/clock.svg"
          alt="duration"
          width={13.5}
          height={13.5}
        />
        <p className="text-sm">{duration} minutes</p>
      </div>

      <Link href={`/companions/${id}`} className="w-full">
        <button className="btn-primary w-full justify-center">
          Launch Lesson
        </button>
      </Link>
    </article>
  )
}

export default CompanionCard
