const apiKey = 'B3CRaMgVqMkBQ28Qwp8jeMYOIedg8V74'

export default function getGifs ({ keyword = 'pugs' } = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`
  return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const { data = [] } = response
      if (Array.isArray(data)) {
        const gifs = data.map(image => {
          const { images, title, id } = image
          const { url } = images.fixed_height_downsampled
          return { title, id, url }
        })
        return gifs
      }
    })
}
