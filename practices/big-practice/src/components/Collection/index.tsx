export interface ICollection {
  list: string[]
}

const Collection = ({ list }: ICollection): JSX.Element => {
  return (
    <nav>
      <h3 className="text-xs text-neutral-400 md:block">
        Collection
      </h3>
      <ul className="block" data-testid='collection'>
        {list.map((item, index) => (
          <li className="mt-2 flex text-white" key={index}>
            <a href="" className="w-full text-sm underline-offset-4 hover:underline hover:text-neutral-100">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Collection
