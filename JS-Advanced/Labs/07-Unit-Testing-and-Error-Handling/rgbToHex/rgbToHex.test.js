const { expect } = require('chai');
const { rgbToHexColor } = require('./rgbToHex');

describe('rgbToHex', () => {
  it('converts to black, down bound', () => {
    expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000');
  });

  it('converts to white, upper bound', () => {
    expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF');
  });

  it('return undefined for out of upper bound', () => {
    expect(rgbToHexColor(256, 256, 256)).to.be.undefined;
  });

  it('return undefined for out of down bound', () => {
    expect(rgbToHexColor(-1, -1, -1)).to.be.undefined;
  });

  it('return undefined for invalid type params', () => {
    expect(rgbToHexColor('0', '0', '0')).to.be.undefined;
  });

  it('return undefined for floats', () => {
    expect(rgbToHexColor(1.1, 1.1, 1.1)).to.be.undefined;
  });

  it('return undefined for missing params', () => {
    expect(rgbToHexColor(0, 0)).to.be.undefined;
    expect(rgbToHexColor(0)).to.be.undefined;
    expect(rgbToHexColor()).to.be.undefined;
  });
}); 