// Components
import { Button } from "../Button/button"
import SearchInput from "../SearchInput/SearchInput"

// TODO: Update type when implement function

const Header = () => {
  return (
    <div className="flex w-full items-center">
      <div className="flex w-full md:w-1/3 items-center">
        <div className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6">
          <Button variant='link' size='icon'>
            <div className="flex flex-none items-center justify-center border border-neutral-700 bg-black h-[40px] w-[40px] rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" aria-label="Acme Store logo" viewBox="0 0 32 28" className="h-5 w-5 fill-white h-[16px] w-[16px]">
                <path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z" />
                <path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z" />
              </svg>
            </div>
          </Button>
          <a className="ml-2 text-sm font-medium uppercase text-white" href="">acme store</a>
        </div>
        <ul className="gap-6 text-sm md:flex md:items-center">
          <li>
            <a className=" underline-offset-4 hover:underline text-neutral-400 hover:text-neutral-300" href="">All</a>
          </li>
          <li>
            <a className=" underline-offset-4 hover:underline text-neutral-400 hover:text-neutral-300" href="">Shirts</a>
          </li>
          <li>
            <a className=" underline-offset-4 hover:underline text-neutral-400 hover:text-neutral-300" href="">Stickers</a>
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
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </svg>
        </Button>
      </div>
    </div>
  )
}

export default Header
