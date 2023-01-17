import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({images, totalHits}) => {
return (
    <>
    <ul>
  {images.map(({id, webformatURL, largeImageURL, tags}) => {
    return(
        <ImageGalleryItem 
        key={id}
        webformatURL={webformatURL}
        largeImageURL={largeImageURL}
        alt={tags}
        ></ImageGalleryItem>
    )
  })}
</ul>
</>
)
};