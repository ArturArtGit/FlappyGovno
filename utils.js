export function loadImage(img, src) {
  return new Promise((resolve, reject) => {
    img.onload = resolve;
    img.onerror = () => {
      console.error(`Failed to load image: ${src}`);
      reject();
    };
    img.src = src;
  });
};
