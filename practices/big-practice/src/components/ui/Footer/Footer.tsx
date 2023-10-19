
// Components
import { Button } from "@components/ui/Button/Button"

// Icons
import { LogoIcon } from "@components/icons"

const Footer = (): JSX.Element => {
  return (
    <footer className="text-sm text-neutral-400">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t px-6 py-12 text-sm border-neutral-700 md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0">
        <div>
          <Button variant='link' size='icon'>
            <LogoIcon />
          </Button>
        </div>
        <div>
          <nav>
            <ul>
              <li className="block p-2 text-lg underline-offset-4 hover:underline hover:text-neutral-300 md:inline-block md:text-sm cursor-pointer">
                Home
              </li>
              <li className="block p-2 text-lg underline-offset-4 hover:underline hover:text-neutral-300 md:inline-block md:text-sm cursor-pointer">
                About
              </li>
              <li className="block p-2 text-lg underline-offset-4 hover:underline hover:text-neutral-300 md:inline-block md:text-sm cursor-pointer">
                Terms & Conditions
              </li>
              <li className="block p-2 text-lg underline-offset-4 hover:underline hover:text-neutral-300 md:inline-block md:text-sm cursor-pointer">
                Privacy Policy
              </li>
              <li className="block p-2 text-lg underline-offset-4 hover:underline hover:text-neutral-300 md:inline-block md:text-sm cursor-pointer">
                FAQ
              </li>
            </ul>
          </nav>
        </div>
        <div className="md:ml-auto">
          <a className="flex h-8 w-max flex-none items-center justify-center rounded-md border text-xs border-neutral-700 bg-black text-white">
            <span className="px-3">▲</span>
            <hr className="h-full border-r border-neutral-700" />
            <span className="px-3">Deploy</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
