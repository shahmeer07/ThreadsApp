import Image from "next/image";
import Link from "next/link";
import { dark } from "@clerk/themes";
import { SignedIn, SignOutButton, OrganizationSwitcher } from "@clerk/nextjs";
function Topbar() {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/threads-57fc2.appspot.com/o/logo.svg?alt=media&token=8986d41e-f1b4-432c-a2bb-d98537be7e87"
          alt="logo"
          width={28}
          height={28}
        />
        <p className="text-heading3-bold text-white text-light1 max-xs:hidden ">
          {" "}
          Threads{" "}
        </p>
      </Link>
      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className=" flex cursor-pointer">
                <img
                  src="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/logout-512.png"
                  alt="Signout"
                  width={24}
                  height={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
        <OrganizationSwitcher
          appearance={{
            baseTheme: dark,
            elements: {
              organizationSwitcherTrigger: "py-2 px-4",
            },
          }}
        />
      </div>
    </nav>
  );
}
export default Topbar;
