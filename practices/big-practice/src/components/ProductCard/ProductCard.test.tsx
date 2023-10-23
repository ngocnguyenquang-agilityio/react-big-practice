import { render } from '@testing-library/react';

// Components
import ProductCard, { IProductCard } from '.';

const props: IProductCard = {
  name: 'Test Product Card',
  price: 20,
  image: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fkeyboard.png%3Fv%3D1690003507&w=3840&q=75'
};

describe('ProductCard Component', () => {
  test('Shoudl render sucessfully', () => {
    const comp = render(<ProductCard {...props} />)
    expect(comp).toBeTruthy()
  });

  test('Should match snapshot', () => {
    const comp = render(<ProductCard {...props} />)
    expect(comp).toMatchSnapshot()
  });

  // TODO: Update more test cases when implement functions
});
