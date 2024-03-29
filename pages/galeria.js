import ImageGallery from 'react-image-gallery'
import React, {Component} from 'react'
//import './styles.css'
import "react-image-gallery/styles/css/image-gallery.css"

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];
 
class Galeria extends Component {

    state = {
        images: images
    }
  render() {
    return <ImageGallery items={this.state.images} />
  }
}

export default Galeria