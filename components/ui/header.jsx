
  
// "use client";

// import {
//   SignedIn,
//   SignedOut,
//   SignInButton,
//   SignUpButton,
//   UserButton,
// } from "@clerk/nextjs";
// import { Link } from "lucide-react";
// import Image from "public";


// const Header = () => {
//   return (
//     <div className="fixed top-0">
//       <nav>
//         <Link href="/">
//         <Image src={"/preview.png"}alt="wealthx logo"height={60}width={200}
//         className="h-12 w-auto object-contain"
//         />
//         </Link>
//       </nav>
//       <SignedOut>
//         <SignInButton />
//         <SignUpButton />
//       </SignedOut>
//       <SignedIn>
//         <UserButton />
//       </SignedIn>
//     </div>
//   );
// };

// export default Header;
"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="fixed top-0">
      <nav>
        <Link href="/">
          <Image
            src="/preview.png"
            alt="wealthx logo"
            height={60}
            width={200}
            className="h-12 w-auto object-contain"
          />
        </Link>
      </nav>
      <SignedOut>
        <SignInButton />
        <SignUpButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default Header;
