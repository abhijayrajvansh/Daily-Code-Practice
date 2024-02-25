import Link from "next/link";

export default function page () {
  return (
    <section className="flex flex-col">
      <div>home page context</div>
      <Link href='/about' className="text-blue-700 underline">About</Link>
      <Link href='/projects' className="text-blue-700 underline">Projects</Link>
      <Link href='/resume' className="text-blue-700 underline">Resume</Link>
      <Link href='/contact' className="text-blue-700 underline">Contact</Link>
    </section>
  )
}