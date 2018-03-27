import { DistancePipe } from './distance.pipe';

describe('DistancePipe', () => {
  let pipe;
  // before each(() => )
  beforeAll(() => {
    pipe = new DistancePipe();
  });

  it('create an instance', () => {
    // const pipe = new DistancePipe();
    expect(pipe).toBeTruthy();
  });

  it('shows near value', () => {
    expect(pipe.transform(30)).toBe('acá');
    expect(pipe.transform(60)).not.toBe('acá');
  });

  it('shows value in meters', () => {
    expect(pipe.transform(560)).toBe('560m');
    expect(pipe.transform(1400)).not.toBe('1400m');
  });

  it('shows value in km', () => {
    expect(pipe.transform(1560)).toBe('1.56km');
    expect(pipe.transform(400)).not.toBe('0.4km');
  });

  it('show error', () => {

  });
});
