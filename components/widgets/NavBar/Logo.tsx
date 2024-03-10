import Link from "next/link";

export default function Logo() {
  return (
    <>
      {/* logo */}
      {/* <div className="md:hidden lg:flex  xl:w-1/3 xl:justify-center"> */}
        <Link
          href="/"
          className="bg-blue-500  p-2 text-sm rounded  font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">MED</span>
          <span className="w-12 h-8 bg-yellow-200 text-black rounded flex items-center justify-center">
            .TECH
          </span>
        </Link>
      {/* </div> */}
    </>
  );
}
