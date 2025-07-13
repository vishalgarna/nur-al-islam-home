import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import article1 from "@/assets/article-1.jpg";
import article2 from "@/assets/article-2.jpg";
import article3 from "@/assets/article-3.jpg";

export function FeaturedSection() {
  const articles = [
    {
      id: 1,
      title: "Understanding the Five Daily Prayers",
      excerpt: "A comprehensive guide to the spiritual significance and practical aspects of Salah in our daily lives.",
      image: article1,
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Worship"
    },
    {
      id: 2,
      title: "The Beauty of Dhikr and Remembrance",
      excerpt: "Explore the peaceful practice of remembering Allah and its transformative effects on the heart and soul.",
      image: article2,
      date: "March 12, 2024",
      readTime: "6 min read",
      category: "Spirituality"
    },
    {
      id: 3,
      title: "Finding Peace in Times of Hardship",
      excerpt: "Islamic wisdom and guidance for navigating life's challenges with faith, patience, and trust in Allah.",
      image: article3,
      date: "March 10, 2024",
      readTime: "10 min read",
      category: "Guidance"
    }
  ];

  return (
    <section className="section-islamic">
      <div className="container-islamic">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Featured Articles
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover enlightening articles that deepen your understanding of Islam 
            and provide practical guidance for your spiritual journey.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="card-islamic overflow-hidden group">
              {/* Article Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-primary-glow transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>

                {/* Article Meta */}
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </div>
                </div>

                {/* Read More Button */}
                <Button 
                  variant="ghost" 
                  className="w-full justify-start p-0 h-auto text-primary hover:text-primary-glow font-medium"
                >
                  Read More →
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button className="btn-islamic-outline">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
}