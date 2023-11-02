export const Icon = ({ svg, name }: { svg: string; name: string }) => {
  return (
    <img
      src={svg}
      alt={name}
    />
  );
};
