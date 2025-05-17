import i1 from "../assets/1.JPG";
import i2 from "../assets/2.JPG";
import i3 from "../assets/3.JPG";
import i4 from "../assets/4.JPG";
import i5 from "../assets/5.JPG";
import i6 from "../assets/6.JPG";
import i7 from "../assets/7.JPG";
import i8 from "../assets/8.JPG";
import i9 from "../assets/9.JPG";

const images = [i1, i2, i3, i4, i5, i6, i7, i8, i9];

const Gallery = () => {
  return (
    <div className="max-w-6xl   mx-auto px-4 py-32">
      {/* Gallery Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold uppercase mb-2">Our Gallery</h2>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-md">
            <img
              src={img}
              alt={`Gallery item ${index + 1}`}
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
      <button className="bg-[#16423C] hover:bg-[#6A9C89] text-white text-center w-full my-8 font-sora font-medium py-2 px-6 rounded-full transition-colors">
        Load more
      </button>
    </div>
  );
};

export default Gallery;
