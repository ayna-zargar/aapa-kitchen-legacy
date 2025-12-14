import { Instagram } from 'lucide-react';

const InstagramFeed = () => {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="badge-premium mb-6 inline-block">Follow Our Journey</span>
          <h2 className="text-headline text-foreground mb-4">
            <span className="text-primary">@theaapafoods</span>
          </h2>
          <p className="text-body max-w-xl mx-auto">
            Stories, recipes, and glimpses into Aapa's kitchen. Join our community.
          </p>
        </div>

        {/* Instagram embed placeholder */}
        <div className="card-luxury p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center mx-auto mb-6">
            <Instagram className="w-8 h-8 text-white" />
          </div>
          
          <p className="text-muted-foreground mb-6">
            Instagram feed will appear here when you add your Instagram embed code.
          </p>

          {/* Placeholder for actual Instagram embed */}
          {/* 
            To add your Instagram feed, you can use:
            1. Instagram's official embed feature
            2. A service like SnapWidget or Elfsight
            
            Replace this div with your embed code:
            <div dangerouslySetInnerHTML={{ __html: 'YOUR_EMBED_CODE_HERE' }} />
          */}

          <a
            href="https://instagram.com/theaapafoods"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Instagram className="w-4 h-4" />
            Follow @theaapafoods
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
