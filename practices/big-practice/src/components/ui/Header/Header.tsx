// Components
import { CartIcon, LogoIcon } from "@components/icons"
import { Button } from "@components/ui/Button/Button"
import SearchInput from "@components/ui/SearchInput/SearchInput"

// TODO: Update type when implement function

const Header = () => {
  return (
    <div className="flex w-full items-center">
      <div className="flex w-full md:w-1/3 items-center">
        <div className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6">
          <Button variant='link' size='icon'>
            <LogoIcon />
          </Button>
          <a className="ml-2 text-sm font-medium uppercase text-white" href="">acme store</a>
        </div>
        <ul className="gap-6 text-sm md:flex md:items-center">
          <li className="underline-offset-4 hover:underline text-neutral-400 hover:text-neutral-300 cursor-pointer">
            All
          </li>
          <li className="underline-offset-4 hover:underline text-neutral-400 hover:text-neutral-300 cursor-pointer">
            Shirts
          </li>
          <li className="underline-offset-4 hover:underline text-neutral-400 hover:text-neutral-300 cursor-pointer">
            Stickers
          </li>
        </ul>
      </div>
      <div className="justify-center md:flex md:w-1/3">
        <SearchInput
          type="text"
          placeholder="Search Products..."
          onChange={() => { }}
        />
      </div>
      <div className="flex justify-end md:w-1/3">
        <Button variant='outline' size='icon'>
          <CartIcon />
        </Button>
      </div>
    </div>
  )
}

export default Header
