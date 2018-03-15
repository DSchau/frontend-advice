const path = require('path');
const fs = require('fs');
const sharp = require('sharp');
const glob = require('glob');

const getFiles = src => {
  return new Promise((resolve, reject) => {
    glob(path.join(src, '**/*.{jpg,jpeg,gif,png}'), (err, files) => {
      if (err) {
        return reject(err);
      }
      resolve(files);
    });
  }).then(files => {
    return files.filter(file => file.indexOf('-optimized') === -1);
  });
};

const writeFile = ({ file, quality = 75, size = 1250 }) => {
  const [name, extension] = file
    .split('/')
    .pop()
    .split('.');
  const image = sharp(file);

  return image.metadata().then(metadata => {
    const fileName = file.replace(
      `${name}.${extension}`,
      `${name}-optimized.${extension}`
    );
    let stream;
    if (metadata.width > size) {
      stream = image
        .resize(size)
        [extension]({ quality })
        .toFile(fileName);
    } else {
      stream = new Promise(resolve => {
        return image.toBuffer().then(buffer => {
          fs.writeFile(fileName, buffer, 'binary', (err, data) => {
            resolve();
          });
        });
      });
    }
    return stream
      .then(() => {
        console.log(`Updated ${fileName}`);
      })
      .catch(err => {
        console.error(err);
      });
  });
};

getFiles(path.resolve('src')).then(files => {
  return Promise.all(
    files.map(file =>
      writeFile({
        file
      })
    )
  );
});
