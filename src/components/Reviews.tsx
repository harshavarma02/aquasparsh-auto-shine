import { useEffect, useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Star } from 'lucide-react';

interface Review {
  author_name: string;
  rating: number;
  text: string;
  profile_photo_url: string;
}

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([
    {
      author_name: "John Doe",
      rating: 5,
      text: "Excellent service! My car looks brand new after their detailing service.",
      profile_photo_url: "https://via.placeholder.com/50"
    },
    {
      author_name: "Jane Smith",
      rating: 5,
      text: "The ceramic coating they applied is amazing. Water just beads right off!",
      profile_photo_url: "https://via.placeholder.com/50"
    },
    {
      author_name: "Mike Johnson",
      rating: 5,
      text: "Professional team and great attention to detail. Highly recommended!",
      profile_photo_url: "https://via.placeholder.com/50"
    }
  ]);

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={review.profile_photo_url}
                    alt={review.author_name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{review.author_name}</h3>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;