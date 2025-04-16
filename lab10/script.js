const apiKey = 'ca370d51a054836007519a00ff4ce59e';

async function loadImages() {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '載入中...';

  const listUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${apiKey}&per_page=10&format=json&nojsoncallback=1`;

  try {
    const listResponse = await fetch(listUrl);
    const listData = await listResponse.json();

    gallery.innerHTML = '';

    let count = 0;
    for (const photo of listData.photos.photo) {
      if (count >= 10) break;

      const sizeUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=${apiKey}&photo_id=${photo.id}&format=json&nojsoncallback=1`;
      const sizeResponse = await fetch(sizeUrl);
      const sizeData = await sizeResponse.json();

      const medium = sizeData.sizes.size.find(size => size.label === 'Medium') || sizeData.sizes.size[0];

      const img = document.createElement('img');
      img.src = medium.source;
      img.alt = photo.title || 'Flickr Photo';
      gallery.appendChild(img);
      count++;
    }
  } catch (err) {
    console.error('載入失敗:', err);
    gallery.innerHTML = '圖片載入失敗，請稍後再試。';
  }
}
