import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Review {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
}

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviews] = useState<Review[]>([
    {
      author_name: "Sai Kiran",
      rating: 5,
      text: "Best car wash in Sainikpuri. They have all the latest equipment and technology. The staff is very professional and courteous. They take good care of your car. Highly recommended.",
      relative_time_description: "2 months ago"
    },
    {
      author_name: "Rahul Kumar",
      rating: 5,
      text: "Excellent service! The ceramic coating they applied is amazing. Water just beads right off!",
      relative_time_description: "1 month ago"
    },
    {
      author_name: "Priya Singh",
      rating: 5,
      text: "Professional team and great attention to detail. The PPF installation was perfect!",
      relative_time_description: "3 weeks ago"
    }
  ]);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="py-20 bg-[#0A0F1A]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gradient mb-4">Customer Reviews</h2>
        <p className="text-gray-400 text-center mb-12">What our customers say about us on Google</p>
        
        <Card className="max-w-3xl mx-auto bg-[#0D1425] border-blue-900/20">
          <CardContent className="p-8 text-center">
            <Quote className="w-12 h-12 mx-auto mb-6 text-blue-500" />
            <p className="text-lg text-white mb-6">{reviews[currentIndex].text}</p>
            <div className="flex justify-center mb-2">
              {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-blue-500 text-blue-500" />
              ))}
            </div>
            <h3 className="font-semibold text-blue-500">{reviews[currentIndex].author_name}</h3>
            <p className="text-sm text-gray-400">{reviews[currentIndex].relative_time_description}</p>
            
            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                onClick={prevReview}
                className="p-2 rounded-full bg-[#1A1F2C] hover:bg-[#2A2F3C] text-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <span className="text-gray-400">
                {currentIndex + 1} / {reviews.length}
              </span>
              <button
                onClick={nextReview}
                className="p-2 rounded-full bg-[#1A1F2C] hover:bg-[#2A2F3C] text-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            
            <a
              href="https://www.google.com/maps/place/TotalEnergies+-+AquaSparsh+Car+Spa/@17.4879542,78.5411164,17z/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 text-blue-500 hover:text-blue-400"
            >
              View all reviews on Google →
            </a>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Reviews;