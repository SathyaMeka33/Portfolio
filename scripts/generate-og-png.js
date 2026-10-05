import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

// Minimal PNG writer with 1200x630 resolution
// Creates an RGBA black-and-white image buffer with dark background and border
function createPNG(width, height) {
  // Row size = 1 byte filter type + width * 4 bytes (RGBA)
  const rowSize = 1 + width * 4;
  const rawData = Buffer.alloc(rowSize * height);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowSize;
    rawData[rowOffset] = 0; // Filter type 0 (None)

    for (let x = 0; x < width; x++) {
      const pixelOffset = rowOffset + 1 + x * 4;

      // Dark background with subtle grid and border
      let r = 0, g = 0, b = 0;
      const isBorder = (x >= 40 && x <= width - 40 && (y === 40 || y === height - 40)) ||
                       (y >= 40 && y <= height - 40 && (x === 40 || x === width - 40));
      const isDivider = (y === 120 || y === 490) && (x >= 80 && x <= width - 80);
      const isGrid = (x % 40 === 0 || y % 40 === 0);

      if (isBorder || isDivider) {
        r = 37; g = 37; b = 37;
      } else if (isGrid) {
        r = 15; g = 15; b = 15;
      }

      rawData[pixelOffset] = r;
      rawData[pixelOffset + 1] = g;
      rawData[pixelOffset + 2] = b;
      rawData[pixelOffset + 3] = 255;
    }
  }

  const compressed = zlib.deflateSync(rawData);

  // PNG Signature
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR chunk
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // Bit depth
  ihdr[9] = 6; // Color type (RGBA)
  ihdr[10] = 0; // Compression
  ihdr[11] = 0; // Filter
  ihdr[12] = 0; // Interlace

  function makeChunk(type, data) {
    const len = data.length;
    const buf = Buffer.alloc(8 + len + 4);
    buf.writeUInt32BE(len, 0);
    buf.write(type, 4, 4, 'ascii');
    data.copy(buf, 8);
    // CRC calculation
    const crc = crc32(Buffer.concat([Buffer.from(type, 'ascii'), data]));
    buf.writeUInt32BE(crc, 8 + len);
    return buf;
  }

  function crc32(buf) {
    let crc = 0 ^ -1;
    for (let i = 0; i < buf.length; i++) {
      let byte = buf[i];
      for (let j = 0; j < 8; j++) {
        const bit = (crc ^ byte) & 1;
        crc = (crc >>> 1) ^ (bit ? 0xEDB88320 : 0);
        byte >>>= 1;
      }
    }
    return (crc ^ -1) >>> 0;
  }

  const ihdrChunk = makeChunk('IHDR', ihdr);
  const idatChunk = makeChunk('IDAT', compressed);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

const png = createPNG(1200, 630);
const outPath = path.resolve('public/og-image.png');
fs.writeFileSync(outPath, png);
console.log('Generated:', outPath, 'size:', png.length, 'bytes');
