import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center w-full py-20  ">
      <div>
        <h2 className="font-bold">Not Found</h2>
        <p className="font-bold">Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </div>
    </div>
  );
}
