import { Input, InputProps } from "@components/ui/Input/Input"

const SearchInput = ({ ...rest }: InputProps): React.ReactElement => {
  return (
    <div className='relative w-full'>
      <Input {...rest} />
      <div className='absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none'>
        <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
        </svg>
      </div>
    </div>
  )
}

export default SearchInput